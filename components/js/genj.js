window.addEventListener('load', ()=>{
    setTimeout(()=>{ document.getElementById('loader').classList.add('hide'); }, 2200);
  });
  const scroller = document.getElementById('scroller');
  const dots = document.querySelectorAll('#dots span');
  scroller.addEventListener('scroll', ()=>{
    const idx = Math.round(scroller.scrollTop / scroller.clientHeight);
    dots.forEach((d,i)=>d.classList.toggle('on', i===idx));
  });
