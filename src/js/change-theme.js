/*=============== CHANGE THEME ===============*/
const themeButton = document.getElementById('theme-button');
const sectionLogos = document.querySelectorAll('.logo');
const sectionMenus = document.querySelectorAll('.menu__img');
//We save de Classes
const darkTheme = 'dark-theme';
const iconTheme = 'change-icon-theme';
const logos = ['change-logo', 'change-logo-footer'];
const foodMenus = ['change-menu-1', 'change-menu-2', 'change-menu-3', 'change-menu-4'];

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : ''
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');

// We validate if the user previously chose a topic
// If the validation is fulfilled, we ask what the issue was to know if we activated
if (selectedTheme == 'dark'){
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
  sectionLogos.forEach((section, index) => section.classList.add(logos[index]));
  sectionMenus.forEach((section, index) => section.classList.add(foodMenus[index]));
}


// Activate / desactivate the theme manually width the button
themeButton.addEventListener('click', () =>{
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  sectionLogos.forEach((section, index) => section.classList.toggle(logos[index]));
  sectionMenus.forEach((section, index) => section.classList.toggle(foodMenus[index]));

  // We save theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
})