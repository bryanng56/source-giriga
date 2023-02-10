/*=============== SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher then 350 viewport height, add the show-scroll class to the a tag wuth the scrollup
    window.scrollY >= 350 ? scrollUp.classList.add('show-scrollup') : scrollUp.classList.remove('show-scrollup');
  }
  
  window.addEventListener('scroll', scrollUp);