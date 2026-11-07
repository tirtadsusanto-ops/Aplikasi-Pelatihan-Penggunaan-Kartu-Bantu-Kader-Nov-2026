(function () {
  'use strict';
  const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
  const CP = 'http://schemas.openxmlformats.org/officeDocument/2006/custom-properties';
  const VERSION = 'KADER-DOCX-1';
  const ASSESSMENT_VERSION = '1.1.0';
  const MIME_DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  const PLACEHOLDER = '[Ketik jawaban di sini]';
  const esc = v => String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  const arr = v => Array.isArray(v) ? v : v ? [v] : [];
  const name = p => p.fullName || p.fullname || p.name || 'Peserta';
  const pid = p => String(p.id || p.participantId || '');
  const text = v => v === true ? 'Benar' : v === false ? 'Salah' : v == null || String(v).trim() === '' ? 'Belum dijawab' : String(v);
  const pXml = (value, bold, style) => '<w:p><w:pPr>' + (style ? '<w:pStyle w:val="' + style + '"/>' : '') + '<w:spacing w:after="100" w:line="300" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/>' + (bold ? '<w:b/>' : '') + '<w:sz w:val="24"/></w:rPr>' + String(value).split('\n').map((s, i) => (i ? '<w:br/>' : '') + '<w:t xml:space="preserve">' + esc(s) + '</w:t>').join('') + '</w:r></w:p>';
  const cell = (value, width, bold) => '<w:tc><w:tcPr><w:tcW w:w="' + width + '" w:type="dxa"/></w:tcPr>' + pXml(value, bold) + '</w:tc>';
  const validId = v => typeof v === 'string' && /^[A-Za-z0-9_.:-]{1,90}$/.test(v);
  function assertCase(c, profile) {
    if (!window.JSZip) throw new Error('Pustaka berkas belum tersedia. Buka kembali aplikasi dari folder lengkap.');
    if (!c || !c.id || !c.moduleId || !Array.isArray(c.fields) || !c.fields.length || c.fields.length > 200 || !pid(profile)) throw new Error('Data lembar belum lengkap.');
    const ids = c.fields.map(f => f.id);
    if (ids.some(id => !validId(id)) || new Set(ids).size !== ids.length) throw new Error('Penanda kolom kasus tidak sesuai.');
  }
  async function createWorksheet(c, profile) {
    assertCase(c, profile);
    const metadata = { participantId: pid(profile), moduleId: c.moduleId, caseId: c.id, attempt: Number(c.attempt), version: VERSION, fieldIds: c.fields.map(f => f.id) };
    const z = new JSZip();
    const types = '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/custom.xml" ContentType="application/vnd.openxmlformats-officedocument.custom-properties+xml"/></Types>';
    z.file('[Content_Types].xml', types);
    z.file('_rels/.rels', '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties" Target="docProps/custom.xml"/></Relationships>');
    z.file('docProps/core.xml', '<?xml version="1.0"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:title>' + esc(c.title) + '</dc:title><dc:creator>Pelatihan Kartu Bantu Kader</dc:creator></cp:coreProperties>');
    z.file('docProps/custom.xml', '<?xml version="1.0"?><Properties xmlns="' + CP + '" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><property fmtid="{D5CDD505-2E9C-101B-9397-08002B2CF9AE}" pid="2" name="KADER_META"><vt:lpwstr>' + esc(JSON.stringify(metadata)) + '</vt:lpwstr></property></Properties>');
    z.file('word/styles.xml', '<?xml version="1.0"?><w:styles xmlns:w="' + W + '"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/></w:rPr></w:rPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:pPr><w:keepNext/></w:pPr><w:rPr><w:b/></w:rPr></w:style></w:styles>');
    z.file('word/_rels/document.xml.rels', '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/></Relationships>');
    z.file('word/footer1.xml', '<?xml version="1.0"?><w:ftr xmlns:w="' + W + '"><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:t xml:space="preserve">Halaman </w:t></w:r><w:fldSimple w:instr="PAGE"/></w:p></w:ftr>');
    let body = pXml('LEMBAR LATIHAN KARTU BANTU', true, 'Heading1') + pXml(c.title, true) + pXml('Nama peserta: ' + name(profile)) + pXml('Kode peserta: ' + pid(profile)) + pXml('Modul: ' + c.moduleId + ' | Kasus: ' + c.id + ' | Percobaan: ' + c.attempt);
    body += pXml('Kasus simulasi', true, 'Heading1') + pXml(c.narrative);
    body += pXml('Pertanyaan penerapan', true, 'Heading1');
    arr(c.questions).forEach((q, i) => { body += pXml((i + 1) + '. ' + q.text); });
    body += pXml('Form kartu bantu', true, 'Heading1') + pXml('Isi kolom Jawaban dengan data kasus. Ganti tulisan [Ketik jawaban di sini] dengan jawaban Anda. Pertahankan nama kolom dan isi tabel. Simpan sebagai DOCX dengan nama Anda sebelum mengunggah.');
    const formTable = entries => {
      let rows = '<w:tr><w:trPr><w:tblHeader/></w:trPr>' + cell('No.', 800, true) + cell('Kolom kartu bantu', 3500, true) + cell('Jawaban peserta', 4700, true) + '</w:tr>';
      entries.forEach(({f, i}) => {
        let label = f.label;
        if (Array.isArray(f.options) && f.options.length) label += '\nPilihan: ' + f.options.join(' / ');
        const answer = '<w:tc><w:tcPr><w:tcW w:w="4700" w:type="dxa"/></w:tcPr><w:sdt><w:sdtPr><w:id w:val="' + (i + 1000) + '"/><w:tag w:val="KADER|' + esc(f.id) + '"/><w:alias w:val="' + esc(f.label) + '"/><w:text/></w:sdtPr><w:sdtContent>' + pXml(PLACEHOLDER) + '</w:sdtContent></w:sdt></w:tc>';
        rows += '<w:tr><w:trPr><w:cantSplit/></w:trPr>' + cell(String(i + 1), 800) + cell(label, 3500) + answer + '</w:tr>';
      });
      return '<w:tbl><w:tblPr><w:tblW w:w="9000" w:type="dxa"/><w:tblLayout w:type="fixed"/><w:tblBorders>' + ['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(k => '<w:' + k + ' w:val="single" w:sz="4" w:color="999999"/>').join('') + '</w:tblBorders><w:tblCellMar><w:top w:w="100" w:type="dxa"/><w:left w:w="100" w:type="dxa"/><w:bottom w:w="100" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid><w:gridCol w:w="800"/><w:gridCol w:w="3500"/><w:gridCol w:w="4700"/></w:tblGrid>' + rows + '</w:tbl>';
    };
    const entries = c.fields.map((f, i) => ({f, i}));
    const primary = entries.filter(e => e.f.section !== 'pendamping');
    const companion = entries.filter(e => e.f.section === 'pendamping');
    if (primary.length) body += formTable(primary);
    if (companion.length) body += pXml('Lembar pendamping', true, 'Heading1') + pXml('Isi keterangan tambahan berikut dengan data kasus pada kolom Jawaban peserta.') + formTable(companion);
    body += pXml('Catatan bebas tidak dinilai', true, 'Heading1') + pXml('');
    body += '<w:sectPr><w:footerReference w:type="default" r:id="rId2"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1417" w:right="1417" w:bottom="1417" w:left="1417" w:header="600" w:footer="600"/></w:sectPr>';
    z.file('word/document.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="' + W + '" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>' + body + '</w:body></w:document>');
    return z.generateAsync({ type: 'blob', mimeType: MIME_DOCX, compression: 'DEFLATE' });
  }
  function parseXml(s, label) {
    if (s.length > 6 * 1024 * 1024 || /<!DOCTYPE|<!ENTITY/i.test(s)) throw new Error(label + ' tidak dapat dibaca.');
    const d = new DOMParser().parseFromString(s, 'application/xml');
    if (d.getElementsByTagName('parsererror').length) throw new Error(label + ' rusak.');
    return d;
  }
  async function readWorksheet(file) {
    if (!window.JSZip) throw new Error('Pustaka berkas belum tersedia.');
    if (!file || !/\.docx$/i.test(file.name || '')) throw new Error('Pilih berkas dengan akhiran .docx.');
    if (file.size === 0 || file.size > 8 * 1024 * 1024) throw new Error('Ukuran DOCX harus lebih dari nol dan tidak melebihi 8 MB.');
    let z;
    try { z = await JSZip.loadAsync(await file.arrayBuffer()); } catch (_) { throw new Error('DOCX tidak dapat dibuka. Gunakan berkas utuh tanpa kata sandi.'); }
    const entries = Object.values(z.files);
    if (entries.length > 250 || entries.reduce((n, f) => n + (f._data && f._data.uncompressedSize || 0), 0) > 32 * 1024 * 1024) throw new Error('Isi DOCX terlalu besar untuk diperiksa.');
    if (!z.file('word/document.xml') || !z.file('docProps/custom.xml')) throw new Error('Berkas ini bukan lembar tugas yang diunduh dari aplikasi.');
    const props = parseXml(await z.file('docProps/custom.xml').async('string'), 'Identitas lembar');
    const matches = Array.from(props.getElementsByTagNameNS(CP, 'property')).filter(e => e.getAttribute('name') === 'KADER_META');
    if (matches.length !== 1) throw new Error('Identitas lembar tidak lengkap atau ganda. Unduh lembar baru.');
    let meta;
    try { meta = JSON.parse(matches[0].textContent); } catch (_) { throw new Error('Identitas lembar rusak.'); }
    if (!meta || meta.version !== VERSION || typeof meta.participantId !== 'string' || !meta.participantId || meta.participantId.length > 250 || typeof meta.moduleId !== 'string' || typeof meta.caseId !== 'string' || !meta.caseId || meta.caseId.length > 300 || !Number.isInteger(meta.attempt) || meta.attempt < 1 || !Array.isArray(meta.fieldIds) || !meta.fieldIds.length || meta.fieldIds.length > 200 || meta.fieldIds.some(v => !validId(v)) || new Set(meta.fieldIds).size !== meta.fieldIds.length) throw new Error('Penanda kasus pada berkas tidak sesuai. Unduh lembar baru.');
    const d = parseXml(await z.file('word/document.xml').async('string'), 'Isi lembar');
    const answers = Object.create(null);
    const allowed = new Set(meta.fieldIds);
    for (const sdt of Array.from(d.getElementsByTagNameNS(W, 'sdt'))) {
      const pr = Array.from(sdt.children).find(e => e.namespaceURI === W && e.localName === 'sdtPr');
      const tags = pr ? pr.getElementsByTagNameNS(W, 'tag') : [];
      if (!tags.length) continue;
      const tag = tags[0].getAttributeNS(W, 'val') || tags[0].getAttribute('w:val') || '';
      if (!tag.startsWith('KADER|')) continue;
      const id = tag.slice(6);
      if (!allowed.has(id) || Object.prototype.hasOwnProperty.call(answers, id)) throw new Error('Penanda kolom berubah atau ganda. Gunakan lembar yang baru diunduh.');
      const content = Array.from(sdt.children).find(e => e.namespaceURI === W && e.localName === 'sdtContent');
      if (!content) throw new Error('Kolom jawaban tidak lengkap.');
      let value = '';
      const walker = d.createTreeWalker(content, NodeFilter.SHOW_ELEMENT);
      while (walker.nextNode()) {
        const e = walker.currentNode;
        if (e.namespaceURI !== W) continue;
        if (e.localName === 'p' && value) value += ' ';
        if (e.localName === 't') value += e.textContent;
        if (e.localName === 'br' || e.localName === 'tab') value += ' ';
      }
      value = value.replace(/\u00a0/g, ' ').trim();
      if (value === PLACEHOLDER || /^[_\s—–-]*$/.test(value)) value = '';
      if (value.length > 5000) throw new Error('Jawaban terlalu panjang. Periksa kolom ' + id + '.');
      answers[id] = value;
    }
    if (Object.keys(answers).length !== meta.fieldIds.length) throw new Error('Sebagian kolom jawaban terhapus. Unduh lembar baru dan pindahkan jawaban Anda.');
    return { metadata: meta, answers };
  }

  function cleanRecord(record) {
    return { pre: arr(record.pre), mid: arr(record.mid), post: arr(record.post), tasks: arr(record.tasks), elapsedMs: Number(record.elapsedMs) || 0, completedAt: record.completedAt || new Date().toISOString() };
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
    recap('Tugas benar', r.tasks, a => a.correctPct ?? a.score, '%');
    const task = latest(r.tasks);
    push('Tugas terakhir: salah ' + score(task.wrongPct) + '% | belum dijawab ' + score(task.blankPct) + '%', 'result');
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
    push('Tugas DOCX', 'heading');
    if (!r.tasks.length) push('Belum ada percobaan.');
    r.tasks.forEach((a, index) => {
      push('Tugas percobaan ' + (a.attempt || index + 1) + ' · Kasus ' + (a.caseId || '') + ' · Benar ' + score(a.correctPct ?? a.score) + '% · Salah ' + score(a.wrongPct) + '% · Belum dijawab ' + score(a.blankPct) + '%', 'attempt');
      const bad = arr(a.items).filter(q => q.status === 'wrong' || q.status === 'blank' || q.correct === false);
      if (!bad.length) push('Tidak ada jawaban salah atau kosong pada percobaan ini.');
      bad.forEach(q => {
        push((q.id ? q.id + ' · ' : '') + (q.label || q.text || ''), 'question');
        push('Hasil: ' + (q.status === 'blank' ? 'Belum dijawab' : 'Salah') + ' | Jawaban peserta: ' + text(q.answer));
        push('Jawaban yang diterima: ' + text(q.expected));
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
    if (check.pre.length !== 1 || !passes(check.pre[0].score, 0) || !last(check.mid) || !passes(last(check.mid).score, 60) || !last(check.tasks) || !passes(last(check.tasks).correctPct ?? last(check.tasks).score, 70) || !last(check.post) || !passes(last(check.post).score, 80)) throw new Error('Selesaikan pretes dan capai nilai midtes 60, tugas 70%, serta postes 80 untuk membuka sertifikat.');
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
  window.KaderFiles = { createWorksheet, readWorksheet, certificate, certificateText: (m, p, r) => 'KARTU BANTU KADER · ' + m.id + ' · ' + pid(p) + '\n\n' + blocks(m, p, r).map(b => b.text).join('\n\n'), version: VERSION };
}());
