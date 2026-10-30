(function(){
  // Every page opens at its top; links to a section (#id) open at that section
  try{history.scrollRestoration='manual'}catch(e){}
  function toStart(){
    var id=location.hash.slice(1), t=id&&document.getElementById(id);
    var de=document.documentElement, old=de.style.scrollBehavior; de.style.scrollBehavior='auto';
    if(t){t.scrollIntoView()}else{window.scrollTo(0,0)}
    de.style.scrollBehavior=old;
  }
  toStart();
  // Some viewers restore the old scroll position a moment after loading; keep the page at its start until the visitor scrolls
  var touched=false;
  ['wheel','touchstart','keydown','mousedown'].forEach(function(ev){window.addEventListener(ev,function(){touched=true},{passive:true,once:true})});
  [0,60,200,500,900].forEach(function(ms){setTimeout(function(){if(!touched)toStart()},ms)});
  window.addEventListener('load',function(){if(!touched)toStart()});
  window.addEventListener('pageshow',function(e){if(e.persisted)toStart()});
  var P={
    phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    msg:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    sparkles:'<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/><path d="M20 3v4M22 5h-4"/>',
    chevDown:'<path d="m6 9 6 6 6-6"/>',chevUp:'<path d="m18 15-6-6-6 6"/>',chevL:'<path d="m15 18-6-6 6-6"/>',chevR:'<path d="m9 18 6-6-6-6"/>',
    arrowR:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    cal:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    calCheck:'<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    grad:'<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    msgHeart:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"/>',
    pin:'<path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    checkC:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',check:'<path d="M20 6 9 17l-5-5"/>',
    book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    compass:'<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.8 5.41a2 2 0 0 1-1.27 1.27L7.76 16.24l1.8-5.41a2 2 0 0 1 1.27-1.27z"/>',
    award:'<path d="m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.59 2.69a.5.5 0 0 1-.81-.47l1.51-8.53"/><circle cx="12" cy="8" r="6"/>',
    userCheck:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/>',
    heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>',
    school:'<path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 3.45 1.72a1 1 0 0 1 .55.9V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.38a1 1 0 0 1 .55-.9L6 10"/><path d="M18 5v17"/><path d="m4 6 7.1-3.55a2 2 0 0 1 1.8 0L20 6"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/>',
    building:'<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    user:'<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    mail:'<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>'
  ,
    lightbulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
    shieldPlain:'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    brain:'<path d="M12 5a3 3 0 1 0-6 .13 4 4 0 0 0-2.52 5.77 4 4 0 0 0 .55 6.59A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 6 .13 4 4 0 0 1 2.52 5.77 4 4 0 0 1-.55 6.59A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/>',
    fileCheck:'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/>',
    trendUp:'<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    images:'<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    phoneCall:'<path d="M13 2a9 9 0 0 1 9 9M13 6a5 5 0 0 1 5 5"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    nav:'<path d="M3 11 22 2l-9 19-2-8Z"/>',
    ext:'<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
  };
  function icons(root){
    (root||document).querySelectorAll('i[data-i]').forEach(function(el){
      var s=document.createElementNS('http://www.w3.org/2000/svg','svg');
      s.setAttribute('viewBox','0 0 24 24');s.setAttribute('aria-hidden','true');
      s.setAttribute('class','i '+(el.className||''));
      s.innerHTML=P[el.dataset.i]||'';
      if(el.getAttribute('style'))s.setAttribute('style',el.getAttribute('style'));
      el.replaceWith(s);
    });
  }
  var esc=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')};
  var D=window.PAGE||{};

  // Skills (home)
  var sk=document.getElementById('skills');
  if(sk&&D.skills){sk.innerHTML=D.skills.map(function(s){
    return '<article class="sk"><div class="top"><span class="chip">'+s[0]+'</span></div><h3>'+esc(s[2])+'</h3><p>'+esc(s[3])+'</p></article>';
  }).join('');}

  // FAQ
  var qs=document.getElementById('qs');
  if(qs&&D.faq){
    var filter=D.faqFilter||'all',open=0;
    var shown=function(){return D.faq.filter(function(f){return filter==='all'||f[0]===filter})};
    var render=function(){
      qs.innerHTML=shown().map(function(f,i){
        var o=i===open, wa=f[0]==='academy'?'923037860046':'923047860046';
        return '<div class="q'+(o?' open':'')+'"><button aria-expanded="'+o+'" data-q="'+i+'"><span class="qn">Q'+(i+1)+'</span><span class="qt">'+esc(f[1])+'</span><span class="chev"><i data-i="chevDown"></i></span></button>'+
          (o?'<div class="a"><p>'+esc(f[2])+'</p><div class="more"><span>Still have questions?</span><a href="https://wa.me/'+wa+'" target="_blank" rel="noopener"><i data-i="msg"></i>Ask via WhatsApp</a></div></div>':'')+'</div>';
      }).join('');
      icons(qs);
    };
    qs.addEventListener('click',function(e){var b=e.target.closest('button[data-q]');if(!b)return;var i=+b.dataset.q;open=open===i?-1:i;render();});
    var ft=document.getElementById('ftabs');
    ft.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.f===filter)});
    ft.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;filter=b.dataset.f;ft.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});open=0;render();});
    render();
  }

  // Gallery filter
  var gt=document.getElementById('gtabs');
  if(gt){gt.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var f=b.dataset.f;
    gt.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    document.querySelectorAll('#gallery-grid .gcard').forEach(function(c){c.hidden=!(f==='all'||c.dataset.cat===f)});});}

  icons();

  // Hero slider (home)
  var slides=[].slice.call(document.querySelectorAll('#slides .slide'));
  if(slides.length){
    var dots=document.getElementById('dots')||document.createElement('div'),counter=document.getElementById('counter')||document.createElement('span'),cur=0,timer;
    slides.forEach(function(_,i){var b=document.createElement('button');b.setAttribute('aria-label','Go to slide '+(i+1));b.onclick=function(){go(i,true)};dots.appendChild(b)});
    var go=function(i,user){cur=(i+slides.length)%slides.length;
      slides.forEach(function(s,k){s.classList.toggle('on',k===cur)});
      [].forEach.call(dots.children,function(d,k){d.classList.toggle('on',k===cur)});
      counter.textContent=String(cur+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
      if(user)start();};
    var start=function(){clearInterval(timer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(function(){go(cur+1)},6500)};
    var pv=document.getElementById('prev'),nx=document.getElementById('next'); if(pv)pv.onclick=function(){go(cur-1,true)}; if(nx)nx.onclick=function(){go(cur+1,true)};
    go(0);start();
  }

  // Mobile nav
  var nav=document.getElementById('nav'),burger=document.getElementById('burger');
  burger.onclick=function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)};
  document.getElementById('menu').addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');burger.setAttribute('aria-expanded','false')}});

  // Inquiry form
  var form=document.getElementById('inq');
  if(form){
    var LINES={school:{num:'923047860046',label:'Proud School WhatsApp line (+92 304 7860046)',name:'Proud School (Village Bhobtian)'},academy:{num:'923037860046',label:'Proud Academy WhatsApp line (+92 303 7860046)',name:'Proud Academy (Main Sher Shah)'}};
    var campus=form.dataset.campus||'school';
    var ps=document.getElementById('pick-school'),pa=document.getElementById('pick-academy'),send=document.getElementById('send'),err=document.getElementById('f-err');
    var F=['f-student','f-parent','f-phone','f-email','f-class','f-q'].map(function(id){return document.getElementById(id)});
    var update=function(){var v=F.map(function(x){return x.value.trim()});
      var msg='*Admission Inquiry — '+LINES[campus].name+'*\n\nStudent Name: '+v[0]+'\nParent / Guardian: '+v[1]+'\nPhone / WhatsApp: '+v[2]+(v[3]?'\nEmail: '+v[3]:'')+'\nClass / Course: '+v[4]+(v[5]?'\n\nQuestions: '+v[5]:'');
      send.href='https://wa.me/'+LINES[campus].num+'?text='+encodeURIComponent(msg);};
    var setCampus=function(c){campus=c;ps.setAttribute('aria-pressed',c==='school');pa.setAttribute('aria-pressed',c==='academy');document.getElementById('wa-line').textContent=LINES[c].label;update();};
    ps.onclick=function(){setCampus('school')};pa.onclick=function(){setCampus('academy')};
    document.querySelectorAll('[data-campus]').forEach(function(a){a.addEventListener('click',function(){setCampus(a.dataset.campus)})});
    F.forEach(function(x){x.addEventListener('input',function(){x.classList.remove('bad');update()})});
    send.addEventListener('click',function(e){var bad=false;[F[0],F[1],F[2],F[4]].forEach(function(x){if(!x.value.trim()){x.classList.add('bad');bad=true}});
      err.hidden=!bad;if(bad){e.preventDefault();(form.querySelector('.bad')||F[0]).focus();}});
    form.addEventListener('submit',function(e){e.preventDefault()});
    setCampus(campus);
  }

  // Opening intro (homepage, once per visit)
  var intro=document.getElementById('intro');
  if(intro){
    var closed=false;
    var close=function(){if(closed)return;closed=true;intro.classList.add('out');document.documentElement.classList.remove('intro-on');
      try{sessionStorage.setItem('proudIntroSeen','1')}catch(e){}
      setTimeout(function(){intro.remove()},800);};
    var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(close, reduce?1200:3600);
  }
  var tt=document.getElementById('totop'); if(tt) tt.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
})();
