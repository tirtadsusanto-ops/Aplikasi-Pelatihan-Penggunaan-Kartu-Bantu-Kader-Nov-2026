(function () {
  'use strict';
  const ASSESSMENT_VERSION = '2.0.0';
  const arr = v => Array.isArray(v) ? v : v ? [v] : [];
  const name = p => p.fullName || p.fullname || p.name || 'Peserta';
  const pid = p => String(p.id || p.participantId || '');
  const text = v => v === true ? 'Benar' : v === false ? 'Salah' : v == null || String(v).trim() === '' ? 'Belum dijawab' : String(v);
  function cleanRecord(record) {
    return { pre: arr(record.pre), mid: arr(record.mid), post: arr(record.post), elapsedMs: Number(record.elapsedMs) || 0, completedAt: record.completedAt || new Date().toISOString() };
  }
  function humanDate(v) {
    const d = new Date(v);
    return Number.isFinite(d.getTime()) ? d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta' }) : String(v || '');
  }
  function duration(ms) {
    const s = Math.floor(ms / 1000); return String(Math.floor(s / 3600)).padStart(2, '0') + ':' + String(Math.floor(s / 60) % 60).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }
  function score(v) { return Number.isFinite(Number(v)) ? Number(v).toLocaleString('id-ID', { maximumFractionDigits: 2 }) : '—'; }
  function certificateNumber(module, profile, input) {
    const r = cleanRecord(input);
    return String(input.certificateId || (module.id + '-' + pid(profile).slice(-12) + '-' + r.completedAt.slice(0, 10)));
  }
  function blocks(module, profile, input) {
    const r = cleanRecord(input);
    const latest = a => a.length ? a[a.length - 1] : {};
    const out = [];
    const push = (text, style = 'body') => out.push({ text: String(text), style });
    push('SERTIFIKAT KELULUSAN', 'title');
    push(module.title || module.name || module.short, 'subtitle');
    push('Nomor: ' + certificateNumber(module, profile, input) + ' | Versi penilaian ' + ASSESSMENT_VERSION, 'small');
    push('Peserta telah menyelesaikan pembelajaran dan memenuhi nilai kelulusan modul.', 'body');
    const info = [ ['Nama lengkap', name(profile)], ['Alamat', profile.address || profile.alamat], ['Tanggal lahir', humanDate(profile.dob || profile.birthDate)], ['Usia', (profile.age ?? profile.usia ?? '') + ' tahun'], ['Puskesmas', profile.puskesmas], ['Posyandu', profile.posyandu], ['Pendidikan', profile.education || profile.pendidikan], ['Pernah mengetahui atau mengikuti pelatihan kartu bantu', profile.priorTraining || profile.prior || profile.training] ];
    info.forEach(([k, v]) => push(k + ': ' + text(v), 'detail'));
    const recap = (label, attempts, value = a => a.score, suffix = '') => {
      const values = attempts.map(value).map(Number).filter(Number.isFinite);
      push(label + ': pertama ' + score(value(attempts[0] || {})) + suffix + ' | terbaru ' + score(value(latest(attempts))) + suffix + ' | tertinggi ' + score(values.length ? values.reduce((max, n) => Math.max(max, n), -Infinity) : undefined) + suffix + ' | percobaan ' + attempts.length, 'result');
    };
    recap('Pretes', r.pre); recap('Midtes', r.mid); recap('Postes', r.post);
    push('Waktu belajar aktif: ' + duration(r.elapsedMs) + ' | Tanggal selesai: ' + humanDate(r.completedAt), 'detail');
    push('Menyetujui,\nDr. Trevino Aristarkus Pakasi, FS, MS, Ph.D., Sp.KKLP, Subsp.FOMC\n\nHormat saya,\nDr.dr.Tirta Darmawan Susanto, MKes.', 'signatures');
    push('RIWAYAT NILAI DAN JAWABAN', 'newpage');
    const stages = [['Pretes', r.pre], ['Midtes', r.mid], ['Postes', r.post]];
    stages.forEach(([label, attempts]) => {
      push(label, 'heading');
      if (!attempts.length) push('Belum ada percobaan.');
      attempts.forEach((a, index) => {
        push(label + ' percobaan ' + (a.attempt || index + 1) + ' · Nilai ' + score(a.score), 'attempt');
        const bad = arr(a.questions || a.items).filter(q => q.correct === false || q.status === 'wrong' || q.status === 'blank');
        if (!bad.length) push('Tidak ada jawaban salah pada percobaan ini.');
        bad.forEach(q => {
          push((q.id ? q.id + ' · ' : '') + (q.text || q.label || ''), 'question');
          push('Jawaban peserta: ' + text(q.answer));
          push('Jawaban benar: ' + text(q.expected ?? q.key));
          if (q.explanation) push('Pembahasan: ' + q.explanation);
        });
      });
    });
    return out;
  }
  function linesOf(ctx, str, maxWidth) {
    const lines = [];
    for (const paragraph of String(str).split('\n')) {
      if (!paragraph) { lines.push(''); continue; }
      let line = '';
      for (const token of paragraph.split(/\s+/)) {
        if (ctx.measureText((line ? line + ' ' : '') + token).width <= maxWidth) { line += (line ? ' ' : '') + token; continue; }
        if (line) { lines.push(line); line = ''; }
        if (ctx.measureText(token).width <= maxWidth) { line = token; continue; }
        for (const ch of Array.from(token)) {
          if (ctx.measureText(line + ch).width > maxWidth && line) { lines.push(line); line = ''; }
          line += ch;
        }
      }
      if (line) lines.push(line);
    }
    return lines;
  }
  const PAGE_W = 1200, PAGE_H = 1697;
  const styles = {
    title: { size: 48, weight: 'bold', color: '#103a59', gap: 18, center: true },
    subtitle: { size: 34, weight: 'bold', color: '#1b506f', gap: 18, center: true },
    small: { size: 22, color: '#526476', gap: 24, center: true },
    body: { size: 27, color: '#16344c', gap: 15 },
    detail: { size: 26, color: '#16344c', gap: 12 },
    result: { size: 28, weight: 'bold', color: '#155c45', gap: 20 },
    heading: { size: 34, weight: 'bold', color: '#104b71', gap: 16 },
    newpage: { size: 38, weight: 'bold', color: '#104b71', gap: 28 },
    attempt: { size: 27, weight: 'bold', color: '#155d7f', gap: 14 },
    question: { size: 27, weight: 'bold', color: '#213c52', gap: 10 }
  };
  function layout(all, identifiers) {
    const c = document.createElement('canvas'); c.width = PAGE_W; c.height = PAGE_H;
    const ctx = c.getContext('2d');
    if (!ctx) throw new Error('Perangkat belum dapat membuat sertifikat gambar.');
    ctx.font = '17px Arial';
    const headerLines = identifiers.flatMap(str => linesOf(ctx, str, PAGE_W - 150));
    const header = {lines: headerLines, height: headerLines.length * 24 + 24};
    const startY = 45 + header.height + 34;
    if (startY > 800) throw new Error('Data pengenal sertifikat terlalu panjang. Periksa kode peserta dan nomor sertifikat.');
    const firstEnd = all.findIndex(b => b.style === 'signatures');
    const mainBlocks = all.slice(0, firstEnd < 0 ? all.length : firstEnd);
    const scaled = (s, factor) => ({ ...s, size: Math.round(s.size * factor), gap: Math.round(s.gap * factor) });
    const measureMain = factor => mainBlocks.reduce((height, b) => {
      const s = scaled(styles[b.style] || styles.body, factor);
      ctx.font = (s.weight || 'normal') + ' ' + s.size + 'px Arial';
      return height + linesOf(ctx, b.text, PAGE_W - 180).length * Math.ceil(s.size * 1.38) + s.gap;
    }, 0);
    let mainScale = 1;
    while (measureMain(mainScale) > 1320 - startY && mainScale > 0.625) mainScale -= 0.025;
    if (measureMain(mainScale) > 1320 - startY) throw new Error('Data sertifikat terlalu panjang. Periksa kembali panjang data pribadi Anda.');
    const pages = [[]]; let y = startY;
    const next = () => { pages.push([]); y = startY; };
    for (let bi = 0; bi < all.length; bi++) {
      const b = all[bi];
      if (b.style === 'signatures') { pages[0].signatures = true; continue; }
      if (b.style === 'newpage') next();
      const s = bi < firstEnd ? scaled(styles[b.style] || styles.body, mainScale) : (styles[b.style] || styles.body);
      ctx.font = (s.weight || 'normal') + ' ' + s.size + 'px Arial';
      const lines = linesOf(ctx, b.text, PAGE_W - 180);
      const lh = Math.ceil(s.size * 1.38);
      const bottom = () => pages.length === 1 ? 1320 : PAGE_H - 150;
      if (y + Math.min(lines.length, 3) * lh + s.gap > bottom() && y > startY + 20) next();
      for (const line of lines) {
        if (y + lh > bottom()) next();
        pages[pages.length - 1].push({ line, y, ...s });
        y += lh;
      }
      y += s.gap;
    }
    c.width = c.height = 1;
    return {pages, header};
  }
  function drawPage(c, ops, index, count, header) {
    c.width = PAGE_W; c.height = PAGE_H; const ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, PAGE_W, PAGE_H);
    ctx.strokeStyle = '#61b8df'; ctx.lineWidth = 5; ctx.strokeRect(30, 30, PAGE_W - 60, PAGE_H - 60);
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#e9f7ff'; ctx.fillRect(45, 45, PAGE_W - 90, header.height);
    ctx.fillStyle = '#285672'; ctx.font = '17px Arial'; ctx.textAlign = 'left';
    header.lines.forEach((line,i)=>ctx.fillText(line,75,57+i*24));
    ops.forEach(op => {
      ctx.font = (op.weight || 'normal') + ' ' + op.size + 'px Arial'; ctx.fillStyle = op.color;
      ctx.textAlign = op.center ? 'center' : 'left'; ctx.fillText(op.line, op.center ? PAGE_W / 2 : 90, op.y);
    });
    if (ops.signatures) {
      ctx.fillStyle = '#16344c'; ctx.font = '25px Arial'; ctx.textAlign = 'left';
      const left = ['Menyetujui,', '', ...linesOf(ctx, 'Dr. Trevino Aristarkus Pakasi, FS, MS, Ph.D., Sp.KKLP, Subsp.FOMC', 480)];
      const right = ['Hormat saya,', '', ...linesOf(ctx, 'Dr.dr.Tirta Darmawan Susanto, MKes.', 455)];
      left.forEach((line, i) => ctx.fillText(line, 90, 1370 + i * 36));
      right.forEach((line, i) => ctx.fillText(line, 655, 1370 + i * 36));
    }
    ctx.textAlign = 'center'; ctx.font = '21px Arial'; ctx.fillStyle = '#476175';
    ctx.fillText('Halaman ' + (index + 1) + ' dari ' + count, PAGE_W / 2, PAGE_H - 100);
  }
  const canvasBlob = (c, quality = 0.9) => new Promise((resolve, reject) => c.toBlob(b => b ? resolve(b) : reject(new Error('Gambar sertifikat belum dapat dibuat. Coba gunakan peramban lain.')), 'image/jpeg', quality));
  function pdfFromJpegs(images) {
    const encoder = new TextEncoder(), chunks = [], offsets = [0]; let size = 0;
    const append = a => { const u = typeof a === 'string' ? encoder.encode(a) : a; chunks.push(u); size += u.length; };
    const object = (id, start, body, end) => { offsets[id] = size; append(id + ' 0 obj\n'); append(start); if (body) append(body); if (end) append(end); append('\nendobj\n'); };
    append('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
    object(1, '<< /Type /Catalog /Pages 2 0 R >>');
    const kids = images.map((_, i) => (3 + i * 3) + ' 0 R').join(' ');
    object(2, '<< /Type /Pages /Count ' + images.length + ' /Kids [' + kids + '] >>');
    images.forEach((image, i) => {
      const pageId = 3 + i * 3, imageId = pageId + 1, streamId = pageId + 2;
      object(pageId, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im' + i + ' ' + imageId + ' 0 R >> >> /Contents ' + streamId + ' 0 R >>');
      object(imageId, '<< /Type /XObject /Subtype /Image /Width ' + PAGE_W + ' /Height ' + PAGE_H + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + image.length + ' >>\nstream\n', image, '\nendstream');
      const commands = encoder.encode('q 595.28 0 0 841.89 0 0 cm /Im' + i + ' Do Q');
      object(streamId, '<< /Length ' + commands.length + ' >>\nstream\n', commands, '\nendstream');
    });
    const xref = size, count = 3 + images.length * 3;
    append('xref\n0 ' + count + '\n0000000000 65535 f \n');
    for (let id = 1; id < count; id++) append(String(offsets[id]).padStart(10, '0') + ' 00000 n \n');
    append('trailer\n<< /Size ' + count + ' /Root 1 0 R >>\nstartxref\n' + xref + '\n%%EOF');
    return new Blob(chunks, { type: 'application/pdf' });
  }
  async function certificate(module, profile, input) {
    if (!module || !module.id || !pid(profile)) throw new Error('Data sertifikat belum lengkap.');
    const check = cleanRecord(input);
    const last = list => list.length ? list[list.length - 1] : null;
    const passes = (v, min) => v !== '' && v != null && Number.isFinite(Number(v)) && Number(v) >= min && Number(v) <= 100;
    if (!input.done1 || !input.done2 || check.pre.length !== 1 || !passes(check.pre[0].score, 0) || !last(check.mid) || !passes(last(check.mid).score, 60) || !last(check.post) || !passes(last(check.post).score, 80)) throw new Error('Selesaikan pretes dan kedua materi, lalu capai nilai midtes 60 dan postes 80 untuk membuka sertifikat.');
    const all = blocks(module, profile, input);
    const {pages, header} = layout(all, ['Kode peserta: ' + pid(profile) + ' | Modul: ' + module.id, 'Nomor paket: ' + certificateNumber(module, profile, input), 'Versi penilaian: ' + ASSESSMENT_VERSION]);
    const jpegImages = [];
    const cols = pages.length <= 12 ? 1 : Math.ceil(Math.sqrt(pages.length * 0.7));
    const rows = Math.ceil(pages.length / cols);
    const scale = Math.min(1, Math.sqrt(14000000 / (cols * rows * PAGE_W * PAGE_H)), 30000 / (rows * PAGE_H), 12000 / (cols * PAGE_W));
    if (!Number.isFinite(scale) || scale < 0.08) throw new Error('Riwayat terlalu panjang untuk satu gambar pada perangkat ini. Simpan cadangan pekerjaan dan gunakan perangkat dengan memori lebih besar.');
    const output = document.createElement('canvas'); output.width = Math.max(1, Math.floor(cols * PAGE_W * scale)); output.height = Math.max(1, Math.floor(rows * PAGE_H * scale));
    const oc = output.getContext('2d'); if (!oc) throw new Error('Perangkat belum dapat menyiapkan gambar sertifikat.');
    oc.fillStyle = '#d8effd'; oc.fillRect(0, 0, output.width, output.height);
    const scratch = document.createElement('canvas');
    for (let i = 0; i < pages.length; i++) {
      drawPage(scratch, pages[i], i, pages.length, header);
      const image = new Uint8Array(await (await canvasBlob(scratch)).arrayBuffer()); jpegImages.push(image);
      oc.drawImage(scratch, Math.floor((i % cols) * PAGE_W * scale), Math.floor(Math.floor(i / cols) * PAGE_H * scale), Math.ceil(PAGE_W * scale), Math.ceil(PAGE_H * scale));
    }
    const jpeg = await canvasBlob(output, 0.94), pdf = pdfFromJpegs(jpegImages);
    scratch.width = scratch.height = output.width = output.height = 1;
    const message = 'KARTU BANTU KADER · ' + module.id + ' · ' + pid(profile) + '\n\n' + all.map(b => b.text).join('\n\n') + '\n\nJumlah halaman paket: ' + pages.length + '.';
    return { pdf, jpeg, message, pageCount: pages.length, pagePreviews: jpegImages.map(bytes => new Blob([bytes], {type: 'image/jpeg'})), jpegLayout: { columns: cols, rows, scale } };
  }
  window.KaderFiles = { certificate, certificateText: (m, p, r) => 'KARTU BANTU KADER · ' + m.id + ' · ' + pid(p) + '\n\n' + blocks(m, p, r).map(b => b.text).join('\n\n'), version: ASSESSMENT_VERSION };
}());
