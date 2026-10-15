'use strict';
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const docURL = (path, anchor='') => '?doc='+encodeURIComponent(path)+(anchor?'#'+encodeURIComponent(anchor):'');
const fileURL = (path, line=0) => '?file='+encodeURIComponent(path)+(line?'&line='+line+'#line-'+line:'');
const groupURL = group => '?view=library&group='+encodeURIComponent(group);
const main = $('#main');
let library, routeSerial=0, observer, activeDoc, activeFile, toastTimer;
let state = {};
try { state=JSON.parse(localStorage.getItem('wise-library-v1')||'{}'); } catch {}
state={done:[],bookmarks:[],recent:[],checks:{},font:17,theme:'light',...state};
if(!state.checks||typeof state.checks!=='object')state.checks={};
if(!Array.isArray(state.done))state.done=[];
if(!Array.isArray(state.bookmarks))state.bookmarks=[];
if(!Array.isArray(state.recent))state.recent=[];
const persist = () => {try{localStorage.setItem('wise-library-v1',JSON.stringify(state));}catch{}};
const cache = new Map();
const labels={chapters:'Feature chapters',essentials:'Getting oriented',rubric:'Workbook checklists',scripts:'Script reference',code:'C# source',assets:'Asset snapshots'};
const symbols=['◇','↗','▦','⌁','♧','◌'];
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3000);}
function applyPreferences(){document.documentElement.dataset.theme=state.theme;document.documentElement.style.setProperty('--article-size',state.font+'px');$('#theme-toggle').setAttribute('aria-label',state.theme==='dark'?'Switch to light theme':'Switch to dark theme');}
applyPreferences();
function chapterByNumber(n){return library.documents.find(d=>d.category==='chapters'&&d.number===n);}
function navigate(url){history.pushState(null,'',url);closeMobile();$('#search-dialog').close();route();}
function closeMobile(){document.body.classList.remove('menu-open');$('#mobile-toggle').setAttribute('aria-expanded','false');}
function navItem(label,href,icon,active,count){return `<a href="${esc(href)}" class="nav-item${active?' active':''}" ${active?'aria-current="page"':''}><span class="nav-icon" aria-hidden="true">${icon}</span><span>${label}</span>${count!==undefined?`<span class="nav-count">${count}</span>`:''}</a>`;}
function renderNavigation(){
  const q=new URLSearchParams(location.search), view=q.get('view')||(!q.has('doc')&&!q.has('file')?'home':''), category=q.get('category'), group=q.get('group');
  $('#navigation').innerHTML=`<p class="nav-label">YOUR LIBRARY</p>`+
    navItem('Overview','?view=home','▧',view==='home')+
    navItem('Learning path',docURL('00-learning-path.md'),'↗',q.get('doc')==='00-learning-path.md')+
    navItem('All chapters','?view=library&category=chapters','▤',view==='library'&&category==='chapters'&&!group,32)+
    `<div class="nav-course">${library.groups.map(g=>`<a href="${groupURL(g.id)}" class="${group===g.id?'active':''}">${esc(g.title)}</a>`).join('')}</div>`+
    navItem('My progress','?view=progress','◔',view==='progress',state.done.filter(p=>p.startsWith('Features/')).length+'/32')+
    `<p class="nav-label">KEEP WITHIN REACH</p>`+
    navItem('Controls',docURL('01-controls.md'),'⌘',q.get('doc')==='01-controls.md')+
    navItem('Workbook & rubric','?view=library&category=rubric','☷',view==='library'&&category==='rubric',19)+
    navItem('Browse the scripts','?view=library&category=code','⌥',view==='library'&&category==='code',226)+
    navItem('Glossary',docURL('05-glossary.md'),'Aa',q.get('doc')==='05-glossary.md')+
    navItem('Known gaps',docURL('Features/30-verification-and-gaps.md'),'△',q.get('doc')==='Features/30-verification-and-gaps.md');
}
function breadcrumbs(section,detail){$('#breadcrumbs').innerHTML=`Library <span>/</span> ${esc(section)}${detail?` <span>/</span> <strong>${esc(detail)}</strong>`:''}`;}
function docCard(d){return `<a class="document-card" href="${docURL(d.path)}"><div class="doc-label"><span>${d.number!==undefined?'CHAPTER '+d.number:esc(labels[d.category])}</span><span>${state.done.includes(d.path)?'✓ Read':d.minutes+' MIN READ'}</span></div><h2>${esc(d.title)}</h2><p>${esc(cleanExcerpt(d.excerpt))}</p><div class="doc-meta"><span>${d.category==='chapters'?esc(library.groups.find(g=>g.id===d.group)?.title||''):esc(d.path)}</span><span style="margin-left:auto">↗</span></div></a>`;}
function cleanExcerpt(text){return String(text).replace(/\[[^\]]*\]\([^)]*\)/g,'').replace(/[`#*_]/g,'').replace(/^Source:.+?\. Sheet.+?\. /,'').slice(0,190);}
function renderHome(){
  breadcrumbs('Overview');document.title='WiSe — Learning Library';
  const last=state.recent.map(p=>library.documents.find(d=>d.path===p)).find(Boolean), next=last||library.documents.find(d=>d.path==='00-learning-path.md');
  let tiles='';for(let y=0;y<9;y++)for(let x=0;x<9;x++){const ring=Math.max(Math.abs(x-4),Math.abs(y-4));tiles+=`<i class="terrain-tile ${ring<=2?'water':ring===3?'sand':(x+y)%3===0?'rock':''}"></i>`;}
  main.innerHTML=`<div class="home"><section class="hero"><div><div class="eyebrow">A FIELD GUIDE TO YOUR GAME</div><h1>Understand the game.<br><em>Read the code.</em></h1><p class="hero-description">Your WiSe notes, brought together. Follow a feature from what the player sees to the scripts that make it happen.</p><div class="hero-buttons"><a class="button primary" href="${docURL('00-learning-path.md')}">Start learning <span>↗</span></a><a class="button secondary" href="?view=library&category=chapters">Explore the chapters <span>→</span></a></div></div><div class="hero-illustration" aria-label="A 5 by 5 water pool surrounded by sand, then grass and rock"><span class="tile-label">One seed. A whole world.</span><span class="illustration-note">WFC / 5 × 5</span><div class="tile-grid">${tiles}</div><span class="illustration-caption">A LITTLE ORDER IN THE RANDOM</span></div></section><div class="stats-row"><div class="stat"><strong>32</strong><span>feature chapters</span></div><div class="stat"><strong>226</strong><span>linked scripts</span></div><div class="stat"><strong>19</strong><span>rubric checklists</span></div></div><div class="section-title"><div><h2>${last?'Pick up where you left off':'A good place to begin'}</h2><p>${last?'Keep following the thread.':'A simple route through the systems, one chapter at a time.'}</p></div><a class="text-link" href="?view=progress">My progress <span>→</span></a></div><div class="reading-card"><span class="reading-icon">▤</span><div><div class="overline">${last?'CONTINUE READING':'YOUR LEARNING PATH'}</div><h3>${esc(next.title)}</h3><p>${next.minutes} minute read <span class="footer-dot">·</span> ${last?esc(labels[next.category]):'Five passes, from player experience to implementation'}</p></div><a class="text-link" href="${docURL(next.path)}">${last?'Continue':'Open the guide'} <span>→</span></a></div><div class="section-title"><div><h2>Follow your curiosity</h2><p>Find the system you want to understand.</p></div><a class="text-link" href="?view=library&category=chapters">All chapters <span>→</span></a></div><section class="course-grid" aria-label="Learning topics">${library.groups.map((g,i)=>{const docs=library.documents.filter(d=>d.group===g.id),done=docs.filter(d=>state.done.includes(d.path)).length;return `<a href="${groupURL(g.id)}" class="course-card"><div class="card-top"><span class="course-symbol">${symbols[i]}</span><span class="chapter-count">${docs.length} chapters</span></div><h3>${esc(g.title)}</h3><p>${esc(g.description)}</p><div class="card-bottom"><span>${done?done+' / '+docs.length+' read':'Explore the topic'} →</span><span class="mini-track"><i style="width:${100*done/docs.length}%"></i></span></div></a>`}).join('')}</section><section class="reference-strip"><div class="reference-card"><span>⌥</span><div><h3>Keep the code beside the explanation</h3><p>Open a linked script, follow a method, and return to the guide. All source copies are included.</p><a href="?view=library&category=code">Browse the source →</a></div></div><div class="reference-card"><span>☷</span><div><h3>Connect it to the scoring checklist</h3><p>Find the exact workbook row and its teaching chapter. Recorded scores stay separate from implementation evidence.</p><a href="?view=library&category=rubric">Open the checklists →</a></div></div></section></div>`;
}
function sourceRow(f){return `<a class="source-row" href="${fileURL(f.path)}"><span class="file-type">${f.language==='csharp'?'C#':f.language==='yaml'?'YML':'TXT'}</span><span><strong>${esc(f.title)}</strong><small>${esc(f.original)}</small></span><span class="line-count">${f.lines} lines ↗</span></a>`;}
function renderCatalog(){
  const q=new URLSearchParams(location.search), category=q.get('category')||'chapters', group=library.groups.find(g=>g.id===q.get('group'));
  const heading=group?.title||labels[category]||'The library';breadcrumbs('Browse',heading);document.title=heading+' — WiSe';
  const descriptions={chapters:'The player experience, the code flow, and a demonstration for every system.',rubric:'Exact workbook requirements connected to the chapters and scripts that explain them.',code:'The actual C# snapshots from your game. Open any file and follow its line links.',assets:'Saved configuration, input maps, and naming or beatmap files.',essentials:'Your reading path, controls, glossary, and supporting notes.',scripts:'A map of classes, methods, scene attachments, and editor tools.'};
  main.innerHTML=`<div class="catalog"><div class="eyebrow">EXPLORE THE LIBRARY</div><h1>${esc(heading)}</h1><p class="catalog-description">${esc(group?.description||descriptions[category]||'Choose a document.')}</p><div class="catalog-tools"><div class="filters">${['chapters','essentials','rubric','code','assets','scripts'].map(c=>`<a href="?view=library&category=${c}" class="filter${category===c&&!group?' active':''}">${c==='chapters'?'Chapters':c==='essentials'?'Essentials':c==='rubric'?'Rubric':c==='code'?'C# source':c==='assets'?'Assets':'Script map'}</a>`).join('')}</div><label><span class="sr-only">Filter this list</span><input class="catalog-search" id="catalog-search" type="search" placeholder="Filter this list…"></label></div><div id="catalog-results"></div></div>`;
  const results=$('#catalog-results');
  const list=category==='code'||category==='assets'?library.files.filter(f=>f.category===category):library.documents.filter(d=>group?d.group===group.id:d.category===category&&!(category==='rubric'&&d.path.endsWith('/README.md')));
  const show=()=>{const term=$('#catalog-search').value.trim().toLowerCase(),items=list.filter(d=>(d.title+' '+d.path+' '+(d.search||'')).toLowerCase().includes(term));results.className=category==='code'||category==='assets'?'source-list':'document-grid';results.innerHTML=items.length?items.map(d=>category==='code'||category==='assets'?sourceRow(d):docCard(d)).join(''):'<div class="empty">No matches in this section. Try a shorter search or another category.</div>';};
  $('#catalog-search').addEventListener('input',show);show();
}
function slugify(s){return s.toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu,'').replace(/ /g,'-');}
async function loadText(record){if(!cache.has(record.url)){const r=await fetch(record.url);if(!r.ok)throw new Error('The requested file could not be loaded.');cache.set(record.url,await r.text());}return cache.get(record.url);}
function resolveTarget(raw,doc){
  let href;try{href=decodeURIComponent(raw);}catch{href=raw;}
  if(href.startsWith('#'))return {anchor:href.slice(1)};
  if(/^(https?:|mailto:)/i.test(href))return {external:href};
  let [path,anchor='']=href.split('#'),line=0;
  const match=path.match(/^(.*):(\d+)$/);if(match){path=match[1];line=Number(match[2]);}
  path=path.replace(/\\/g,'/');
  if(/^[A-Za-z]:\//.test(path)){
    if(path.startsWith(library.guidePath+'/'))path=path.slice(library.guidePath.length+1);
    else if(path.startsWith(library.projectPath+'/')){
      const original=path.slice(library.projectPath.length+1), f=library.files.find(f=>f.original===original);
      return f?{file:f,line}:{unavailable:path};
    } else return {unavailable:path};
  } else path=decodeURIComponent(new URL(path,'https://content.local/'+doc.path).pathname.replace(/^\//,''));
  const d=library.documents.find(d=>d.path===path);if(d)return {doc:d,anchor};
  const f=library.files.find(f=>f.path===path);if(f)return {file:f,line};
  if(path.endsWith('.zip'))return {download:'WiSe-learning-guide.zip'};
  return {unavailable:path};
}
function processArticle(article,doc){
  article.querySelector('h1')?.remove();
  const first=article.querySelector(':scope > p');
  if(first?.querySelector('a')&&/^\s*(Guide home|Script index)/.test(first.textContent))first.remove();
  const seen=new Map();
  article.querySelectorAll('h2,h3,h4').forEach(h=>{const slug=slugify(h.textContent),n=seen.get(slug)||0;seen.set(slug,n+1);h.id=slug+(n?'-'+n:'');});
  article.querySelectorAll('a[href]').forEach(a=>{
    const result=resolveTarget(a.getAttribute('href'),doc);
    if(result.doc)a.href=docURL(result.doc.path,result.anchor);
    else if(result.file){a.href=fileURL(result.file.path,result.line);a.title='Read the hosted source copy'+(result.line?' at line '+result.line:'');}
    else if(result.anchor){a.href='#'+result.anchor;a.dataset.anchor=result.anchor;}
    else if(result.external){a.href=result.external;a.target='_blank';a.rel='noopener noreferrer';}
    else if(result.download){a.href=result.download;a.download='';}
    else{a.removeAttribute('href');a.href='#source-reference';a.dataset.unavailable=result.unavailable;a.title='Original source reference; not included in the hosted library';}
  });
  article.querySelectorAll('table').forEach(table=>{const wrap=document.createElement('div');wrap.className='table-wrap';wrap.tabIndex=0;wrap.setAttribute('aria-label','Scrollable reference table');table.parentNode.insertBefore(wrap,table);wrap.append(table);});
  article.querySelectorAll('pre').forEach(pre=>{const code=pre.querySelector('code');if(code?.classList.contains('language-csharp'))code.innerHTML=Prism.highlight(code.textContent,Prism.languages.csharp,'csharp');const btn=document.createElement('button');btn.className='copy-snippet';btn.textContent='Copy';btn.addEventListener('click',()=>copyText(code?.textContent||pre.textContent));pre.append(btn);});
  article.querySelectorAll('li').forEach(li=>{if(/^\s*\[ \]/.test(li.textContent)){li.innerHTML=li.innerHTML.replace(/^\s*\[ \]/,'<input type="checkbox" aria-label="Mark this demonstration">');}});
  article.querySelectorAll('input[type="checkbox"]').forEach((input,i)=>{
    const key=doc.path+'|'+i;input.disabled=false;input.checked=!!state.checks[key];
    input.setAttribute('aria-label',input.closest('li')?.textContent.trim()||'Mark this demonstration');
    input.addEventListener('change',()=>{state.checks[key]=input.checked;persist();});
  });
}
async function renderDocument(doc,serial){
  activeDoc=doc;activeFile=null;breadcrumbs(labels[doc.category],doc.title);document.title=doc.title+' — WiSe';
  const raw=await loadText(doc);if(serial!==routeSerial)return;
  state.recent=[doc.path,...state.recent.filter(p=>p!==doc.path)].slice(0,12);persist();
  const done=state.done.includes(doc.path),saved=state.bookmarks.includes(doc.path);
  main.innerHTML=`<div class="reader-layout"><div class="reader-main"><div class="reader-tools"><span class="reader-meta">${doc.number!==undefined?'Chapter '+doc.number+' · ':''}${doc.minutes} min read</span><div class="reader-actions"><button class="tool-button" id="font-smaller" aria-label="Smaller reading text" title="Smaller text">A−</button><button class="tool-button" id="font-larger" aria-label="Larger reading text" title="Larger text">A+</button><button class="tool-button${saved?' selected':''}" id="bookmark" aria-label="${saved?'Remove bookmark':'Bookmark this guide'}" title="Bookmark this guide">${saved?'★ Saved':'☆ Save'}</button><button class="tool-button" id="print-doc" title="Print this guide">Print</button></div></div><div class="eyebrow">${doc.category==='chapters'?esc(library.groups.find(g=>g.id===doc.group)?.title):esc(labels[doc.category])}</div><h1 class="reader-title">${esc(doc.title)}</h1><p class="reader-file">${esc(doc.path)}</p><article class="article" id="article"></article><div class="finish-row"><div><h3>Make it your own.</h3><p>${doc.category==='chapters'?'Try the demonstration, then explain the feature in your own words.':'Keep this reference nearby as you follow the features.'}</p></div><button class="button ${done?'secondary':'primary'}" id="mark-read">${done?'✓ Marked as read':'Mark as read'} <span>✓</span></button></div><nav class="reader-pagination" id="reader-pagination" aria-label="Adjacent chapters"></nav></div><aside class="toc" aria-label="On this page"><div class="toc-label">ON THIS PAGE</div><div id="toc-links"></div><div class="toc-footer"><a href="${docURL('01-controls.md')}">⌘ Controls</a><a href="${docURL('05-glossary.md')}">Aa Glossary</a><a href="${doc.url}" download="${esc(doc.path.split('/').pop())}">↓ Download this Markdown</a></div></aside></div>`;
  const article=$('#article');
  article.innerHTML=DOMPurify.sanitize(marked.parse(raw,{gfm:true}),{ALLOWED_URI_REGEXP:/^(?:(?:https?|mailto|tel):|[A-Za-z]:\/|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i});
  processArticle(article,doc);
  const headings=[...article.querySelectorAll('h2,h3')];$('#toc-links').innerHTML=headings.map(h=>`<a href="#${esc(h.id)}" data-anchor="${esc(h.id)}" class="${h.tagName==='H3'?'sub':''}">${esc(h.textContent)}</a>`).join('');
  if(observer)observer.disconnect();
  observer=new IntersectionObserver(entries=>{const item=entries.find(e=>e.isIntersecting);if(item){$('#toc-links').querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.dataset.anchor===item.target.id));}},{rootMargin:'-90px 0px -65% 0px'});headings.forEach(h=>observer.observe(h));
  $('#font-smaller').onclick=()=>{state.font=Math.max(14,state.font-1);applyPreferences();persist();};
  $('#font-larger').onclick=()=>{state.font=Math.min(22,state.font+1);applyPreferences();persist();};
  $('#bookmark').onclick=()=>{const saved=state.bookmarks.includes(doc.path);state.bookmarks=saved?state.bookmarks.filter(p=>p!==doc.path):[...state.bookmarks,doc.path];persist();$('#bookmark').textContent=saved?'☆ Save':'★ Saved';$('#bookmark').classList.toggle('selected',!saved);$('#bookmark').setAttribute('aria-label',saved?'Bookmark this guide':'Remove bookmark');toast(saved?'Bookmark removed':'Guide bookmarked on this browser');};
  $('#mark-read').onclick=()=>{const was=state.done.includes(doc.path);state.done=was?state.done.filter(p=>p!==doc.path):[...state.done,doc.path];persist();$('#mark-read').textContent=was?'Mark as read ✓':'✓ Marked as read';$('#mark-read').className='button '+(was?'primary':'secondary');renderNavigation();toast(was?'Marked as unread':'Reading progress saved');};
  $('#print-doc').onclick=()=>window.print();
  if(doc.category==='chapters'){
    const chapters=library.documents.filter(d=>d.category==='chapters'),i=chapters.findIndex(d=>d.path===doc.path);
    $('#reader-pagination').innerHTML=(chapters[i-1]?`<a href="${docURL(chapters[i-1].path)}"><small>← Previous chapter</small>${esc(chapters[i-1].title)}</a>`:'<div></div>')+(chapters[i+1]?`<a href="${docURL(chapters[i+1].path)}"><small>Next chapter →</small>${esc(chapters[i+1].title)}</a>`:'<a href="?view=progress"><small>You reached the end</small>Review your progress →</a>');
  }
  renderNavigation();
}
async function renderSource(file,serial){
  activeFile=file;activeDoc=null;breadcrumbs(file.language==='csharp'?'Source code':'Asset snapshot',file.title);document.title=file.title+' — WiSe';
  const raw=await loadText(file);if(serial!==routeSerial)return;
  const line=Number(new URLSearchParams(location.search).get('line')||0);
  const related=library.documents.filter(d=>d.search.includes(file.title)&&d.category==='chapters');
  main.innerHTML=`<div class="source-page"><div class="source-header"><div><div class="eyebrow">${file.language==='csharp'?'FOLLOW THE IMPLEMENTATION':'READ THE CONFIGURATION'}</div><h1>${esc(file.title)}</h1><p class="source-path">${esc(file.original)}</p></div><div class="source-buttons"><button class="button secondary" id="copy-code">Copy code</button><a class="button secondary" href="${file.url}" download="${esc(file.title)}">Download</a><button class="button secondary" id="copy-path">Copy project path</button></div></div><p class="code-notice">Source snapshot from your learning guide <span class="footer-dot">·</span> ${file.lines} lines. Click a line number to link directly to it.</p>${related.length?`<section class="related-section"><h2>Learn what this script does</h2><div class="related-links">${related.map(d=>`<a href="${docURL(d.path)}">${esc(d.title)} →</a>`).join('')}</div></section>`:''}<div class="source-code" id="source-code" aria-label="${esc(file.title)} source"></div></div>`;
  const code=$('#source-code');
  code.innerHTML=raw.split('\n').map((text,i)=>{const html=file.language==='csharp'?Prism.highlight(text,Prism.languages.csharp,'csharp'):esc(text);return `<div id="line-${i+1}" class="code-line${line===i+1?' highlight-line':''}"><a class="line-number" data-line="${i+1}" href="${fileURL(file.path,i+1)}" aria-label="Link to line ${i+1}">${i+1}</a><code>${html||' '}</code></div>`;}).join('');
  $('#copy-code').onclick=()=>copyText(raw);$('#copy-path').onclick=()=>copyText(library.projectPath+'/'+file.original);
}
function renderProgress(){
  breadcrumbs('My progress');document.title='My progress — WiSe';
  const chapters=library.documents.filter(d=>d.category==='chapters'),done=chapters.filter(d=>state.done.includes(d.path)),saved=state.bookmarks.map(p=>library.documents.find(d=>d.path===p)).filter(Boolean),next=chapters.find(d=>!state.done.includes(d.path));
  main.innerHTML=`<div class="progress-page"><div class="eyebrow">ONE FEATURE AT A TIME</div><h1>Your reading journey.</h1><p class="catalog-description">A place to keep track of what you've explored. Progress and bookmarks are saved on this browser.</p><div class="progress-summary"><div class="progress-ring" style="--completed:${100*done.length/chapters.length}%"><span>${Math.round(100*done.length/chapters.length)}%</span></div><div><strong>${done.length} of 32 chapters read</strong><p>${next?'Next in chapter order: '+esc(next.title):'All feature chapters marked as read. Revisit a demonstration to check your understanding.'}</p></div></div>${next?`<a class="button primary" href="${docURL(next.path)}">Read the next chapter <span>→</span></a>`:''}<div class="section-title"><h2>Saved for later</h2></div><div class="document-grid">${saved.length?saved.map(docCard).join(''):'<div class="empty">Bookmark a guide with “☆ Save” while reading. It will appear here.</div>'}</div><div class="section-title"><h2>Already explored</h2></div><div class="document-grid">${done.length?done.map(docCard).join(''):'<div class="empty">Open a chapter and choose “Mark as read” when you finish.</div>'}</div></div>`;
}
async function route(){
  if(!library)return;const serial=++routeSerial;const q=new URLSearchParams(location.search);activeDoc=null;activeFile=null;renderNavigation();
  if(observer)observer.disconnect();
  try{
    const path=q.get('doc'),source=q.get('file');
    if(path){const d=library.documents.find(d=>d.path===path);if(!d)throw new Error('That guide is not in this library.');main.innerHTML='<div class="loading">Opening the guide…</div>';await renderDocument(d,serial);}
    else if(source){const f=library.files.find(f=>f.path===source);if(!f)throw new Error('That source file is not in this library.');main.innerHTML='<div class="loading">Opening the source…</div>';await renderSource(f,serial);}
    else if(q.get('view')==='library')renderCatalog();
    else if(q.get('view')==='progress')renderProgress();
    else renderHome();
    if(serial!==routeSerial)return;
    if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({block:'start'}));}
    else window.scrollTo({top:0,behavior:'instant'});
  }catch(error){if(serial!==routeSerial)return;main.innerHTML=`<div class="error-box"><h1>Let's find the right page.</h1><p>${esc(error.message)}</p><a class="button primary" href="?view=home">Back to the library →</a></div>`;}
}
function searchScore(item,query){
  const terms=query.toLowerCase().split(/\s+/).filter(Boolean),title=item.title.toLowerCase(),path=item.path.toLowerCase(),search=(item.search||'').toLowerCase();
  let score=0;for(const term of terms){if(title===term)score+=100;else if(title.includes(term))score+=30;else if(path.includes(term))score+=15;else if(search.includes(term))score+=3;else return 0;}
  if(item.category==='chapters')score+=5;return score;
}
function highlight(text,query){const escaped=esc(text);if(!query.trim())return escaped;const terms=query.split(/\s+/).filter(Boolean).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));return escaped.replace(new RegExp('('+terms.join('|')+')','gi'),'<mark>$1</mark>');}
function runSearch(){
  const query=$('#search-input').value.trim();const results=$('#search-results');
  if(!query){results.innerHTML='<div class="search-status">Search every guide and checklist, plus script names, types, and methods.</div>'+['Features/13-overworld-wfc.md','Features/07-randal-book.md','Features/20-battle-system.md'].map(p=>{const d=library.documents.find(d=>d.path===p);return `<a class="search-result" href="${docURL(p)}"><small>Suggested guide</small><strong>${esc(d.title)}</strong></a>`}).join('');return;}
  const items=[...library.documents,...library.files].map(item=>({item,score:searchScore(item,query)})).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,24);
  results.innerHTML=items.length?items.map(({item})=>{const isFile=!!item.original,href=isFile?fileURL(item.path):docURL(item.path);let excerpt=item.original||cleanExcerpt(item.excerpt);if(!isFile){const at=item.search.toLowerCase().indexOf(query.toLowerCase());if(at>=0)excerpt=(at>40?'…':'')+item.search.slice(Math.max(0,at-40),at+150);}return `<a href="${href}" class="search-result"><small>${esc(labels[item.category])}</small><strong>${highlight(item.title,query)}</strong><p>${highlight(excerpt,query)}</p></a>`;}).join(''):'<div class="search-status">No matches. Try a feature name, a concept, or a shorter method name.</div>';
}
function openSearch(){if(!library)return;const dialog=$('#search-dialog');if(!dialog.open)dialog.showModal();runSearch();$('#search-input').focus();}
async function copyText(text){try{await navigator.clipboard.writeText(text);toast('Copied to clipboard');}catch{toast('Clipboard is unavailable here. Select the text or download the file.');}}
document.addEventListener('click',e=>{
  const a=e.target.closest('a');if(!a)return;
  if(a.dataset.unavailable){e.preventDefault();showSourceReference(a.dataset.unavailable);return;}
  if(a.dataset.anchor){e.preventDefault();const id=a.dataset.anchor;history.replaceState(null,'',location.pathname+location.search+'#'+encodeURIComponent(id));document.getElementById(id)?.scrollIntoView();return;}
  if(a.hasAttribute('download')||a.target==='_blank'||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
  if(a.dataset.line&&activeFile){e.preventDefault();const n=Number(a.dataset.line);history.pushState(null,'',fileURL(activeFile.path,n));$('.highlight-line')?.classList.remove('highlight-line');document.getElementById('line-'+n)?.classList.add('highlight-line');document.getElementById('line-'+n)?.scrollIntoView({block:'center'});return;}
  const url=new URL(a.href,location.href);if(url.origin===location.origin&&url.pathname===location.pathname&&url.search){e.preventDefault();navigate(url.pathname+url.search+url.hash);}
});
function showSourceReference(path){
  const old=$('#source-reference-dialog');old?.remove();const dialog=document.createElement('dialog');dialog.id='source-reference-dialog';dialog.innerHTML=`<div style="padding:28px"><h2 style="font-family:Georgia,serif">Original source reference</h2><p class="muted">This file is referenced by the notes but isn't included in the hosted library. You can locate it in your original project or Downloads folder.</p><p style="font:12px Consolas,monospace;overflow-wrap:anywhere">${esc(path)}</p><div style="display:flex;gap:10px"><button class="button primary" id="copy-reference">Copy path</button><button class="button secondary" id="close-reference">Close</button></div></div>`;document.body.append(dialog);$('#copy-reference').onclick=()=>copyText(path);$('#close-reference').onclick=()=>dialog.close();dialog.showModal();
}
$('#search-open').onclick=openSearch;$('#search-close').onclick=()=>$('#search-dialog').close();$('#search-input').addEventListener('input',runSearch);
$('#search-dialog').addEventListener('click',e=>{if(e.target===$('#search-dialog'))$('#search-dialog').close();});
document.addEventListener('keydown',e=>{
  const typing=/INPUT|TEXTAREA/.test(document.activeElement?.tagName||'');
  if((e.key.toLowerCase()==='k'&&(e.ctrlKey||e.metaKey))||e.key==='/'&&!typing){e.preventDefault();openSearch();}
  if(e.key==='Escape')closeMobile();
  if(e.key==='ArrowDown'&&$('#search-dialog').open&&document.activeElement===$('#search-input')){e.preventDefault();$('#search-results a')?.focus();}
});
$('#theme-toggle').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';applyPreferences();persist();};
$('#mobile-toggle').setAttribute('aria-expanded','false');$('#mobile-toggle').onclick=()=>{const open=document.body.classList.toggle('menu-open');$('#mobile-toggle').setAttribute('aria-expanded',String(open));};$('#mobile-scrim').onclick=closeMobile;
window.addEventListener('popstate',route);
fetch('library.json').then(r=>{if(!r.ok)throw new Error('Library index unavailable.');return r.json();}).then(data=>{library=data;route();}).catch(error=>{main.innerHTML=`<div class="error-box"><h1>The library could not open.</h1><p>${esc(error.message)}</p><p>Try refreshing, or <a href="WiSe-learning-guide.zip" download>download the Markdown library</a>.</p></div>`;});
