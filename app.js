'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY='wise-study-room-v1';
const FORMAT={mcq:'Multiple choice',long:'Explain it',short:'Quick recall',demo:'Plan a demonstration'};
const FAMILY={all:'All sessions',foundation:'Foundations',exploration:'Exploration',world:'World building',combat:'Combat',challenges:'Challenges'};
const paths={home:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',list:'<path d="M8 6h12M8 12h12M8 18h12M3 6h.01M3 12h.01M3 18h.01"/>',book:'<path d="M12 5v15M3 4c4-1 7 0 9 2 2-2 5-3 9-2v15c-4-1-7 0-9 2-2-2-5-3-9-2z"/>',chart:'<path d="M4 3v18h17M9 16v-5M14 16V7M19 16V4"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',back:'<path d="M20 12H4m6-6-6 6 6 6"/>',check:'<path d="m5 12 4 4L20 5"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',quiz:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',write:'<path d="m14 4 6 6M4 20l5-1L21 7l-5-5L4 14z"/>',demo:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-3-14 6 3-6 3z"/>',save:'<path d="M5 3h12l4 4v14H3V3zM7 3v6h10V3M7 21v-8h10v8"/>',bookmark:'<path d="M6 3h12v19l-6-4-6 4z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-11v1"/>',external:'<path d="M14 3h7v7m-10 3L21 3M9 3H3v18h18v-6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',refresh:'<path d="M20 7a9 9 0 1 0 1 8M20 2v6h-6"/>',x:'<path d="m6 6 12 12M6 18 18 6"/>'};
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${paths[n]||paths.book}</svg>`;
let data,questionMap,sectionMap,state,activeIds=[],currentQ=null,toastTimer,activeFilter='all',filterText='',coverageSection='all',coverageStatus='all',coverageText='',reviewTab='weak',currentIndex=0;
let storageFailed=false;
const blankState=()=>({version:1,answers:{},cursors:{},lastSection:'overworld',session:null,history:[]});
function sanitizeState(raw){
  const out=blankState();
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return out;
  const records=raw.answers&&typeof raw.answers==='object'?raw.answers:{};
  for(const id of Object.keys(questionMap)){
    const r=records[id];if(!r||typeof r!=='object'||Array.isArray(r))continue;
    const q=questionMap[id];
    out.answers[id]={text:typeof r.text==='string'?r.text.slice(0,30000):'',notes:typeof r.notes==='string'?r.notes.slice(0,20000):'',demo:Object.fromEntries(['setup','steps','expected','observed'].map(k=>[k,typeof r.demo?.[k]==='string'?r.demo[k].slice(0,15000):''])),choice:Number.isInteger(r.choice)&&r.choice>=0&&r.choice<(q.options?.length||0)?r.choice:null,checked:r.checked===true,rating:[1,2,3].includes(r.rating)?r.rating:null,bookmarked:r.bookmarked===true,checks:Array.isArray(r.checks)?r.checks.filter(n=>Number.isInteger(n)&&n>=0&&n<q.checks.length):[],updated:typeof r.updated==='string'?r.updated:'',attempts:Number.isInteger(r.attempts)&&r.attempts>=0?Math.min(r.attempts,10000):0};
    const clean=out.answers[id];
    if(q.kind==='mcq'&&clean.choice===null)clean.checked=false;
    if(q.kind!=='mcq'&&!hasAnswer(q,clean)){clean.checked=false;clean.rating=null;}
    if(!clean.checked)clean.rating=null;
  }
  for(const s of data.sections){const n=raw.cursors?.[s.id];if(Number.isInteger(n))out.cursors[s.id]=Math.max(0,Math.min(s.questionIds.length-1,n));}
  if(sectionMap[raw.lastSection])out.lastSection=raw.lastSection;
  if(raw.session&&typeof raw.session==='object'&&Array.isArray(raw.session.ids)){
    const ids=[...new Set(raw.session.ids.filter(id=>questionMap[id]))];
    if(ids.length&&['section','mixed','review'].includes(raw.session.mode))out.session={...raw.session,ids,index:Math.max(0,Math.min(ids.length-1,Number.isInteger(raw.session.index)?raw.session.index:0)),section:sectionMap[raw.session.section]?raw.session.section:null,start:typeof raw.session.start==='string'?raw.session.start:new Date().toISOString()};
  }
  if(Array.isArray(raw.history))out.history=raw.history.slice(-30).filter(h=>h&&typeof h==='object').map(h=>({date:typeof h.date==='string'?h.date:'',section:typeof h.section==='string'?h.section:'',count:Number.isFinite(h.count)?h.count:0,reviewed:Number.isFinite(h.reviewed)?h.reviewed:0,mode:typeof h.mode==='string'?h.mode:''}));
  return out;
}
function save(){
  try{localStorage.setItem(KEY,JSON.stringify(state));$('#save-label').textContent='Saved on this device';}
  catch{ $('#save-label').textContent='Storage unavailable — export a backup';if(!storageFailed){toast('Browser storage is unavailable. Export a backup to keep your answers.');storageFailed=true;}}
}
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3700);}
const response=id=>state.answers[id]||{};
function record(id){return state.answers[id]||(state.answers[id]={text:'',notes:'',demo:{},choice:null,checked:false,rating:null,bookmarked:false,checks:[],attempts:0});}
function hasAnswer(q,r=response(q.id)){return q.kind==='mcq'?Number.isInteger(r.choice):q.kind==='demo'?['setup','steps','expected'].every(k=>r.demo?.[k]?.trim()):Boolean(r.text?.trim());}
function drafted(q,r=response(q.id)){return hasAnswer(q,r)||Boolean(r.text?.trim())||['setup','steps','expected','observed'].some(k=>Boolean(r.demo?.[k]?.trim()));}
function done(q){const r=response(q.id);return hasAnswer(q,r)&&r.checked&&(q.kind==='mcq'||[1,2,3].includes(r.rating));}
function weak(q){const r=response(q.id);return (q.kind==='mcq'&&r.checked&&r.choice!==q.correct)||(q.kind!=='mcq'&&r.checked&&[1,2].includes(r.rating));}
function confident(q){const r=response(q.id);return done(q)&&!weak(q)&&(q.kind==='mcq'||r.rating===3);}
function stats(ids){const qs=ids.map(id=>questionMap[id]).filter(Boolean);return {total:qs.length,done:qs.filter(done).length,weak:qs.filter(weak).length,confident:qs.filter(confident).length,answered:qs.filter(q=>drafted(q)).length};}
const bar=(n,d)=>`<span class="progress-bar"><i style="width:${d?Math.round(100*n/d):0}%"></i></span>`;
function navigate(hash){if(location.hash===hash)route();else location.hash=hash;}
function closeMobile(){document.body.classList.remove('menu-open');$('#menu-button').setAttribute('aria-expanded','false');}
function setCrumb(name){$('#breadcrumb').innerHTML=`Study room <span>/</span> ${esc(name)}`;document.title=`${name==='Overview'?'Your study room':name} — WiSe`;}
function renderNav(){
  const view=location.hash.split('/')[0]||'#home';
  $('#primary-nav').innerHTML=[['#home','Study dashboard','home'],['#coverage','Rubric coverage','list'],['#review','Review notebook','book'],['#progress','My progress','chart']].map(([href,label,ico])=>`<a class="nav-item ${view===href?'active':''}" href="${href}" ${view===href?'aria-current="page"':''}>${icon(ico)}<span>${label}</span>${href==='#review'?`<span class="nav-count">${data.questions.filter(weak).length||''}</span>`:''}</a>`).join('');
  const selected=currentQ?.section;
  $('#section-nav').innerHTML=data.sections.map((s,i)=>{const st=stats(s.questionIds);return `<a class="nav-item section-nav-item ${view==='#session'&&selected===s.id?'active':''}" href="#session/${s.id}" ${view==='#session'&&selected===s.id?'aria-current="page"':''}><span class="nav-no">${String(i+1).padStart(2,'0')}</span><span>${esc(s.name)}</span><span class="tiny-dot ${st.done===st.total?'done':''}" aria-label="${st.done} of ${st.total} reviewed"></span></a>`;}).join('');
}
function terrainArt(){let tiles='';for(let y=0;y<9;y++)for(let x=0;x<9;x++){const d=Math.max(Math.abs(x-4),Math.abs(y-4));tiles+=`<i class="tile ${d<=2?'water':d===3?'sand':(x+y)%3===0?'rock':''} ${x===4&&y===4?'boat':''}"></i>`;}return `<div class="hero-art" role="img" aria-label="Study diagram: a five by five water pool, sand ring, then grass and rock. The boat marks the required center content."><div class="art-header"><span>A WORLD OF POSSIBILITIES</span><b>WFC / 5 × 5</b></div><span class="art-seed">Every tile has a reason.</span><div class="tile-grid">${tiles}</div><div class="art-bottom"><span>WATER → SAND → GRASS / ROCK</span><span>01—81</span></div></div>`;}
function renderHome(){
  currentQ=null;setCrumb('Overview');const total=stats(data.questions.map(q=>q.id));
  const last=sectionMap[state.lastSection]||sectionMap.overworld,ls=stats(last.questionIds),started=ls.answered>0;
  $('#main').innerHTML=`<div class="welcome-line"><span class="eyebrow"><span class="dot"></span>YOUR PERSONAL GAME STUDY SPACE</span><span class="date-stamp">REALM OF WISDOM / PRACTICE EDITION</span></div><section class="hero"><div><h1>Know the game<br><em>you built.</em></h1><p>Every requirement, one session at a time. Test your knowledge, explain your decisions, and connect the rubric to your own WiSe game.</p><div class="hero-actions"><a class="button primary" href="#session/${last.id}">${started?'Continue practice':'Start with Overworld'} ${icon('arrow')}</a><button class="text-link" data-action="mixed">Take a quick quiz ${icon('arrow')}</button></div></div>${terrainArt()}</section><div class="stats-row"><div class="stat"><strong>19</strong><span>focused study<br>sessions</span></div><div class="stat"><strong>${data.counts.rubric}</strong><span>rubric criteria<br>all accounted for</span></div><div class="stat"><strong>${data.counts.total}</strong><span>mixed-format<br>practice questions</span></div><div class="stat"><strong>${Math.round(total.done/total.total*100)}<small style="font-size:17px">%</small></strong><span>reviewed<br>${total.done} of ${total.total} questions</span></div></div><section><div class="section-heading"><div><h2>${started?'Pick up where you left off':'Your next study session'}</h2><p>A little focus goes a long way.</p></div><a class="text-link" href="#progress">View progress ${icon('arrow')}</a></div><div class="continue-card"><span class="continue-symbol">${last.icon}</span><div><div class="overline">${started?'CONTINUE YOUR SESSION':'A GOOD PLACE TO BEGIN'}</div><h3>${esc(last.name)} <span class="muted">/</span> ${esc(last.title)}</h3><p>${last.rubricCount} rubric criteria · ${last.questionIds.length} questions · ${ls.done} reviewed</p></div><a class="button secondary" href="#session/${last.id}">${started?'Continue':'Open session'} ${icon('arrow')}</a></div></section><section id="sessions"><div class="section-heading"><div><h2>Your study sessions</h2><p>Choose a section. Learn it in your own words.</p></div><span class="overline">COVERING THE WHOLE RUBRIC</span></div><div class="filterbar"><div class="chips" role="group" aria-label="Filter sessions">${Object.entries(FAMILY).map(([k,v])=>`<button class="chip ${activeFilter===k?'selected':''}" data-family="${k}" aria-pressed="${activeFilter===k}">${v}</button>`).join('')}</div><label class="inline-search">${icon('search')}<input id="session-filter" type="search" value="${esc(filterText)}" placeholder="Find a session…" aria-label="Find a session"></label></div><div class="section-grid" id="session-grid"></div></section><div class="format-legend"><span>${icon('quiz')} Multiple choice</span><span>${icon('write')} Long & short answers</span><span>${icon('demo')} Demonstration plans</span><span>${icon('save')} Automatically saved</span></div><section class="tip">${icon('info')}<div><h3>Practice the explanation, too.</h3><p>Try answering before opening the guide. Compare with the reference, then rate your confidence. Written answers are self-reviewed; quiz answers are checked instantly.</p></div></section>`;
  renderCards();
}
function renderCards(){
  const sections=data.sections.filter(s=>(activeFilter==='all'||s.family===activeFilter)&&`${s.name} ${s.description}`.toLowerCase().includes(filterText.toLowerCase()));
  $('#session-grid').innerHTML=sections.map(s=>{const st=stats(s.questionIds),no=data.sections.indexOf(s)+1;return `<a href="#session/${s.id}" class="section-card"><div class="card-header"><span class="section-icon ${s.family}">${s.icon}</span><span class="session-no">SESSION ${String(no).padStart(2,'0')}</span></div><h3>${esc(s.name)}</h3><p>${esc(s.description)}</p><div class="card-info"><span>${s.rubricCount} rubric criteria</span><i class="separator"></i><span>${s.questionIds.length} questions</span></div><div class="card-foot"><span>${st.done?`<strong>${st.done}</strong> / ${st.total} reviewed`:'Ready when you are'}</span><span class="mini-track"><i style="width:${100*st.done/st.total}%"></i></span>${icon('arrow')}</div></a>`;}).join('')||'<p class="no-results">No sessions match your search.</p>';
}
function startSession(section,ids,mode='section',index=0){
  state.session={section,ids:[...ids],index,start:new Date().toISOString(),mode};if(section)state.lastSection=section;save();navigate(`#session/${mode==='section'?section:'practice'}/${index}`);
}
function mixed(){const ids=data.questions.filter(q=>q.kind==='mcq').map(q=>q.id);shuffle(ids);startSession(null,ids.slice(0,10),'mixed');}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function orderedOptions(q){let seed=Array.from(q.id).reduce((v,c)=>(v*31+c.charCodeAt(0))>>>0,17);const a=q.options.map((text,index)=>({text,index}));for(let i=a.length-1;i>0;i--){seed=(Math.imul(seed,1664525)+1013904223)>>>0;const j=seed%(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;}
function loadSession(parts){
  const sid=parts[1];let ids,section,mode;
  if(sid==='practice'&&state.session&&state.session.mode!=='section'){({ids,section,mode}=state.session);}
  else if(sectionMap[sid]){section=sid;ids=sectionMap[sid].questionIds;mode='section';}
  else return renderNotFound();
  const same=state.session?.section===section&&state.session?.mode===mode;
  const n=parts[2]!==undefined?Number(parts[2]):same?state.session.index:state.cursors[section]||0;
  currentIndex=Math.max(0,Math.min(ids.length-1,Number.isInteger(n)?n:0));activeIds=ids;
  state.session={...(same?state.session:{}),ids,section,mode,index:currentIndex,start:same?state.session.start:new Date().toISOString()};
  if(section){state.lastSection=section;state.cursors[section]=currentIndex;}save();renderQuestion();
}
function field(label,name,value,placeholder,rows=5){return `<label class="answer-field"><span>${esc(label)}</span><textarea data-answer="${name}" rows="${rows}" placeholder="${esc(placeholder)}">${esc(value)}</textarea></label>`;}
function renderQuestion(){
  const q=questionMap[activeIds[currentIndex]];currentQ=q;const r=response(q.id),s=sectionMap[q.section],session=state.session,st=stats(activeIds),single=session.mode==='section';
  setCrumb(single?s.name:session.mode==='mixed'?'Quick quiz':'Review practice');
  const title=single?s.name:session.mode==='mixed'?'A little of everything':'Back to the tricky parts';
  let answer='';
  if(q.kind==='mcq')answer=`<fieldset class="choices" style="border:0;padding:0"><legend class="sr-only">Choose one answer</legend>${orderedOptions(q).map((o,i)=>`<label class="choice ${r.checked?(o.index===q.correct?'correct':o.index===r.choice?'incorrect':''):''}"><input type="radio" name="choice" value="${o.index}" ${r.choice===o.index?'checked':''}><span class="choice-letter">${'ABCD'[i]}.</span><span>${esc(o.text)}</span></label>`).join('')}</fieldset>`;
  else if(q.kind==='demo')answer=field('1. Setup','demo.setup',r.demo?.setup,'Which scene, character, items, and starting state do you need?',2)+field('2. Player actions','demo.steps',r.demo?.steps,'List the actions or inputs you will perform, in order.',3)+field('3. Expected result','demo.expected',r.demo?.expected,'What must happen to satisfy this exact criterion?',3)+field('4. Observed result / evidence (optional)','demo.observed',r.demo?.observed,'After testing, record what happened, any gap, and where the evidence is.',3)+`<span class="field-help">A demonstration plan is practice. Record actual observations after testing in Unity.</span>`;
  else answer=field(q.kind==='short'?'Your answer':'Explain it in your own words','text',r.text,q.kind==='short'?'Be specific: input → condition → result.':'Start with the player action. Follow the code or algorithm, describe the outcome, and include one edge case.',q.kind==='short'?3:7)+`<span class="field-help">${q.kind==='short'?'A few clear sentences are enough.':'You can answer in English or Indonesian. No keyword-based grading.'}</span>`;
  $('#main').innerHTML=`<div class="eyebrow"><span class="dot"></span>${single?'ONE SECTION, AT YOUR OWN PACE':session.mode==='mixed'?'10 QUESTIONS · MIXED SECTIONS':'YOUR REVIEW QUEUE'}</div><div class="session-heading"><div><h1 class="page-title">${esc(title)}</h1><p>${single?esc(s.title)+' · '+s.rubricCount+' rubric criteria + '+s.extrasCount+' practice details':'Keep the concepts connected to your own game.'}</p></div><div class="session-tools">${single?`<button class="button secondary" data-action="fresh">${icon('refresh')} New attempt</button>`:''}<button class="button secondary" data-action="summary">Session summary</button></div></div><div class="session-layout"><article class="question-panel"><div class="question-panel-top"><span class="question-type">${icon(q.kind==='mcq'?'quiz':q.kind==='demo'?'demo':'write')}${FORMAT[q.kind]}</span><span>Question ${currentIndex+1} of ${activeIds.length}</span></div><div class="question-content"><div class="source-label"><span class="badge ${q.origin!=='rubric'?'warm':''}">${q.origin==='rubric'?'RUBRIC CRITERION':q.origin==='oral'?'ORAL PRACTICE SUBSTITUTE':'PROJECT DETAIL'}</span><span>${esc(q.source)}</span><span>· ${esc(q.group)}</span></div><h2>${esc(q.label.trim())}</h2><p class="question-prompt">${esc(q.prompt)}</p>${q.warning?`<div class="warning">${esc(q.warning)}</div>`:''}${answer}<details class="personal-notes" ${r.notes?'open':''}><summary>Your notes & questions</summary>${field('Notes for later','notes',r.notes,'What would you like to revisit?',3)}</details><div class="question-actions"><button class="button primary" data-action="check">${q.kind==='mcq'?(r.checked?'Check again':'Check answer'):(r.checked?'Compare again':'Save & compare')} ${icon('arrow')}</button><button class="bookmark ${r.bookmarked?'on':''}" data-action="bookmark" aria-pressed="${Boolean(r.bookmarked)}">${icon('bookmark')}${r.bookmarked?'Saved for review':'Save for review'}</button></div>${r.checked?feedback(q,r):''}</div><div class="question-nav"><button class="text-link" data-action="prev" ${currentIndex===0?'disabled':''}>${icon('back')} Previous</button><span class="muted" style="font-size:9px">${done(q)?'✓ Reviewed':hasAnswer(q)?'Draft saved':'Not answered yet'}</span><button class="text-link" data-action="next">${currentIndex===activeIds.length-1?'Finish session':done(q)?'Next question':'Skip for now'} ${icon('arrow')}</button></div></article><aside class="session-aside"><div class="aside-card"><h3>Your session</h3>${bar(st.done,st.total)}<div class="aside-count"><span>${st.done} of ${st.total} reviewed</span><span>${Math.round(100*st.done/st.total)}%</span></div><p>${st.weak} to revisit · ${st.confident} confident</p><div class="question-dots" aria-label="Jump to a question">${activeIds.map((id,i)=>{const item=questionMap[id];return `<button class="question-dot ${i===currentIndex?'current':''} ${weak(item)?'review':done(item)?'done':''}" data-index="${i}" aria-label="Question ${i+1}: ${esc(item.label.trim())}, ${weak(item)?'needs review':done(item)?'reviewed':'not reviewed'}" ${i===currentIndex?'aria-current="step"':''}>${i+1}</button>`;}).join('')}</div><div class="aside-small">Green = reviewed · Amber = revisit<br>Skipped questions stay in this session.</div></div><div class="aside-card"><h3>Make it stick</h3><p>Answer first. Compare with the guide. Then explain it aloud as if you’re presenting your game.</p><a class="text-link" href="${guideLink(q)}" target="_blank" rel="noopener">Read the feature guide ${icon('external')}</a><p class="aside-small">References are available whenever you need them.</p></div></aside></div>`;
}
const guideLink=q=>'library/?doc='+encodeURIComponent(q.chapter);
function markdown(text){return DOMPurify.sanitize(marked.parse(text||''),{FORBID_TAGS:['img','iframe','script'],FORBID_ATTR:['style']});}
function feedback(q,r){
  const mcq=q.kind==='mcq',correct=mcq&&r.choice===q.correct;
  return `<section class="feedback" id="feedback"><div class="result-label ${mcq&&!correct?'wrong':''}">${icon(mcq?(correct?'check':'x'):'book')}${mcq?(correct?'That’s right.':'Not quite. Let’s connect the idea.'):'Compare, then review your answer'}</div><h3>${mcq?'The idea to remember':'What to cover'}</h3><p>${esc(q.answer||q.summary)}</p><div class="model-notes">${q.notes.map(n=>`<h4>${esc(n.heading)}</h4>${markdown(n.text)}`).join('')}</div><details class="model-notes"><summary>Try it in your game</summary><p>${esc(q.demo)}</p></details><div class="reference-actions"><a class="text-link" href="${guideLink(q)}" target="_blank" rel="noopener">Read full explanation ${icon('external')}</a>${q.code?`<a class="text-link" href="library/?file=${encodeURIComponent('Scripts/'+q.code)}" target="_blank" rel="noopener">Open ${esc(q.code.split('/').pop())} ${icon('external')}</a>`:''}</div>${!mcq?`<div class="self-check"><h4>CHECK YOUR EXPLANATION</h4>${q.checks.map((text,i)=>`<label><input type="checkbox" data-checkpoint="${i}" ${r.checks?.includes(i)?'checked':''}>${esc(text)}</label>`).join('')}</div><p class="rating-label">How well can you explain this now?</p><div class="ratings" role="group" aria-label="Rate your confidence">${[[1,'Needs practice'],[2,'Getting there'],[3,'Can explain it']].map(([n,label])=>`<button class="rating ${r.rating===n?'active':''}" data-rating="${n}" aria-pressed="${r.rating===n}">${label}</button>`).join('')}</div><p class="field-help">Your rating completes this written question. It is a self-assessment, not an official rubric score.</p>`:`<p class="field-help">${correct?'You can still bookmark this question for another pass.':'This question is in your review queue. Try again when you’re ready.'}</p>`}</section>`;
}
function checkAnswer(){
  const q=currentQ,r=record(q.id);
  if(!hasAnswer(q,r)){toast(q.kind==='mcq'?'Choose an answer first.':q.kind==='demo'?'Fill in setup, actions, and expected result first.':'Write your answer first, then compare it with the guide.');return;}
  r.checked=true;r.attempts=(r.attempts||0)+1;r.updated=new Date().toISOString();save();renderQuestion();renderNav();$('#feedback')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function refreshDraftProgress(){
  if(!currentQ)return;
  const q=currentQ,st=stats(activeIds),r=response(q.id);
  const label=$('.question-nav .muted');if(label)label.textContent=done(q)?'✓ Reviewed':hasAnswer(q)?'Draft saved':'Not answered yet';
  const next=$('[data-action="next"]');if(next)next.innerHTML=(currentIndex===activeIds.length-1?'Finish session':done(q)?'Next question':'Skip for now')+' '+icon('arrow');
  const check=$('[data-action="check"]');if(check)check.innerHTML=(q.kind==='mcq'?'Check answer':'Save & compare')+' '+icon('arrow');
  const fill=$('.session-aside .progress-bar i');if(fill)fill.style.width=(100*st.done/st.total)+'%';
  const counts=document.querySelectorAll('.aside-count span');if(counts.length){counts[0].textContent=st.done+' of '+st.total+' reviewed';counts[1].textContent=Math.round(100*st.done/st.total)+'%';}
  const info=$('.session-aside .aside-card>p');if(info)info.textContent=st.weak+' to revisit · '+st.confident+' confident';
  const dot=$('.question-dot.current');if(dot){dot.classList.toggle('done',done(q));dot.classList.toggle('review',weak(q));dot.setAttribute('aria-label','Question '+(currentIndex+1)+': '+q.label.trim()+', '+(weak(q)?'needs review':done(q)?'reviewed':'not reviewed'));}
  renderNav();
}
function goQuestion(n){
  const ss=state.session;n=Math.max(0,Math.min(activeIds.length-1,n));ss.index=n;if(ss.section)state.cursors[ss.section]=n;save();navigate(`#session/${ss.mode==='section'?ss.section:'practice'}/${n}`);
}
function renderSummary(){
  currentQ=null;setCrumb('Session summary');const ss=state.session;if(!ss)return renderHome();activeIds=ss.ids;const st=stats(activeIds),s=sectionMap[ss.section],missing=ss.ids.filter(id=>!done(questionMap[id]));
  $('#main').innerHTML=`<div class="eyebrow">YOUR STUDY SESSION</div><h1 class="page-title">${esc(s?.name||'Practice')} / the check-in</h1><p class="page-intro">${missing.length?'Your answers are saved. You can return to the remaining questions whenever you’re ready.':'You have reviewed every question in this session. Revisit anything that still needs a little work.'}</p><div class="summary-box"><span class="section-icon" style="margin:auto">${s?.icon||'✧'}</span><h2>${missing.length?'A good point to pause.':'Every question, considered.'}</h2><div class="summary-stats"><div><strong>${st.done}<small style="font-size:16px">/${st.total}</small></strong><span>reviewed</span></div><div><strong>${st.confident}</strong><span>confident</span></div><div><strong>${st.weak}</strong><span>to revisit</span></div></div><div class="summary-actions">${missing.length?`<button class="button primary" data-resume-index="${ss.ids.indexOf(missing[0])}">Continue unanswered ${icon('arrow')}</button>`:''}${st.weak?'<button class="button secondary" data-action="review-session">Practice weak answers</button>':''}<a href="#home" class="button secondary">Back to study room</a></div></div><div class="notice">${ss.ids.filter(id=>questionMap[id].kind==='mcq'&&response(id).checked).length} quiz answers checked. Written responses use your confidence ratings. These counts measure study progress and do not calculate an official game grade.</div><h2 style="font:25px Georgia,serif;margin:30px 0 20px">This session’s questions</h2><div class="question-list">${ss.ids.map((id,i)=>row(questionMap[id],`#session/${ss.mode==='section'?ss.section:'practice'}/${i}`)).join('')}</div>`;
  const hash=ss.start+'|'+st.done; if(ss.recorded!==hash){ss.recorded=hash;state.history.push({date:new Date().toISOString(),section:s?.name||'Practice',count:st.total,reviewed:st.done,mode:ss.mode});state.history=state.history.slice(-30);save();}
}
function row(q,href){const r=response(q.id),complete=done(q),w=weak(q);return `<a class="coverage-row" href="${href||'#question/'+q.id}"><span class="row-status ${w?'weak':complete?'completed':''}" aria-label="${w?'Needs review':complete?'Reviewed':hasAnswer(q)?'Draft':'Not answered'}">${w?'↻':complete?'✓':hasAnswer(q)?'·':''}</span><span class="row-info"><strong>${esc(q.label.trim())}</strong><small>${esc(sectionMap[q.section].name)} · ${esc(q.source)} · ${FORMAT[q.kind]}${q.origin!=='rubric'?' · '+(q.origin==='oral'?'Authored substitute':'Project detail'):''}${r.bookmarked?' · Bookmarked':''}</small></span>${icon('arrow')}</a>`;}
function renderCoverage(){
  currentQ=null;setCrumb('Rubric coverage');
  $('#main').innerHTML=`<div class="eyebrow">NOTHING LOST BETWEEN SECTIONS</div><h1 class="page-title">Every criterion, accounted for.</h1><p class="page-intro">All 330 scored feature rows are mapped directly to questions. Four blank oral slots and 31 additional project details have their own labeled practice prompts.</p><div class="list-toolbar"><label class="sr-only" for="coverage-search">Search requirements</label><input id="coverage-search" type="search" placeholder="Search a requirement, code file, or workbook cell…" value="${esc(coverageText)}"><label class="sr-only" for="coverage-section">Filter section</label><select id="coverage-section"><option value="all">All sections</option>${data.sections.map(s=>`<option value="${s.id}" ${coverageSection===s.id?'selected':''}>${esc(s.name)}</option>`).join('')}</select><label class="sr-only" for="coverage-status">Filter status</label><select id="coverage-status">${[['all','All questions'],['rubric','Rubric criteria only'],['extra','Oral & project details'],['unanswered','Not reviewed yet'],['done','Reviewed'],['weak','Needs practice']].map(([k,label])=>`<option value="${k}" ${coverageStatus===k?'selected':''}>${label}</option>`).join('')}</select></div><p class="field-help" id="coverage-count"></p><div id="coverage-list" style="margin-top:20px"></div>`;
  renderCoverageList();
}
function matchesQuery(q,value){return `${q.label} ${q.prompt} ${q.group} ${q.source} ${q.code||''} ${sectionMap[q.section].name}`.toLowerCase().includes(value.toLowerCase());}
function renderCoverageList(){
  const questions=data.questions.filter(q=>(coverageSection==='all'||q.section===coverageSection)&&matchesQuery(q,coverageText)&&(coverageStatus==='all'||coverageStatus==='rubric'&&q.origin==='rubric'||coverageStatus==='extra'&&q.origin!=='rubric'||coverageStatus==='unanswered'&&!done(q)||coverageStatus==='done'&&done(q)||coverageStatus==='weak'&&weak(q)));
  $('#coverage-count').textContent=`${questions.length} matching questions · ${questions.filter(q=>q.origin==='rubric').length} exact rubric rows`;
  $('#coverage-list').innerHTML=data.sections.map(s=>{const qs=questions.filter(q=>q.section===s.id);if(!qs.length)return '';return `<details class="coverage-group" ${coverageText||coverageSection!=='all'?'open':''}><summary><span><h2>${esc(s.name)}</h2><p>${s.rubricCount} workbook criteria · ${s.extrasCount} additional prompts</p></span><span class="summary-count">${qs.filter(done).length} / ${qs.length} reviewed ＋</span></summary>${qs.map(q=>row(q)).join('')}</details>`;}).join('')||'<div class="empty"><h2>No matching questions.</h2><p>Try a different search or status filter.</p></div>';
}
function renderReview(){
  currentQ=null;setCrumb('Review notebook');const questions=data.questions.filter(q=>reviewTab==='weak'?weak(q):reviewTab==='bookmarks'?response(q.id).bookmarked:drafted(q)&&!done(q));
  $('#main').innerHTML=`<div class="eyebrow">A SECOND PASS MAKES IT CLEARER</div><h1 class="page-title">Your review notebook.</h1><p class="page-intro">Keep the tricky ideas close. Incorrect quiz answers and written answers rated “Needs practice” or “Getting there” appear here automatically.</p><div class="filterbar"><div class="chips" role="group" aria-label="Review filters">${[['weak','Needs practice'],['bookmarks','Bookmarked'],['drafts','Unfinished drafts']].map(([k,label])=>`<button class="chip ${reviewTab===k?'selected':''}" data-review-tab="${k}" aria-pressed="${reviewTab===k}">${label} <span class="muted">${data.questions.filter(q=>k==='weak'?weak(q):k==='bookmarks'?response(q.id).bookmarked:drafted(q)&&!done(q)).length}</span></button>`).join('')}</div>${questions.length?'<button class="button primary" data-action="start-review">Practice these questions '+icon('arrow')+'</button>':''}</div><div class="question-list">${questions.length?questions.map(q=>row(q)).join(''):`<div class="empty"><span class="section-icon" style="margin:0 auto 20px">${reviewTab==='bookmarks'?'♧':'✓'}</span><h2>${reviewTab==='weak'?'A fresh page.':reviewTab==='bookmarks'?'Keep an idea for later.':'No unfinished answers.'}</h2><p>${reviewTab==='weak'?'Answer questions in a session. Anything you want to practice again will find a home here.':reviewTab==='bookmarks'?'Use “Save for review” on any question to collect it here.':'Drafts are saved while you type. Compare your answer and choose a confidence rating to finish it.'}</p><a href="#home" class="button primary">Explore your sessions ${icon('arrow')}</a></div>`}</div>`;
}
function renderProgress(){
  currentQ=null;setCrumb('My progress');const st=stats(data.questions.map(q=>q.id)),rubric=data.questions.filter(q=>q.origin==='rubric');
  $('#main').innerHTML=`<div class="eyebrow">YOUR LEARNING, AT A GLANCE</div><h1 class="page-title">One explanation at a time.</h1><p class="page-intro">Reviewed means a checked quiz or a written answer with your confidence rating. Progress stays in this browser; export a backup to move it to another device.</p><div class="stats-row"><div class="stat"><strong>${st.done}</strong><span>questions reviewed<br>of ${st.total}</span></div><div class="stat"><strong>${rubric.filter(done).length}</strong><span>rubric criteria<br>of 330</span></div><div class="stat"><strong>${st.confident}</strong><span>answers you<br>can explain</span></div><div class="stat"><strong>${st.weak}</strong><span>questions<br>to revisit</span></div></div><div class="page-top-actions"><button class="button primary" data-action="export">${icon('save')} Export answers</button><button class="button secondary" data-action="import">Import backup</button><button class="button secondary" data-action="report">Download study notes</button></div><p class="import-note">Backups are JSON files. Import merges known question answers into this browser; matching IDs are replaced. Your existing answers are automatically downloaded first.</p><div class="progress-table"><div class="progress-row head"><span>STUDY SESSION</span><span>PROGRESS</span><span>REVIEWED</span><span>REVISIT</span></div>${data.sections.map(s=>{const n=stats(s.questionIds);return `<a href="#session/${s.id}" class="progress-row"><span>${esc(s.name)}</span>${bar(n.done,n.total)}<small>${n.done} / ${n.total}</small><small>${n.weak||'—'}</small></a>`;}).join('')}</div><div class="section-heading"><div><h2>Recent check-ins</h2><p>Your most recent session summaries.</p></div></div>${state.history.length?`<div class="question-list">${state.history.slice(-8).reverse().map(h=>`<div class="coverage-row"><span class="row-info"><strong>${esc(h.section)}</strong><small>${esc(formatDate(h.date))} · ${h.reviewed} of ${h.count} reviewed</small></span></div>`).join('')}</div>`:'<p class="page-intro">Finish or pause a session using “Session summary” to record a check-in.</p>'}<div class="notice">The scoring workbook’s recorded grades are separate from this study tracker. No practice result changes your workbook or your game.</div>`;
}
function formatDate(date){try{return new Intl.DateTimeFormat(undefined,{dateStyle:'medium',timeStyle:'short'}).format(new Date(date));}catch{return '';}}
function renderSources(){
  currentQ=null;setCrumb('Sources & coverage');
  $('#main').innerHTML=`<div class="eyebrow">GROUNDED IN YOUR PROJECT</div><h1 class="page-title">The rubric meets your game.</h1><p class="page-intro">The question bank follows your supplied workbook and project brief, with WiSe’s learning guide and current source snapshots beside the explanations.</p><div class="source-grid"><section class="source-card"><h2>Exact workbook coverage</h2><p><strong>${esc(data.source.workbook)}</strong></p><p>All 21 sheets were inspected. Result and Master contain scores and aggregation; the 19 rubric sheets contain 330 scored feature rows. Each has a question and its original worksheet/cell locator.</p><p>Four scored oral slots have no question wording: Overworld!H7/H8 and IUPAC Algorithm!B13/B14. Their practice substitutes are explicitly labeled. No examiner wording is invented.</p><a class="text-link" href="#coverage">Inspect the complete mapping ${icon('arrow')}</a></section><section class="source-card"><h2>Project-specific practice</h2><p>The 71-page <strong>TPA Game 26-2 — ReaLm of WiSdom</strong> brief supplies the detailed behavior behind the rubric labels. Another 31 prompts cover catalogs, boundary values, key placement, input, unlocks, and the additional overworld requirements from AGENTS.md.</p><p>40 handwritten multiple-choice questions check understanding. Other questions ask for explanations, quick recall, or demonstration plans. Written responses are self-reviewed.</p></section><section class="source-card"><h2>Keep the requirements honest</h2><ul><li>Current PoolBoatContent creates a glide cliff and summit chest. The required boat with a chest on deck is unmet.</li><li>Water walking uses the rock clip. The required distinct fourth walking sound is unmet.</li><li>Rain/blossom weather, title model animations, and some dungeon NPC distribution need direct verification.</li></ul><p>The shoreline, Terrain prefabs, WFC, seeds, 5×5 pools, and gameplay surface rules remain the expected behavior. This website changes no Unity game code.</p><a class="text-link" href="library/?doc=Features%2F30-verification-and-gaps.md" target="_blank" rel="noopener">Read the known gaps ${icon('external')}</a></section><section class="source-card"><h2>Read beside the answer</h2><p>The connected library includes the feature chapters, exact rubric checklists, asset values, controls, and C# source reader. Guide text is dated ${esc(data.source.guideDate)}. Source file snapshots were refreshed ${esc(data.source.codeDate)}.</p><p>Source review explains mechanisms. It does not replace a Unity build, profiler measurement, or live demonstration. Use each question’s observation field or personal notes to record fresh evidence.</p><a class="text-link" href="library/" target="_blank" rel="noopener">Open the complete game library ${icon('external')}</a></section></div><div class="notice">Answers, confidence ratings, and bookmarks save to this browser’s local storage. There is no server grading or cross-device synchronization. Export a backup from My progress whenever you need a portable copy.</div>`;
}
function renderNotFound(){$('#main').innerHTML='<div class="empty"><h1>That session could not be found.</h1><a class="button primary" href="#home">Back to your study room</a></div>';}
function route(){
  closeMobile();currentQ=null;const parts=(location.hash||'#home').slice(1).split('/');
  if(parts[0]==='main'){$('#main').focus();return;}
  switch(parts[0]){
    case 'home':renderHome();break;
    case 'session':loadSession(parts);break;
    case 'question':{const q=questionMap[parts[1]];if(!q){renderNotFound();break;}const s=sectionMap[q.section],i=s.questionIds.indexOf(q.id);startSession(s.id,s.questionIds,'section',i);return;}
    case 'coverage':renderCoverage();break;
    case 'review':renderReview();break;
    case 'progress':renderProgress();break;
    case 'summary':renderSummary();break;
    case 'sources':renderSources();break;
    default:renderNotFound();
  }
  renderNav();window.scrollTo({top:0,behavior:'instant'});$('#main').focus({preventScroll:true});
}
function confirmAction(title,text,callback){
  $('#confirm-title').textContent=title;$('#confirm-text').textContent=text;$('#confirm-action').onclick=()=>{$('#confirm-dialog').close();callback();};$('#confirm-dialog').showModal();
}
function download(name,text,type='application/json'){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportBackup(prefix='wise-study-backup'){download(prefix+'-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify({app:'wise-study-room',exported:new Date().toISOString(),...state},null,2));}
function exportReport(){
  let text='# WiSe — My study notes\n\nExported '+new Date().toISOString()+'\n\n';
  for(const s of data.sections){text+='## '+s.name+'\n\n';for(const id of s.questionIds){const q=questionMap[id],r=response(id);if(!drafted(q)&&!r.notes)continue;text+='### '+q.label.trim()+'\n\n'+q.source+' · '+FORMAT[q.kind]+'\n\n'+q.prompt+'\n\n';if(q.kind==='mcq')text+='My choice: '+(q.options[r.choice]||'Unanswered')+'\n\n'+(r.checked?'Correct answer: '+q.options[q.correct]+'\n\n':'');else if(q.kind==='demo')for(const k of ['setup','steps','expected','observed'])text+=k+': '+(r.demo?.[k]||'')+'\n\n';else text+=(r.text||'')+'\n\n';if(r.notes)text+='Notes: '+r.notes+'\n\n';if(r.rating)text+='Self-rating: '+['','Needs practice','Getting there','Can explain it'][r.rating]+'\n\n';}}
  download('wise-study-notes.md',text,'text/markdown');toast('Your study notes were downloaded.');
}
function renderSearch(){
  const value=$('#search-input').value.trim();const qs=value?data.questions.filter(q=>matchesQuery(q,value)).slice(0,45):[];
  $('#search-results').innerHTML=value?(qs.length?qs.map(q=>row(q)).join(''):'<p class="no-results">No matching questions. Try a broader term.</p>'):'<p class="no-results">Search every rubric criterion and project detail.</p>';
}
document.addEventListener('click',e=>{
  if(e.target.closest('.skip-link')){e.preventDefault();$('#main').focus();return;}
  const close=e.target.closest('[data-close-dialog]');if(close){$('#'+close.dataset.closeDialog).close();return;}
  const family=e.target.closest('[data-family]');if(family){activeFilter=family.dataset.family;document.querySelectorAll('[data-family]').forEach(b=>{b.classList.toggle('selected',b===family);b.setAttribute('aria-pressed',String(b===family));});renderCards();return;}
  const jump=e.target.closest('[data-index]');if(jump){goQuestion(Number(jump.dataset.index));return;}
  const resume=e.target.closest('[data-resume-index]');if(resume){activeIds=state.session.ids;goQuestion(Number(resume.dataset.resumeIndex));return;}
  const rating=e.target.closest('[data-rating]');if(rating&&currentQ){const y=window.scrollY;record(currentQ.id).rating=Number(rating.dataset.rating);save();renderQuestion();renderNav();window.scrollTo(0,y);toast('Confidence saved.');return;}
  const tab=e.target.closest('[data-review-tab]');if(tab){reviewTab=tab.dataset.reviewTab;renderReview();return;}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action)switch(action){
    case 'mixed':mixed();break;
    case 'check':checkAnswer();break;
    case 'bookmark':{const r=record(currentQ.id);r.bookmarked=!r.bookmarked;save();const y=window.scrollY;renderQuestion();window.scrollTo(0,y);toast(r.bookmarked?'Saved in your review notebook.':'Removed from bookmarks.');break;}
    case 'prev':goQuestion(currentIndex-1);break;
    case 'next':if(currentIndex===activeIds.length-1)navigate('#summary');else goQuestion(currentIndex+1);break;
    case 'summary':navigate('#summary');break;
    case 'fresh':{const s=sectionMap[currentQ.section];confirmAction('Start a fresh '+s.name+' attempt?','Your current answers for this section will be downloaded as a backup before this section is cleared. Other sections keep their progress.',()=>{exportBackup('wise-before-new-attempt');for(const id of s.questionIds)delete state.answers[id];startSession(s.id,s.questionIds);});break;}
    case 'review-session':{const ids=state.session.ids.filter(id=>weak(questionMap[id]));if(ids.length)startSession(null,ids,'review');break;}
    case 'start-review':{const ids=data.questions.filter(q=>reviewTab==='weak'?weak(q):reviewTab==='bookmarks'?response(q.id).bookmarked:drafted(q)&&!done(q)).map(q=>q.id);if(ids.length)startSession(null,ids,'review');break;}
    case 'export':exportBackup();toast('Your answer backup was downloaded.');break;
    case 'import':$('#import-file').click();break;
    case 'report':exportReport();break;
  }
  const link=e.target.closest('a[href^="#"]');if(link){$('#search-dialog').close();if(link.hash===location.hash&&link.hash.startsWith('#session/')){e.preventDefault();route();}}
});
document.addEventListener('input',e=>{
  const el=e.target;
  if(el.id==='session-filter'){filterText=el.value;renderCards();}
  if(el.id==='coverage-search'){coverageText=el.value;renderCoverageList();}
  if(el.id==='search-input')renderSearch();
  if(el.dataset.answer&&currentQ){const r=record(currentQ.id),path=el.dataset.answer;if(path.startsWith('demo.')){r.demo=r.demo||{};r.demo[path.slice(5)]=el.value;}else r[path]=el.value;if(path!=='notes'){r.checked=false;r.rating=null;$('#feedback')?.remove();refreshDraftProgress();}r.updated=new Date().toISOString();save();}
});
document.addEventListener('change',e=>{
  const el=e.target;if(el.id==='coverage-section'){coverageSection=el.value;renderCoverageList();}if(el.id==='coverage-status'){coverageStatus=el.value;renderCoverageList();}
  if(el.name==='choice'&&currentQ){const r=record(currentQ.id);r.choice=Number(el.value);r.checked=false;r.rating=null;r.updated=new Date().toISOString();save();$('#feedback')?.remove();document.querySelectorAll('.choice').forEach(n=>n.classList.remove('correct','incorrect'));refreshDraftProgress();}
  if(el.dataset.checkpoint!==undefined&&currentQ){const r=record(currentQ.id),n=Number(el.dataset.checkpoint);r.checks=[...new Set([...(r.checks||[]).filter(i=>i!==n),...(el.checked?[n]:[])])];save();}
});
$('#import-file').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;
  try{
    if(file.size>8_000_000)throw new Error('This backup is too large.');const parsed=JSON.parse(await file.text());
    if(parsed.app!=='wise-study-room'||parsed.version!==1||!parsed.answers||typeof parsed.answers!=='object'||Array.isArray(parsed.answers))throw new Error('Choose a WiSe study-room backup exported by this website.');
    const imported=sanitizeState(parsed),known=Object.keys(imported.answers).length;if(!known)throw new Error('The backup has no recognized question answers.');
    confirmAction('Import '+known+' saved answers?','Matching question IDs will be replaced. A backup of your current answers will download before the import.',()=>{exportBackup('wise-before-import');state.answers={...state.answers,...imported.answers};save();route();toast('Backup imported. Your answers are ready.');});
  }catch(err){toast(err.message||'The backup could not be read.');}finally{e.target.value='';}
});
$('#menu-button').addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');$('#menu-button').setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(document.body.classList.contains('menu-open')&&!e.target.closest('#sidebar,#menu-button'))closeMobile();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobile();if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();$('#search-dialog').showModal();$('#search-input').focus();renderSearch();}});
$('#search-button').addEventListener('click',()=>{$('#search-dialog').showModal();$('#search-input').focus();renderSearch();});
window.addEventListener('hashchange',()=>{if(data)route();});
async function init(){
  try{
    const res=await fetch('questions.json');if(!res.ok)throw new Error('Question bank unavailable');data=await res.json();questionMap=Object.fromEntries(data.questions.map(q=>[q.id,q]));sectionMap=Object.fromEntries(data.sections.map(s=>[s.id,s]));let raw;try{raw=JSON.parse(localStorage.getItem(KEY)||'null');}catch{}state=sanitizeState(raw);route();
  }catch(err){$('#main').innerHTML='<div class="empty"><h1>The study room could not load.</h1><p>The question bank may be unavailable. Reload the page. For local use, serve the dist folder over HTTP instead of opening index.html directly.</p><button class="button primary" onclick="location.reload()">Reload page</button></div>';console.error(err);}
}
init();
