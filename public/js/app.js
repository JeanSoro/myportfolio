const menuBtn = document.getElementsByClassName('hamburger-menu');
const mobileMenu = document.getElementsByClassName('mobile-menu');
const darkModeBtn = document.querySelector('.darkToggle');
let body = document.body;
let currentTheme = localStorage.getItem('currentTheme');
let backToTopBtn = document.querySelector('.backToTopBtn');


let clickedBtn = () => mobileMenu[0].classList.toggle('active');
menuBtn[0].addEventListener('click', clickedBtn);



//Dark Mode
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

//back to top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

