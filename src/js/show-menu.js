/*=============== SHOW MENU ===============*/
const nav = document.getElementById('nav-menu');
const toggle = document.getElementById('nav-toggle');
const close = document.getElementById('nav-close');

toggle.addEventListener('click', () =>{
  nav.classList.toggle('show-menu');
}); 

close.addEventListener('click', () =>{
  nav.classList.toggle('show-menu');
});

/*=============== CLOSE OUTSIDE MENU  ===============*/
document.addEventListener('click', (e) => {
  if(e.target.id != nav.id && 
    e.target.classList != 'nav__list' &&
    e.target.id != 'nav-close' && 
    e.target.classList != 'nav__toggle' && 
    e.target.classList != 'nav__toggle-img'){

    nav.classList.remove('show-menu');
    nav.style.transition = 'all .8s';
  }
});