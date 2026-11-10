(function () {
  'use strict';
  const VERSION = 2;
  const APP_ID = 'kader-tujuh-utama';
  const MAX_ATTEMPTS = 10000;
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
  function validateStore(value, helpers) {
    const content = window.KADER_CONTENT;
    if (!content || !Array.isArray(content.modules)) fail('Data materi untuk memeriksa salinan belum tersedia.');
    if (!helpers || typeof helpers.validProfile !== 'function') fail('Pemeriksa salinan belajar belum lengkap.');
    const { validProfile } = helpers;
    const legacy = plain(value) && value.version === 1 && !own(value, 'app');
    if (!plain(value) || (!legacy && (value.version !== VERSION || value.app !== APP_ID)) || !plain(value.modules)) fail('Salinan belajar ini tidak sesuai dengan aplikasi utama.');
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
    const state = { version: VERSION, app: APP_ID, profile, draftProfile: {}, indexPaused: value.indexPaused === true, modules: {}, updatedAt: optionalDate(value.updatedAt, 'Waktu penyimpanan') };
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
      const r = { pre: [], mid: [], post: [], stage: 'pre', drafts: {}, lesson1Index: lessonIndex(raw.lesson1Index, mod.lessons1.length), lesson2Index: lessonIndex(raw.lesson2Index, mod.lessons2.length), done1: raw.done1, done2: raw.done2, paused: raw.paused, elapsedMs: raw.elapsedMs, completedAt: null, reaction: null };
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
      const passPost = () => !!last(r.post) && last(r.post).score >= 80;
      if ((!r.pre.length && (r.done1 || r.done2 || r.mid.length || r.post.length)) || (r.done2 && !passMid()) || (r.mid.length && (!r.pre.length || !r.done1))) fail('Urutan pretes, materi, dan midtes tidak sesuai.');
      if (r.mid.slice(0, -1).some(a => a.score >= 60) || r.post.slice(0, -1).some(a => a.score >= 80)) fail('Riwayat tes berlanjut setelah tahap tersebut sudah lulus.');
      if (r.post.length && (!r.done1 || !passMid() || !r.done2)) fail('Posttes harus mengikuti materi kedua.');
      const required = !r.pre.length ? 'pre' : !r.done1 ? 'lesson1' : !passMid() ? 'mid' : !r.done2 ? 'lesson2' : !passPost() ? 'post' : 'certificate';
      r.stage = required;
      if (raw.stage === 'preResult' && r.pre.length === 1 && !r.done1 && !r.mid.length) r.stage = raw.stage;
      if (raw.stage === 'midResult' && r.mid.length && !r.done2) r.stage = raw.stage;
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
      if (raw.reaction !== null && raw.reaction !== undefined) {
        const reaction = raw.reaction;
        if (!plain(reaction) || !Array.isArray(reaction.ratings) || reaction.ratings.length !== 8 || reaction.ratings.some(v => ![1, 2, 3, 4, 'na', ''].includes(v))) fail('Isian evaluasi pengalaman belajar tidak sesuai.');
        const ratings = reaction.ratings.slice();
        const promptsChanged = legacy && (ratings[3] !== '' || ratings[4] !== '');
        if (legacy) { ratings[3] = ''; ratings[4] = ''; }
        r.reaction = { ratings, difficulties: boundedString(reaction.difficulties, 2000, 'Catatan kesulitan belajar'), suggestions: boundedString(reaction.suggestions, 2000, 'Saran pembelajaran'), savedAt: promptsChanged ? null : optionalDate(reaction.savedAt, 'Waktu evaluasi pengalaman belajar') };
      }
      if (passPost()) {
        if (!isDate(raw.completedAt)) fail('Waktu penyelesaian modul tidak sesuai.');
        r.completedAt = raw.completedAt;
      }
      state.modules[id] = r;
    }
    return state;
  }
  window.KaderValidation = { validateStore, version: VERSION, appId: APP_ID };
})();
