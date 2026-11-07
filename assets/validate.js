(function () {
  'use strict';
  const VERSION = 1;
  const MAX_ATTEMPTS = 10000;
  const MAX_ANSWER = 5000;
  const own = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const plain = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  const fail = message => { throw new Error(message); };
  const last = a => a.length ? a[a.length - 1] : null;
  function isDate(v) {
    if (typeof v !== 'string') return false;
    const m = v.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/);
    if (!m || +m[4] > 23 || +m[5] > 59 || +m[6] > 59 || !Number.isFinite(Date.parse(v))) return false;
    const day = new Date(0);
    day.setUTCFullYear(+m[1], +m[2] - 1, +m[3]);
    return day.getUTCFullYear() === +m[1] && day.getUTCMonth() === +m[2] - 1 && day.getUTCDate() === +m[3];
  }
  const optionalDate = (v, label) => {
    if (v === undefined || v === null || v === '') return null;
    if (!isDate(v)) fail(label + ' tidak sesuai.');
    return v;
  };
  function canonical(v) {
    if (Array.isArray(v)) return '[' + v.map(canonical).join(',') + ']';
    if (plain(v)) return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + canonical(v[k])).join(',') + '}';
    return JSON.stringify(v);
  }
  function boundedString(v, max, label, empty = true) {
    if (typeof v !== 'string' || v.length > max || (!empty && !v.trim())) fail(label + ' tidak sesuai.');
    return v;
  }
  function array(v, label) {
    if (!Array.isArray(v) || v.length > MAX_ATTEMPTS) fail(label + ' tidak dapat dibaca.');
    return v;
  }
  function lessonIndex(v, length) {
    if (v === undefined) return 0;
    if (!Number.isSafeInteger(v) || v < 0) fail('Letak materi pada salinan tidak sesuai.');
    return Math.min(v, Math.max(0, length - 1));
  }
  function fingerprint(v) {
    return String(v).normalize('NFKD').toLowerCase().replace(/\p{M}|[^\p{L}\p{N}]/gu, '');
  }
  function validateStore(value, helpers) {
    const content = window.KADER_CONTENT;
    if (!content || !Array.isArray(content.modules) || typeof content.generateCase !== 'function') fail('Data materi untuk memeriksa salinan belum tersedia.');
    if (!helpers || typeof helpers.validProfile !== 'function' || typeof helpers.equalAnswer !== 'function') fail('Pemeriksa salinan belajar belum lengkap.');
    const { validProfile, equalAnswer } = helpers;
    if (!plain(value) || value.version !== VERSION || !plain(value.modules)) fail('Salinan belajar ini tidak sesuai.');
    const moduleMap = new Map(content.modules.map(m => [m.id, m]));
    let profile = null;
    if (value.profile !== null && value.profile !== undefined) {
      if (!plain(value.profile)) fail('Data peserta pada salinan tidak sesuai.');
      const p = value.profile;
      if (typeof p.id !== 'string' || !/^[A-Za-z0-9_-]{1,250}$/.test(p.id) || !isDate(p.registeredAt)) fail('Kode atau waktu pendaftaran peserta tidak sesuai.');
      profile = { id: p.id, registeredAt: p.registeredAt };
      for (const key of ['fullName', 'address', 'dob', 'puskesmas', 'posyandu', 'education', 'priorTraining']) {
        if (typeof p[key] !== 'string') fail('Data peserta pada salinan belum lengkap.');
        profile[key] = p[key].trim();
      }
      const result = validProfile(profile);
      if (!result || result.ok !== true || !Number.isFinite(result.age)) fail('Data peserta pada salinan belum lengkap.');
      profile.age = result.age;
    }
    if (!profile && Object.keys(value.modules).length) fail('Riwayat modul tidak mempunyai data peserta.');
    if (value.indexPaused !== undefined && typeof value.indexPaused !== 'boolean') fail('Status jeda indeks tidak sesuai.');
    const state = { version: VERSION, profile, draftProfile: {}, indexPaused: value.indexPaused === true, modules: {}, updatedAt: optionalDate(value.updatedAt, 'Waktu penyimpanan') };
    if (value.resetAt !== undefined) state.resetAt = optionalDate(value.resetAt, 'Waktu reset');
    if (value.draftProfile !== undefined) {
      if (!plain(value.draftProfile)) fail('Isian indeks pada salinan tidak sesuai.');
      const limits = { fullName: 120, address: 500, dob: 10, puskesmas: 160, posyandu: 160, education: 80, priorTraining: 30 };
      for (const [key, max] of Object.entries(limits)) if (own(value.draftProfile, key)) state.draftProfile[key] = boundedString(value.draftProfile[key], max, 'Isian indeks');
    }
    for (const [id, raw] of Object.entries(value.modules)) {
      const mod = moduleMap.get(id);
      if (!mod || !plain(raw)) fail('Data modul tidak sesuai.');
      if (typeof raw.done1 !== 'boolean' || typeof raw.done2 !== 'boolean') fail('Status penyelesaian materi tidak sesuai.');
      if (typeof raw.paused !== 'boolean' || !Number.isFinite(raw.elapsedMs) || raw.elapsedMs < 0 || raw.elapsedMs > Number.MAX_SAFE_INTEGER) fail('Riwayat waktu atau jeda tidak sesuai.');
      const r = { pre: [], mid: [], post: [], tasks: [], stage: 'pre', drafts: {}, lesson1Index: lessonIndex(raw.lesson1Index, mod.lessons1.length), lesson2Index: lessonIndex(raw.lesson2Index, mod.lessons2.length), done1: raw.done1, done2: raw.done2, taskCounter: 1, currentCase: null, pendingUpload: null, paused: raw.paused, elapsedMs: raw.elapsedMs, completedAt: null, reaction: null };
      for (const kind of ['pre', 'mid', 'post']) {
        const bank = mod.questions[kind];
        const input = array(raw[kind], 'Riwayat tes');
        if (kind === 'pre' && input.length > 1) fail('Pretes hanya dapat dikerjakan satu kali.');
        r[kind] = input.map((a, index) => {
          if (!plain(a) || !Array.isArray(a.questions) || a.questions.length !== 5 || a.attempt !== index + 1) fail('Rekam tes tidak sesuai.');
          const answers = new Map();
          for (const q of a.questions) {
            if (!plain(q) || typeof q.id !== 'string' || !bank.some(b => b.id === q.id) || answers.has(q.id) || typeof q.answer !== 'boolean') fail('Jawaban atau penanda soal tes tidak sesuai.');
            answers.set(q.id, q.answer);
          }
          const questions = bank.map(q => ({ id: q.id, text: q.text, answer: answers.get(q.id), expected: q.answer, correct: answers.get(q.id) === q.answer, explanation: q.explanation }));
          return { attempt: index + 1, score: questions.filter(q => q.correct).length * 20, questions, at: optionalDate(a.at, 'Waktu tes') };
        });
      }
      const passMid = () => !!last(r.mid) && last(r.mid).score >= 60;
      const passTask = () => !!last(r.tasks) && last(r.tasks).correctPct >= 70;
      const passPost = () => !!last(r.post) && last(r.post).score >= 80;
      if ((!r.pre.length && (r.done1 || r.done2 || r.mid.length || r.post.length)) || (r.done2 && !passMid()) || (r.mid.length && (!r.pre.length || !r.done1))) fail('Urutan pretes, materi, dan midtes tidak sesuai.');
      if (r.mid.slice(0, -1).some(a => a.score >= 60) || r.post.slice(0, -1).some(a => a.score >= 80)) fail('Riwayat tes berlanjut setelah tahap tersebut sudah lulus.');
      const tasks = array(raw.tasks, 'Riwayat tugas');
      if (tasks.length && (!passMid() || !r.done2)) fail('Tugas harus mengikuti kelulusan midtes dan materi kedua.');
      r.tasks = tasks.map((a, index) => {
        if (!plain(a) || a.attempt !== index + 1 || !Array.isArray(a.items)) fail('Rekam tugas tidak sesuai.');
        const c = content.generateCase(id, profile.id, index + 1);
        if (a.items.length !== c.fields.length) fail('Jumlah kolom tugas pada salinan berubah.');
        const answers = new Map();
        for (const item of a.items) {
          if (!plain(item) || typeof item.id !== 'string' || !c.fields.some(f => f.id === item.id) || answers.has(item.id)) fail('Penanda kolom tugas tidak sesuai.');
          answers.set(item.id, boundedString(item.answer, MAX_ANSWER, 'Isian tugas'));
        }
        const items = c.fields.map(f => {
          const answer = answers.get(f.id).trim();
          return { id: f.id, label: f.label, answer, expected: f.expected, status: !answer ? 'blank' : equalAnswer(f, answer) ? 'correct' : 'wrong' };
        });
        const n = items.length, b = items.filter(i => i.status === 'correct').length, s = items.filter(i => i.status === 'wrong').length;
        return { attempt: index + 1, caseId: c.id, score: 100 * b / n, correctPct: 100 * b / n, wrongPct: 100 * s / n, blankPct: 100 * (n - b - s) / n, items, at: optionalDate(a.at, 'Waktu tugas') };
      });
      if (r.tasks.slice(0, -1).some(a => a.correctPct >= 70)) fail('Riwayat tugas berlanjut setelah tugas sudah lulus.');
      if (r.post.length && (!r.done1 || !passMid() || !r.done2 || !passTask())) fail('Postes harus mengikuti kelulusan tugas.');
      r.taskCounter = passTask() ? last(r.tasks).attempt : r.tasks.length + 1;
      if (r.done2) {
        const expected = content.generateCase(id, profile.id, r.taskCounter);
        if (raw.currentCase !== null && raw.currentCase !== undefined && canonical(raw.currentCase) !== canonical(expected)) fail('Kasus pada salinan tidak sesuai dengan peserta atau percobaan aktif.');
        r.currentCase = expected;
      } else if (raw.currentCase !== null && raw.currentCase !== undefined) fail('Kasus tugas muncul sebelum materi kedua selesai.');
      const required = !r.pre.length ? 'pre' : !r.done1 ? 'lesson1' : !passMid() ? 'mid' : !r.done2 ? 'lesson2' : !passTask() ? 'task' : !passPost() ? 'post' : 'certificate';
      r.stage = required;
      if (raw.stage === 'preResult' && r.pre.length === 1 && !r.done1 && !r.mid.length) r.stage = raw.stage;
      if (raw.stage === 'midResult' && r.mid.length && !r.done2 && !r.tasks.length) r.stage = raw.stage;
      if (raw.stage === 'taskResult' && r.tasks.length && !r.post.length) r.stage = raw.stage;
      if (raw.stage === 'postResult' && r.post.length) r.stage = raw.stage;
      if (raw.drafts !== undefined) {
        if (!plain(raw.drafts)) fail('Isian tes yang belum selesai tidak sesuai.');
        for (const kind of ['pre', 'mid', 'post']) {
          if (!own(raw.drafts, kind)) continue;
          const draft = raw.drafts[kind];
          if (!plain(draft)) fail('Isian tes yang belum selesai tidak sesuai.');
          r.drafts[kind] = {};
          for (const [qid, answer] of Object.entries(draft)) {
            if (!mod.questions[kind].some(q => q.id === qid) || typeof answer !== 'boolean') fail('Isian tes yang belum selesai memuat jawaban yang tidak sesuai.');
            r.drafts[kind][qid] = answer;
          }
          if ((kind === 'pre' && r.pre.length) || (kind === 'mid' && passMid()) || (kind === 'post' && passPost())) r.drafts[kind] = {};
        }
      }
      if (raw.pendingUpload !== null && raw.pendingUpload !== undefined) {
        const upload = raw.pendingUpload, c = r.currentCase;
        if (!c || r.stage !== 'task' || !plain(upload) || !plain(upload.metadata) || !plain(upload.answers)) fail('Unggahan tersimpan tidak sesuai dengan tahap aktif.');
        const m = upload.metadata;
        if (m.version !== 'KADER-DOCX-1' || m.participantId !== profile.id || m.moduleId !== id || m.caseId !== c.id || m.attempt !== c.attempt || !Array.isArray(m.fieldIds) || m.fieldIds.length !== c.fields.length || new Set(m.fieldIds).size !== c.fields.length || c.fields.some(f => !m.fieldIds.includes(f.id))) fail('Identitas unggahan tersimpan tidak sesuai dengan kasus aktif.');
        if (Object.keys(upload.answers).length !== c.fields.length || c.fields.some(f => !own(upload.answers, f.id))) fail('Kolom unggahan tersimpan tidak lengkap.');
        const filename = boundedString(upload.filename, 500, 'Nama berkas unggahan', false);
        if (!/\.docx$/i.test(filename) || !fingerprint(filename).includes(fingerprint(profile.fullName))) fail('Nama berkas unggahan tidak memuat nama peserta.');
        const answers = Object.create(null);
        for (const f of c.fields) answers[f.id] = boundedString(upload.answers[f.id], MAX_ANSWER, 'Jawaban unggahan');
        r.pendingUpload = { metadata: { participantId: profile.id, moduleId: id, caseId: c.id, attempt: c.attempt, version: 'KADER-DOCX-1', fieldIds: c.fields.map(f => f.id) }, answers, filename };
      }
      if (raw.reaction !== null && raw.reaction !== undefined) {
        const reaction = raw.reaction;
        if (!plain(reaction) || !Array.isArray(reaction.ratings) || reaction.ratings.length !== 8 || reaction.ratings.some(v => ![1, 2, 3, 4, 'na', ''].includes(v))) fail('Isian evaluasi pengalaman belajar tidak sesuai.');
        r.reaction = { ratings: reaction.ratings.slice(), difficulties: boundedString(reaction.difficulties, 2000, 'Catatan kesulitan belajar'), suggestions: boundedString(reaction.suggestions, 2000, 'Saran pembelajaran'), savedAt: optionalDate(reaction.savedAt, 'Waktu evaluasi pengalaman belajar') };
      }
      if (passPost()) {
        if (!isDate(raw.completedAt)) fail('Waktu penyelesaian modul tidak sesuai.');
        r.completedAt = raw.completedAt;
      }
      state.modules[id] = r;
    }
    return state;
  }
  window.KaderValidation = { validateStore, version: VERSION };
})();
