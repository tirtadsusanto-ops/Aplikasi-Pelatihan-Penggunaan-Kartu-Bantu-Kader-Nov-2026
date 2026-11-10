(function(){
'use strict';
const APP_ID='kader-tujuh-utama';
const KEY='kader-tujuh-utama-v2', LEGACY_KEY='kader-tujuh-v1', VERSION=2;
const PAGE=document.body.dataset.module||'index';
const FILES={M01:'m01-ibu-hamil.html',M02:'m02-ibu-nifas.html',M03:'m03-bayi-balita.html',M04:'m04-remaja.html',M05:'m05-dewasa.html',M06:'m06-lansia-aks.html',M07:'m07-lansia-skilas.html'};
const STAGES=['pre','lesson1','mid','lesson2','post','certificate'];
const LABELS={pre:'Pretes',lesson1:'Materi 1',mid:'Midtes',lesson2:'Materi 2',post:'Posttes',certificate:'Sertifikat'};
const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:VERSION,app:APP_ID,profile:null,draftProfile:{},indexPaused:false,modules:{},updatedAt:new Date().toISOString()});
let state=fresh(), mod=null, rec=null, runningStart=null, busy=false, operation=0, toastTimer=null, storageProblem=false, certCache=null, invalidated=false, corruptStorage=false, initialized=false;
let bridge=null, bridgeReady=false, bridgeQueue=new Map();
const uuid=()=>window.crypto&&crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
const readLocal=()=>{try{const s=localStorage.getItem(KEY);return s?JSON.parse(s):null;}catch(_){corruptStorage=true;return null;}};
function readRepository(){
 const current=readLocal();
 if(current||corruptStorage)return current;
 try{
  if(localStorage.getItem(KEY)!==null)return current;
  const saved=localStorage.getItem(LEGACY_KEY);
  if(!saved)return null;
  const previous=JSON.parse(saved);
  return previous?.version===1&&!Object.hasOwn(previous,'app')?previous:null;
 }catch(_){corruptStorage=true;return null;}
}
function bridgeHost(){
 document.documentElement.style.display='none';
 window.addEventListener('message',e=>{
  if(e.source!==parent||!e.data||e.data.kader!==APP_ID||e.data.type!=='request'||(location.protocol==='file:'?e.origin!=='null':e.origin!==location.origin))return;
  const q=e.data;let result=null,error='';
  try{
   if(q.op==='get')result=readRepository();
   else if(q.op==='reset'){const empty={...fresh(),resetAt:new Date().toISOString()};localStorage.setItem(KEY,JSON.stringify(empty));result=empty;}
   else if(q.op==='save'){
    if(q.value?.app!==APP_ID||q.value.version!==VERSION)throw Error('Salinan belajar berasal dari aplikasi lain.');
    const current=readLocal();
    if(current&&q.value.profile&&!q.newProfile&&((current.profile&&current.profile.id!==q.value.profile.id)||(current.resetAt&&Date.parse(current.resetAt)>=Date.parse(q.value.profile.registeredAt))))throw Error('Peserta pada perangkat ini sudah berganti. Buka indeks untuk melanjutkan.');
    const next=mergeState(current,q.value,q.moduleId);localStorage.setItem(KEY,JSON.stringify(next));result=true;
   }
  }catch(err){error=err.message||'Data belum tersimpan.';}
  e.source.postMessage({kader:APP_ID,type:'response',token:q.token,result,error},'*');
 });
}
if(location.hash==='#bridge'){bridgeHost();return;}
function mergeState(current,next,moduleId){
 if(!current||!next.profile||!current.profile||next.profile.id!==current.profile.id)return next;
 if(moduleId&&moduleId!=='index')return {...current,profile:next.profile,updatedAt:next.updatedAt,modules:{...current.modules,[moduleId]:next.modules[moduleId]}};
 return {...next,modules:{...current.modules,...next.modules}};
}
window.addEventListener('message',e=>{
 if(!bridge||e.source!==bridge.contentWindow||!e.data||e.data.kader!==APP_ID||e.data.type!=='response')return;
 const pending=bridgeQueue.get(e.data.token);if(!pending)return;clearTimeout(pending.timeout);bridgeQueue.delete(e.data.token);
 e.data.error?pending.reject(Error(e.data.error)):pending.resolve(e.data.result);
});
function bridgeCall(op,value,newProfile=false){
 return new Promise((resolve,reject)=>{
  if(!bridgeReady)return reject(Error('Penyimpanan belum siap.'));
  const token=uuid();const timeout=setTimeout(()=>{bridgeQueue.delete(token);reject(Error('Data belum tersimpan. Unduh salinan belajar.'));},3000);
  bridgeQueue.set(token,{resolve,reject,timeout});bridge.contentWindow.postMessage({kader:APP_ID,type:'request',token,op,value,moduleId:PAGE,newProfile},'*');
 });
}
async function initRepository(){
 if(location.protocol==='file:'&&PAGE!=='index'){
  bridge=document.createElement('iframe');bridge.hidden=true;bridge.title='Penyimpanan belajar';bridge.src='index.html#bridge';document.body.appendChild(bridge);
  await new Promise(resolve=>{const timeout=setTimeout(resolve,2000);bridge.onload=()=>{clearTimeout(timeout);bridgeReady=true;resolve();};});
  if(bridgeReady){try{return (await bridgeCall('get'))||readRepository();}catch(_){bridgeReady=false;}}
 }
 return readRepository();
}
function validateState(v){
 if(!window.KaderValidation)throw Error('Pemeriksa salinan belajar belum tersedia. Buka aplikasi dari folder lengkap.');
 return KaderValidation.validateStore(v,{validProfile});
}
function defaultRecord(){return {pre:[],mid:[],post:[],stage:'pre',drafts:{},lesson1Index:0,lesson2Index:0,done1:false,done2:false,paused:false,elapsedMs:0,completedAt:null,reaction:null};}
function ensureRecord(){
 const existing=state.modules[PAGE];rec=state.modules[PAGE]=existing?{...defaultRecord(),...existing}:defaultRecord();
 rec.drafts=rec.drafts||{};
 if(!rec.pre.length)rec.stage='pre';
 else if(rec.stage==='pre')rec.stage='preResult';
 if(!STAGES.includes(rec.stage)&&!['preResult','midResult','postResult'].includes(rec.stage))rec.stage=nextRequired();
}
function last(xs){return xs&&xs.length?xs[xs.length-1]:null;}
function passTest(k,min){const a=last(rec[k]);return a&&a.score>=min;}
function qualified(){return rec.pre.length===1&&rec.done1&&passTest('mid',60)&&rec.done2&&passTest('post',80);}
function nextRequired(){if(!rec.pre.length)return'pre';if(!rec.done1)return'lesson1';if(!passTest('mid',60))return'mid';if(!rec.done2)return'lesson2';if(!passTest('post',80))return'post';return'certificate';}
function tick(){if(runningStart!==null&&rec){const now=performance.now();rec.elapsedMs+=Math.max(0,now-runningStart);runningStart=now;}}
function startClock(){if(PAGE!=='index'&&rec&&!rec.paused&&!qualified()&&document.visibilityState!=='hidden'&&runningStart===null)runningStart=performance.now();}
function stopClock(){tick();runningStart=null;}
function elapsed(){return rec?rec.elapsedMs+(runningStart!==null?Math.max(0,performance.now()-runningStart):0):0;}
function timeText(ms){const s=Math.floor(ms/1000);return [Math.floor(s/3600),Math.floor(s/60)%60,s%60].map(x=>String(x).padStart(2,'0')).join(':');}
function persist(newProfile=false){
 if(invalidated||!initialized)return;
 tick();state.updatedAt=new Date().toISOString();
 try{
  const current=readLocal();
  if(current&&state.profile&&!newProfile&&!bridgeReady&&((current.profile&&current.profile.id!==state.profile.id)||(current.resetAt&&Date.parse(current.resetAt)>=Date.parse(state.profile.registeredAt)))){invalidateSession();return;}
  const next=mergeState(current,state,PAGE);localStorage.setItem(KEY,JSON.stringify(next));storageProblem=false;
 }catch(err){storageProblem=true;}
 if(bridgeReady)bridgeCall('save',state,newProfile).catch(err=>{storageProblem=true;if(err.message.includes('Peserta pada perangkat ini sudah berganti'))invalidateSession();else toast(err.message);});
}
function invalidateSession(){stopClock();invalidated=true;operation++;certCache=null;location.replace('index.html');}
function captureIndex(){if(PAGE!=='index'||state.profile)return;const f=document.getElementById('profile-form');if(!f)return;state.draftProfile=Object.fromEntries(new FormData(f).entries());}
function toast(t){clearTimeout(toastTimer);let e=document.getElementById('toast');if(!e){e=document.createElement('div');e.id='toast';e.className='sticky-feedback';e.setAttribute('role','status');document.body.appendChild(e);}e.textContent=t;toastTimer=setTimeout(()=>e.remove(),6500);}
function ageFromDob(dob,now=new Date()){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(dob||''))return null;
 const[y,m,d]=dob.split('-').map(Number);const dt=new Date(0);dt.setFullYear(y,m-1,d);dt.setHours(0,0,0,0);
 if(dt.getFullYear()!==y||dt.getMonth()!==m-1||dt.getDate()!==d||y<1||dt>new Date(now.getFullYear(),now.getMonth(),now.getDate()))return null;
 return now.getFullYear()-y-((now.getMonth()+1<m||(now.getMonth()+1===m&&now.getDate()<d))?1:0);
}
function validProfile(p){
 const limits={fullName:120,address:500,puskesmas:160,posyandu:160,education:80,priorTraining:30};
 for(const[k,max]of Object.entries(limits))if(typeof p[k]!=='string'||!p[k].trim()||p[k].length>max)return {ok:false,message:'Lengkapi semua data peserta dengan benar.'};
 if(!/[\p{L}]/u.test(p.fullName)||p.fullName.trim().length<2)return {ok:false,message:'Tuliskan nama lengkap Anda.'};
 const age=ageFromDob(p.dob);if(age===null)return {ok:false,message:'Tanggal lahir harus benar dan tidak melewati hari ini.'};
 if(!['Sudah pernah','Belum pernah'].includes(p.priorTraining))return {ok:false,message:'Pilih pengalaman Anda tentang kartu bantu.'};
 if(!EDUCATIONS.includes(p.education))return {ok:false,message:'Pilih pendidikan Anda dari daftar.'};
 return {ok:true,age};
}
const EDUCATIONS=['Tidak sekolah','SD atau sederajat','SMP atau sederajat','SMA/SMK atau sederajat','Diploma','Sarjana','Pascasarjana'];
function encodeProfile(p){return btoa(unescape(encodeURIComponent(JSON.stringify(p))));}
function decodeProfile(){try{const s=new URLSearchParams(location.hash.slice(1)).get('peserta-utama');if(!s||s.length>10000)return null;const p=JSON.parse(decodeURIComponent(escape(atob(s))));return validProfile(p).ok&&typeof p.id==='string'?p:null;}catch(_){return null;}}
function navHref(id){return (FILES[id]||'index.html')+(state.profile&&location.protocol==='file:'?'#peserta-utama='+encodeURIComponent(encodeProfile(state.profile)):'');}
function photo(n,cls=''){return `<div class="photo ${cls}" role="img" aria-label="Kader belajar dan mendampingi pengisian kartu" style="background-position:${(n%4)*100/3}% ${n>3?100:0}%"></div>`;}
function shell(title,lead,body,index=false){
 const n=index?0:Object.keys(FILES).indexOf(PAGE)+1;
 document.title=(index?'Pilih Kartu Bantu':mod.short)+' • Belajar Kader';
 return `<div class="wrap"><header class="topbar"><a class="brand" href="${navHref('index')}" id="home-link"><span class="brand-mark" aria-hidden="true">▤</span><span>Kartu Bantu<br><span class="muted small">Belajar Kader</span></span></a><div class="top-actions"><button class="btn secondary small" id="save-progress">Simpan & jeda</button><button class="btn ghost small" id="backup-progress">Unduh salinan belajar</button><button class="btn danger small" id="reset-data">Peserta baru / reset</button></div></header><section class="hero"><div><div class="eyebrow">${index?'Tujuh kartu • Satu tempat belajar':esc(mod.short)+' • Belajar sampai tuntas'}</div><h1>${esc(title)}</h1><p class="lead">${esc(lead)}</p><span class="tag">${index?'Pilih urutan belajar Anda':'Pretes sekali · Midtes 60 · Posttes 80'}</span></div>${photo(n,'hero-photo')}</section><main id="main-content">${body}</main><footer class="bottom-bar"><span>Pelatihan pengisian 7 Kartu Bantu Kader</span><span>Pelajari cara mengisi kartu dan periksa hasil belajar Anda.</span></footer></div><dialog id="reset-dialog"><h2>Mulai untuk peserta baru?</h2><p>Data pribadi, pekerjaan, nilai, dan sertifikat pada perangkat ini akan dikosongkan. Unduh salinan belajar terlebih dahulu jika masih diperlukan.</p><div class="actions"><button class="btn secondary" id="cancel-reset">Batal</button><button class="btn danger" id="confirm-reset">Kosongkan data</button></div></dialog><input hidden type="file" id="import-backup" accept="application/json,.json">`;
}
function render(){
 KaderReview.clear();
 if(PAGE==='index')renderIndex();else renderModule();
 wireCommon();if((rec&&rec.paused)||(PAGE==='index'&&state.indexPaused))renderPause();startClock();updateClock();
}
function renderIndex(){
 const p=state.profile,d=state.draftProfile||{};
 const profile=p?`<div class="notice good"><strong>${esc(p.fullName)}</strong><br>${esc(p.posyandu)} · ${esc(p.puskesmas)}<br><span class="small">${esc(p.address)} · Usia ${ageFromDob(p.dob)} tahun</span></div><p>Periksa ejaan nama Anda. Jika data sudah tepat, pilih kartu yang ingin dipelajari.</p>`:
 `<form id="profile-form"><h2>Kenalan dulu, lalu mulai belajar</h2><p class="muted">Isi semua bagian. Usia Anda akan muncul dari tanggal lahir.</p><div class="field-grid"><div class="field full"><label for="fullName">Nama lengkap</label><input id="fullName" name="fullName" required maxlength="120" autocomplete="name" value="${esc(d.fullName)}"></div><div class="field full"><label for="address">Alamat</label><textarea id="address" name="address" required maxlength="500" autocomplete="street-address">${esc(d.address)}</textarea></div><div class="field"><label for="dob">Tanggal lahir</label><input type="date" id="dob" name="dob" required max="${localDate()}" value="${esc(d.dob)}"></div><div class="field"><label for="age">Usia otomatis</label><input id="age" readonly value="${ageFromDob(d.dob)===null?'':ageFromDob(d.dob)+' tahun'}" aria-live="polite"></div><div class="field"><label for="puskesmas">Nama Puskesmas</label><input id="puskesmas" name="puskesmas" required maxlength="160" value="${esc(d.puskesmas)}"></div><div class="field"><label for="posyandu">Nama Posyandu</label><input id="posyandu" name="posyandu" required maxlength="160" value="${esc(d.posyandu)}"></div><div class="field full"><label for="education">Pendidikan</label><select id="education" name="education" required><option value="">Pilih pendidikan</option>${EDUCATIONS.map(x=>`<option ${d.education===x?'selected':''}>${esc(x)}</option>`).join('')}</select></div></div><fieldset style="margin-top:22px"><legend>Apakah Anda sudah pernah mengetahui atau ikut pelatihan cara mengisi Kartu Bantu Kader?</legend><div class="choices">${['Sudah pernah','Belum pernah'].map((x,i)=>`<label class="choice"><input type="radio" name="priorTraining" value="${x}" required ${d.priorTraining===x?'checked':''}><span>${x}</span></label>`).join('')}</div></fieldset><div id="profile-error" role="alert"></div><button class="btn glow" id="submit-profile" type="submit">Simpan data & pilih kartu →</button></form>`;
 const cards=window.KADER_CONTENT.modules.map((m,i)=>{
  const r=state.modules[m.id];const status=r?(r.completedAt?'Lulus':LABELS[r.stage.replace('Result','')]||'Sedang belajar'):'Belum mulai';
  return p?`<a class="module-card" id="open-${m.id}" href="${navHref(m.id)}">${photo(i+1)}<div><h3>${esc(m.short)}</h3><p>${esc(m.hook||m.title)}</p><span class="tag">${esc(status)} →</span></div></a>`:`<div class="module-card locked" aria-disabled="true">${photo(i+1)}<div><h3>${esc(m.short)}</h3><p>Lengkapi data peserta untuk membuka kartu ini.</p></div></div>`;
 }).join('');
 document.getElementById('app').innerHTML=shell('Sudah yakin kolomnya tepat? Coba tujuh kartu ini.','Belajar lewat contoh pengisian kartu dan soal Benar atau Salah. Anda boleh memilih kartu pertama yang paling ingin dikuasai.',`<div class="content-grid"><div><section class="panel">${profile}</section><section class="panel" id="module-options"><h2>Kartu mana yang ingin Anda coba?</h2><div class="module-grid">${cards}</div></section></div><aside class="sidebar"><section class="panel"><div><h3>Langkah Anda</h3><p>Isi data → pilih kartu → pretes → Materi 1 → midtes → Materi 2 → posttes → sertifikat.</p></div></section><section class="panel"><div><h3>Punya salinan belajar?</h3><p class="small">Lanjutkan pekerjaan yang pernah Anda simpan.</p><button class="btn secondary small" id="restore-backup">Buka salinan belajar</button></div></section></aside></div>`,true);
 const form=document.getElementById('profile-form');if(form){
  form.addEventListener('input',()=>{captureIndex();const a=ageFromDob(document.getElementById('dob').value);document.getElementById('age').value=a===null?'':a+' tahun';persist();});
  form.addEventListener('change',captureIndex);
  form.addEventListener('submit',e=>{e.preventDefault();if(state.indexPaused)return;captureIndex();const p=Object.fromEntries(new FormData(form).entries());Object.keys(p).forEach(k=>p[k]=p[k].trim());const v=validProfile(p);if(!v.ok){document.getElementById('profile-error').innerHTML=`<p class="form-error">${esc(v.message)}</p>`;return;}state.profile={...p,id:uuid(),age:v.age,registeredAt:new Date().toISOString()};state.modules={};state.indexPaused=false;persist(true);render();document.getElementById('module-options').scrollIntoView({behavior:'smooth',block:'start'});});
 }
 document.getElementById('restore-backup').onclick=()=>document.getElementById('import-backup').click();
}
function localDate(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function stageBase(){return rec.stage.replace('Result','');}
function stepList(){const current=stageBase(),pos=STAGES.indexOf(current);return `<ol class="steps">${STAGES.map((s,i)=>`<li class="step ${i===pos?'active':i<pos?'done':''}" ${i===pos?'aria-current="step"':''}>${i+1}. ${LABELS[s]}</li>`).join('')}</ol>`;}
function renderModule(){
 const title=mod.hook||mod.title;
 const body=`<div class="content-grid"><section class="panel" id="learning-panel">${stepList()}${renderObjectives()}${renderStage()}</section><aside class="sidebar"><section class="panel"><div><h3>${esc(state.profile.fullName)}</h3><p class="small">${esc(state.profile.posyandu)}</p></div><div><div class="small muted">Waktu belajar aktif</div><div class="timer" id="timer">${timeText(elapsed())}</div></div></section><section class="panel"><div><h3>Satu tahap, satu langkah</h3><p class="small">${esc(sideText())}</p><a class="btn secondary small" id="back-index" href="${navHref('index')}">Pilih kartu lain</a><p class="source-link"><a href="referensi/${PAGE.toLowerCase()}.pdf" target="_blank" rel="noopener">Buka kartu sumber ↗</a></p></div></section></aside></div>`;
 document.getElementById('app').innerHTML=shell(title,'Baca contoh pengisian kartu dan jawab soal Benar atau Salah. Periksa hasilnya sebelum melangkah ke tahap berikutnya.',body);
 wireStage();
}
function renderObjectives(){
 if(rec.stage!=='pre')return '';
 const objectives=mod.mappings.map(item=>`<li>${esc(item.indicator)}</li>`).join('');
 return `<details id="module-objectives" open><summary>Tujuan belajar modul ini</summary><ul class="lesson-list">${objectives}</ul></details><div class="divider"></div>`;
}
function sideText(){const k=stageBase();return {pre:'Pretes dikerjakan satu kali. Nilainya membantu Anda mengenali bagian yang perlu dipelajari.',lesson1:'Pelajari tiap bagian materi. Tombol berikutnya membawa Anda ke contoh selanjutnya.',mid:'Jawab sedikitnya tiga soal dengan benar untuk membuka materi kedua.',lesson2:'Lihat cara memakai data kasus pada kolom kartu yang tepat.',post:'Jawab sedikitnya empat soal dengan benar untuk menyelesaikan modul.',certificate:'Periksa data dan semua halaman sertifikat sebelum membagikannya.'}[k]||'';}
function renderStage(){
 if(rec.stage.endsWith('Result'))return renderResult();
 if(['pre','mid','post'].includes(rec.stage))return renderExam(rec.stage);
 if(rec.stage==='lesson1'||rec.stage==='lesson2')return renderLesson(rec.stage);
 if(rec.stage==='certificate')return qualified()?renderCertificate():renderLocked();
 return renderLocked();
}
function renderLocked(){rec.stage=nextRequired();return `<h2>Lanjutkan tahap belajar Anda</h2><p>Buka kembali tahap yang belum selesai.</p><button class="btn" id="continue-required">Lanjut belajar</button>`;}
function questionBank(k){return mod.questions[k];}
function orderedQuestions(k){const qs=questionBank(k).slice();let seed=(rec[k].length+1)*31+PAGE.charCodeAt(2);for(let i=qs.length-1;i>0;i--){seed=(seed*1664525+1013904223)>>>0;const j=seed%(i+1);[qs[i],qs[j]]=[qs[j],qs[i]];}return qs;}
function renderExam(k){
 const allowed=k==='pre'?!rec.pre.length:k==='mid'?rec.done1:rec.done2&&passTest('mid',60);
 if(!allowed)return renderLocked();
 const draft=rec.drafts[k]||{};return `<div class="eyebrow">${LABELS[k]} · 5 soal</div><h2>${k==='pre'?'Apa yang sudah Anda ketahui?':k==='mid'?'Coba pakai materi yang baru dipelajari.':'Siap mencatat dengan lebih tepat?'}</h2><p>${k==='pre'?'Kerjakan satu kali. Anda tetap dapat belajar berapa pun nilai awalnya.':`Nilai lulus minimal ${k==='mid'?'60 (3 dari 5 soal)':'80 (4 dari 5 soal)'}. Anda dapat mengulang setelah mempelajari pembahasan.`}</p><span class="attempt-badge">Percobaan ${rec[k].length+1}</span><div class="divider"></div><form id="exam-form">${orderedQuestions(k).map((q,i)=>`<fieldset><legend>${i+1}. ${esc(q.text)}</legend><div class="choices">${[true,false].map(v=>`<label class="choice"><input type="radio" required name="${esc(q.id)}" value="${v}" ${draft[q.id]===v?'checked':''}><span>${v?'Benar':'Salah'}</span></label>`).join('')}</div></fieldset>`).join('')}<div id="exam-error" role="alert"></div><button class="btn glow" id="submit-test" type="submit">Periksa jawaban ${LABELS[k].toLowerCase()} →</button></form>`;
}
function renderLesson(k){const part=k==='lesson1'?1:2,all=part===1?mod.lessons1:mod.lessons2;const idx=Math.min(Math.max(0,rec[k+'Index']||0),all.length-1);const card=all[idx];return `<div class="eyebrow">Materi ${part} · Bagian ${idx+1} dari ${all.length}</div><h2>${esc(card.title)}</h2><progress value="${idx+1}" max="${all.length}" aria-label="Kemajuan materi"></progress><div style="margin-top:22px">${String(card.text||'').split('\n').filter(Boolean).map(x=>`<p>${esc(x)}</p>`).join('')}</div>${card.bullets&&card.bullets.length?`<ul class="lesson-list">${card.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${card.example?`<div class="example"><h3>Coba lihat contoh ini</h3><p>${esc(typeof card.example==='string'?card.example:JSON.stringify(card.example))}</p></div>`:''}<p class="source-link">Kartu ${esc(mod.short)} · ${esc(card.source||(String(mod.sourcePages)+' halaman sumber')||'kolom sesuai topik materi')} · <a href="referensi/${PAGE.toLowerCase()}.pdf" target="_blank" rel="noopener">Lihat kartu ↗</a></p><div class="lesson-nav">${idx?'<button class="btn secondary" id="previous-lesson">← Sebelumnya</button>':'<span></span>'}<button class="btn" id="next-lesson">${idx===all.length-1?(part===1?'Lanjut ke midtes →':'Lanjut ke posttes →'):'Bagian berikutnya →'}</button></div>`;}
function renderResult(){
 const k=stageBase();
 const a=last(rec[k]);if(!a)return renderLocked();const min=k==='mid'?60:k==='post'?80:0,passed=a.score>=min;
 return `<div class="eyebrow">Hasil ${LABELS[k]} · Percobaan ${a.attempt}</div><h2>Nilai Anda ${a.score}</h2><div class="notice ${passed?'good':''}">${k==='pre'?'Pretes sudah selesai. Sekarang Anda dapat mulai belajar.':passed?'Anda lulus tahap ini.':'Baca pembahasannya, lalu coba lagi.'}</div>${a.questions.map(q=>`<div class="review-item ${q.correct?'correct':'wrong'}"><p><strong>${q.correct?'✓ Benar':'↻ Perlu diperbaiki'}</strong></p><p>${esc(q.text)}</p><p>Jawaban Anda: ${q.answer?'Benar':'Salah'} · Jawaban tepat: ${q.expected?'Benar':'Salah'}</p><p class="small">${esc(q.explanation)}</p></div>`).join('')}<div class="actions"><button class="btn glow" id="advance-result">${k==='pre'?'Mulai materi 1 →':passed?(k==='mid'?'Buka materi 2 →':'Buka sertifikat →'):'Coba lagi →'}</button></div>`;
}
function renderCertificate(){const p=state.profile;return `<div class="certificate"><div class="eyebrow">Sertifikat kelulusan</div><h2>Anda telah menyelesaikan<br>${esc(mod.short)}</h2><p class="person">${esc(p.fullName)}</p><p>${esc(p.posyandu)} · ${esc(p.puskesmas)}</p><p class="small">Waktu belajar ${timeText(rec.elapsedMs)} · ${new Date(rec.completedAt).toLocaleDateString('id-ID')}</p><div class="metric-grid"><div class="metric"><strong>${last(rec.pre).score}</strong><span>Pretes</span></div><div class="metric"><strong>${last(rec.mid).score}</strong><span>Midtes</span></div><div class="metric good"><strong>${last(rec.post).score}</strong><span>Posttes</span></div></div><div class="signers"><div><p>Menyetujui,</p><strong>Dr. Trevino Aristarkus Pakasi, FS, MS, Ph.D., Sp.KKLP, Subsp.FOMC</strong></div><div><p>Hormat saya,</p><strong>Dr.dr.Tirta Darmawan Susanto, MKes.</strong></div></div></div><details class="certificate-pages" open><summary>Periksa semua halaman sertifikat Anda</summary><div id="certificate-pages" aria-live="polite"><p>Sertifikat Anda sedang disiapkan.</p></div></details><p class="small" style="margin-top:18px">Berkas sertifikat memuat data pribadi, nilai, dan jawaban salah pada semua percobaan. Periksa kembali sebelum membagikan.</p><div class="actions"><button class="btn" id="download-pdf">Unduh 1 file PDF ↓</button><button class="btn secondary" id="download-jpeg">Simpan 1 file JPEG ↓</button></div><div class="wa-box"><h3>Kirim hasil Anda kepada dr. Trevino</h3><p>Tujuan: +62 811-194-085</p><button class="btn glow" id="share-wa">Kirim data sertifikat ke WA dr. Trevino</button><div id="share-options" hidden><div class="divider"></div><ol class="help-list"><li>Unduh JPEG sertifikat dan lampirkan sebagai dokumen atau foto di WhatsApp.</li><li>Salin pesan lengkap di bawah.</li><li>Buka chat dr. Trevino, tempel pesan, lalu kirim bersama JPEG.</li></ol><div class="actions"><button class="btn secondary" id="copy-wa">Salin pesan lengkap</button><a class="btn" id="open-wa" href="https://wa.me/62811194085" target="_blank" rel="noopener">Buka WhatsApp dr. Trevino ↗</a></div><label for="wa-message">Pesan sertifikat</label><textarea id="wa-message" readonly></textarea></div></div><div id="certificate-error" role="alert"></div>${KaderReview.render(mod,rec)}`;}
function filenamePart(s){return String(s).normalize('NFKD').replace(/\p{M}/gu,'').replace(/[^\p{L}\p{N}]+/gu,'_').replace(/^_|_$/g,'')||'Peserta';}
function wireStage(){
 const form=document.getElementById('exam-form');if(form){
  const k=stageBase();form.addEventListener('change',e=>{if(rec.paused)return;if(e.target.type==='radio'){rec.drafts[k]=rec.drafts[k]||{};rec.drafts[k][e.target.name]=e.target.value==='true';persist();}});
  form.addEventListener('submit',e=>{e.preventDefault();if(rec.paused||busy)return;if(k==='pre'&&rec.pre.length){toast('Pretes sudah selesai dan hanya dapat dikerjakan satu kali.');return;}
   if((k==='mid'&&!rec.done1)||(k==='post'&&(!passTest('mid',60)||!rec.done2)))return;
   const vals=new FormData(form),qs=questionBank(k);if(qs.some(q=>!vals.has(q.id))){document.getElementById('exam-error').innerHTML='<p class="form-error">Pilih jawaban untuk kelima soal.</p>';return;}
   const questions=qs.map(q=>({id:q.id,text:q.text,answer:vals.get(q.id)==='true',expected:q.answer,correct:(vals.get(q.id)==='true')===q.answer,explanation:q.explanation}));
   rec[k].push({attempt:rec[k].length+1,score:questions.filter(q=>q.correct).length*20,questions,at:new Date().toISOString()});rec.drafts[k]={};rec.stage=k+'Result';
   if(k==='post'&&qualified()){stopClock();rec.completedAt=new Date().toISOString();}persist();render();scrollLearning();
  });
 }
 const next=document.getElementById('next-lesson');if(next)next.onclick=()=>{if(rec.paused)return;const k=rec.stage,part=k==='lesson1'?1:2,list=part===1?mod.lessons1:mod.lessons2,idx=rec[k+'Index']||0;
  if(idx<list.length-1)rec[k+'Index']=idx+1;else{rec[part===1?'done1':'done2']=true;rec.stage=part===1?'mid':'post';}persist();render();scrollLearning();};
 const prev=document.getElementById('previous-lesson');if(prev)prev.onclick=()=>{if(rec.paused)return;rec[rec.stage+'Index']=Math.max(0,(rec[rec.stage+'Index']||0)-1);persist();render();scrollLearning();};
 const advance=document.getElementById('advance-result');if(advance)advance.onclick=()=>{if(rec.paused)return;const k=stageBase();
  if(k==='pre')rec.stage='lesson1';
  else if(k==='mid')rec.stage=passTest('mid',60)?'lesson2':'mid';
  else if(k==='post')rec.stage=passTest('post',80)&&qualified()?'certificate':'post';
  persist();render();scrollLearning();};
 const req=document.getElementById('continue-required');if(req)req.onclick=()=>{render();};
 if(document.getElementById('download-pdf')){
  document.getElementById('download-pdf').onclick=()=>guardAsync(async()=>{const c=await getCertificate();if(!c||rec.paused)return;download(c.pdf,certificateName()+'.pdf');});
  document.getElementById('download-jpeg').onclick=()=>guardAsync(async()=>{const c=await getCertificate();if(!c||rec.paused)return;download(c.jpeg,certificateName()+'.jpg');});
  document.getElementById('share-wa').onclick=shareCertificate;
  document.getElementById('copy-wa').onclick=async()=>{const area=document.getElementById('wa-message');try{await navigator.clipboard.writeText(area.value);toast('Pesan lengkap sudah disalin.');}catch(_){area.focus();area.select();toast('Pilih Salin pada teks yang ditandai.');}};
  KaderReview.wire(rec,persist);
  getCertificate().then(c=>{if(c&&!rec.paused)KaderReview.preview(c);}).catch(e=>certificateError(e));
 }
}
function scrollLearning(){document.getElementById('learning-panel')?.scrollIntoView({behavior:'smooth',block:'start'});}
async function guardAsync(fn){if(busy||(rec&&rec.paused)||state.indexPaused)return;busy=true;try{await fn();}catch(e){toast(e.message||'Langkah ini belum berhasil. Coba kembali.');}finally{busy=false;}}
function download(blob,filename){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
function certificateName(){return `Sertifikat_${filenamePart(state.profile.fullName)}_${PAGE}`;}
async function getCertificate(){
 if(!qualified())throw Error('Selesaikan semua tahap sebelum membuka sertifikat.');
 const key=state.profile.id+PAGE+rec.completedAt;
 if(certCache&&certCache.key===key)return certCache.promise;
 const snapshot=clone(rec),profile=clone(state.profile),token=operation;profile.age=ageFromDob(profile.dob,new Date(rec.completedAt));
 const promise=KaderFiles.certificate(mod,profile,snapshot).then(c=>{if(token!==operation||!state.profile||state.profile.id!==profile.id){if(certCache?.promise===promise)certCache=null;return null;}const area=document.getElementById('wa-message');if(area){area.value=c.message;const link=document.getElementById('open-wa');link.href='https://wa.me/62811194085'+(c.message.length<5000?'?text='+encodeURIComponent(c.message):'');}return c;}).catch(e=>{if(certCache?.promise===promise)certCache=null;throw e;});
 certCache={key,promise};return promise;
}
function certificateError(e){const el=document.getElementById('certificate-error');if(el)el.innerHTML=`<p class="form-error">${esc(e.message)}</p>`;}
async function shareCertificate(){
 if(rec.paused||busy)return;
 try{
  const c=await getCertificate();if(!c||rec.paused)return;const file=new File([c.jpeg],certificateName()+'.jpg',{type:'image/jpeg'});
  document.getElementById('share-options').hidden=false;document.getElementById('wa-message').value=c.message;
  if(navigator.canShare&&navigator.canShare({files:[file]})&&navigator.share){
   try{await navigator.share({files:[file],text:c.message,title:'Sertifikat '+mod.short+' — dr. Trevino +62 811-194-085'});toast('Pilihan berbagi sudah ditutup. Periksa kiriman Anda di WhatsApp.');}catch(e){if(e.name!=='AbortError')toast('Gunakan pilihan unduh, salin pesan, dan buka WhatsApp di bawah.');}
  }else{toast('Gunakan tiga langkah pengiriman yang muncul di bawah tombol.');}
 }catch(e){certificateError(e);}
}
async function resetProgress(){
 operation++;stopClock();
 if(bridgeReady){try{await bridgeCall('reset');}catch(_){}}
 state={...fresh(),resetAt:new Date().toISOString()};
 try{localStorage.setItem(KEY,JSON.stringify(state));}catch(_){}
 rec=null;certCache=null;location.replace('index.html');
}
function wireCommon(){
 document.getElementById('save-progress').onclick=()=>{captureIndex();operation++;certCache=null;busy=false;if(rec){stopClock();rec.paused=true;}else state.indexPaused=true;persist();renderPause();toast(storageProblem?'Unduh salinan belajar agar pekerjaan Anda tetap tersimpan.':'Pekerjaan tersimpan. Waktu belajar dijeda.');};
 document.getElementById('backup-progress').onclick=exportBackup;
 document.getElementById('reset-data').onclick=()=>document.getElementById('reset-dialog').showModal();
 document.getElementById('cancel-reset').onclick=()=>document.getElementById('reset-dialog').close();
 document.getElementById('confirm-reset').onclick=resetProgress;
 for(const id of ['home-link','back-index']){const el=document.getElementById(id);if(el)el.addEventListener('click',()=>{stopClock();persist();});}
 for(const el of document.querySelectorAll('[id^="open-M"]'))el.addEventListener('click',()=>persist());
 document.getElementById('import-backup').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>8*1024*1024)throw Error('Salinan belajar terlalu besar.');const next=validateState(JSON.parse(await f.text()));if(state.profile&&!confirm('Ganti data pada perangkat ini dengan salinan belajar yang dipilih?'))return;stopClock();operation++;certCache=null;state=next;state.indexPaused=false;for(const r of Object.values(state.modules))r.paused=true;persist(true);if(PAGE!=='index'){location.href=navHref('index');return;}render();toast('Salinan belajar dibuka. Pilih modul untuk melanjutkan.');}catch(err){toast(err.message||'Salinan belajar tidak dapat dibaca.');}};
}
function exportBackup(){captureIndex();persist();download(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),`Belajar_Kader_${filenamePart(state.profile?.fullName||'Peserta')}_${localDate()}.json`);}
function renderPause(){
 if(document.getElementById('pause-cover'))return;
 const layer=document.createElement('div');layer.id='pause-cover';layer.className='pause-cover';layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-label','Belajar dijeda');layer.innerHTML=`<div class="pause-card"><div class="pause-icon" aria-hidden="true">Ⅱ</div><h2>Belajar sedang dijeda</h2><p>Pekerjaan Anda tetap tersimpan. Waktu berhenti sampai Anda menekan Lanjut.</p><div class="actions"><button class="btn glow" id="resume-progress">Lanjut belajar →</button><button class="btn secondary" id="paused-backup">Unduh salinan belajar</button></div></div>`;
 document.getElementById('app').inert=true;document.body.appendChild(layer);document.getElementById('resume-progress').onclick=()=>{if(rec)rec.paused=false;else state.indexPaused=false;layer.remove();document.getElementById('app').inert=false;persist();startClock();render();};document.getElementById('paused-backup').onclick=exportBackup;document.getElementById('resume-progress').focus();
}
function updateClock(){const e=document.getElementById('timer');if(e)e.textContent=timeText(elapsed());}
window.addEventListener('pagehide',()=>{captureIndex();stopClock();persist();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'){stopClock();persist();}else startClock();});
window.addEventListener('storage',e=>{if(e.key!==KEY||invalidated)return;try{const next=e.newValue?JSON.parse(e.newValue):null;if(state.profile&&(!next?.profile||next.profile.id!==state.profile.id))invalidateSession();}catch(_){}});
async function init(){
 try{
  if(!window.KADER_CONTENT?.modules||!window.KaderFiles||!window.KaderReview)throw Error('Folder aplikasi belum lengkap. Buka index.html dari folder hasil ekstraksi.');
  const stored=await initRepository();
  if(stored)state=validateState(stored);
  initialized=true;
  if(stored?.version===1)persist(true);
  const passed=decodeProfile();
  if(passed&&!state.profile&&(!stored||Date.parse(passed.registeredAt)>Date.parse(stored.resetAt||'1970-01-01'))){state={...fresh(),profile:passed};persist(true);}
  if(PAGE!=='index'){
   if(!state.profile||!validProfile(state.profile).ok){location.replace('index.html');return;}
   mod=KADER_CONTENT.modules.find(m=>m.id===PAGE);if(!mod)throw Error('Modul tidak ditemukan.');ensureRecord();persist();
  }
  render();if(corruptStorage)toast('Data tersimpan tidak dapat dibaca. Buka salinan belajar Anda atau isi data untuk peserta baru.');setInterval(updateClock,500);setInterval(()=>{if(!document.hidden)persist();},5000);
 }catch(e){document.getElementById('app').innerHTML=`<div class="wrap"><section class="panel" style="margin-top:50px"><h1>Buka kembali tempat belajar Anda</h1><p>${esc(e.message)}</p><a class="btn" href="index.html">Buka indeks</a><button class="btn secondary" id="clear-invalid-store">Kosongkan data lama</button></section></div>`;document.getElementById('clear-invalid-store').onclick=resetProgress;}
}
init();
})();
