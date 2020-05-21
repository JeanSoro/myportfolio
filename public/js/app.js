const menuBtn = document.getElementsByClassName('hamburger-menu');
const mobileMenu = document.getElementsByClassName('mobile-menu');
const darkModeBtn = document.querySelector('.darkToggle');
let body = document.body;
let currentTheme = localStorage.getItem('currentTheme');


let clickedBtn = () => mobileMenu[0].classList.toggle('active');
menuBtn[0].addEventListener('click', clickedBtn);

if (currentTheme) {
  body.classList.add('dark-theme');
}


darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('currentTheme', 'themeActive')
  } else {
    localStorage.removeItem('currentTheme');
  }
});

// document.querySelector('')

