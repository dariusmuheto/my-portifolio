export function setupHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  
  if (!header) return;
  
  let ticking = false;
  
  const updateHeader = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    ticking = false;
  };
  
  const requestTick = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', requestTick);
  updateHeader(); // Initial check
}