const menuBtn = document.getElementsByClassName('hamburger-menu')
const mobileMenu = document.getElementsByClassName('mobile-menu')

let clickedBtn = () => mobileMenu[0].classList.toggle('active')

menuBtn[0].addEventListener('click', clickedBtn)

document.querySelector('')