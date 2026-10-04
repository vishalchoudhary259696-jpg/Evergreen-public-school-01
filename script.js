const PAGES=[['index.html','Home'],['about.html','About'],['academics.html','Academics'],['facilities.html','Facilities'],['gallery.html','Gallery'],['contact.html','Contact']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap nav"><a class="brand" href="index.html"><img src="assets/logo.png" alt="EGPS logo"><span>Evergreen Sr. Sec. School<small>Chandwas</small></span></a><button class="burger" aria-label="Menu">☰</button><nav><ul>${PAGES.map(([h,n])=>`<li><a href="${h}" class="${h==cur?'on':''}">${n}</a></li>`).join('')}<li><a class="cta" href="admissions.html">Apply for admission</a></li></ul></nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div><h3>Evergreen Sr. Sec. School</h3><p>Be Smart, Stay Evergreen. Education that grows with every child.</p><p>Chandwas · [Add phone] · [Add email]</p></div><div><h3>Explore</h3>${PAGES.map(([h,n])=>`<a href="${h}">${n}</a>`).join('')}</div><div><h3>Admissions</h3><a href="admissions.html">How to apply</a><a href="contact.html">Visit the campus</a></div></div><p class="copy">© ${new Date().getFullYear()} Evergreen Sr. Sec. School, Chandwas</p></footer><div id="lb"><img alt=""></div>`);
document.querySelector('.burger').onclick=()=>document.querySelector('nav').classList.toggle('open');
// welcome intro: once per session
const intro=document.getElementById('intro');
if(intro){if(sessionStorage.getItem('egps')){intro.remove()}else{setTimeout(()=>intro.classList.add('go'),2000);setTimeout(()=>intro.remove(),3100);sessionStorage.setItem('egps',1)}}
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// stat counters
document.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n;new IntersectionObserver(([e],o)=>{if(!e.isIntersecting)return;o.disconnect();let t0;const f=t=>{t0??=t;const p=Math.min((t-t0)/1500,1);el.textContent=Math.floor(n*p)+(el.dataset.s||'');p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}).observe(el)});
// image fallback + lightbox
document.querySelectorAll('img[src^="http"]').forEach(i=>i.onerror=()=>{i.style.background='linear-gradient(135deg,#0e5a35,#6fae3c)';i.removeAttribute('src');i.style.minHeight='180px'});
const lb=document.getElementById('lb');document.querySelectorAll('.gal img').forEach(i=>i.onclick=()=>{lb.firstChild.src=i.src;lb.classList.add('on')});lb.onclick=()=>lb.classList.remove('on');
document.querySelectorAll('form').forEach(f=>f.onsubmit=e=>{e.preventDefault();f.innerHTML='<h3>Thank you. We will call you back soon.</h3>'});
