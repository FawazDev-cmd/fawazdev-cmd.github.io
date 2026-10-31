(function(){const toggle=document.querySelector('.menu'),menu=document.querySelector('.navlinks'),menuIcon=toggle?.querySelector('i'),menuLabel=toggle?.querySelector('.sr');function closeMenu(){if(!toggle||!menu)return;toggle.setAttribute('aria-expanded','false');menu.classList.remove('open');document.body.classList.remove('menu-open');menuIcon?.classList.replace('fa-xmark','fa-bars');if(menuLabel)menuLabel.textContent='Open navigation menu'}if(toggle&&menu){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);menuIcon?.classList.toggle('fa-bars',!open);menuIcon?.classList.toggle('fa-xmark',open);if(menuLabel)menuLabel.textContent=open?'Close navigation menu':'Open navigation menu'});menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();toggle.focus()}});addEventListener('resize',()=>{if(innerWidth>768)closeMenu()})}const navLinks=[...document.querySelectorAll('.navlinks a')];if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;navLinks.forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id))})},{rootMargin:'-35% 0px -55%',threshold:0});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section))}const counters=document.querySelectorAll('.counter');const format=(element,value)=>(element.dataset.prefix||'')+Math.round(value).toLocaleString('en-US');const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced||typeof gsap==='undefined'||typeof ScrollTrigger==='undefined'){counters.forEach(element=>element.textContent=format(element,+element.dataset.ceil));return}gsap.registerPlugin(ScrollTrigger);gsap.from('.hero-copy>*',{opacity:0,y:18,duration:.65,stagger:.07,ease:'power2.out'});gsap.from('.portrait-wrap',{opacity:0,y:18,duration:.7,delay:.12,ease:'power2.out'});document.querySelectorAll('.section').forEach(section=>gsap.from(section,{scrollTrigger:{trigger:section,start:'top 88%',once:true},opacity:0,y:18,duration:.6,ease:'power2.out'}));counters.forEach(element=>{const target=+element.dataset.ceil,state={value:0};gsap.to(state,{scrollTrigger:{trigger:element,start:'top 90%',once:true},value:target,duration:1,ease:'power1.out',onUpdate:()=>element.textContent=format(element,state.value),onComplete:()=>element.textContent=format(element,target)})})})();

// Manual navigation keeps projects still while visitors read or follow links.
(function () {
  const viewport = document.querySelector('.project-carousel');
  const track = viewport?.querySelector('.project-track');
  const previous = document.querySelector('.carousel-button.prev');
  const next = document.querySelector('.carousel-button.next');
  if (!viewport || !track || !previous || !next) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function updateControls() {
    const maximum = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    previous.disabled = viewport.scrollLeft <= 2;
    next.disabled = viewport.scrollLeft >= maximum - 2;
  }
  function move(direction) {
    const card = track.querySelector('.project');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const maximum = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const left = Math.max(0, Math.min(maximum,
      viewport.scrollLeft + direction * (card.getBoundingClientRect().width + gap)));
    viewport.scrollTo({ left, behavior: reduced ? 'auto' : 'smooth' });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  viewport.addEventListener('keydown', event => {
    if (event.target !== viewport) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  viewport.addEventListener('scroll', updateControls, { passive: true });
  addEventListener('resize', updateControls);
  updateControls();
})();
