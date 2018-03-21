'use strict';
// Меню навигации
var navMain = document.querySelector('.menu');
var navToggle = document.querySelector('.menu__toggle');
var scroll = document.querySelector('.scroll');

navMain.classList.remove('menu--nojs');
//scroll.classList.remove('scroll--js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('menu--closed')) {
    navMain.classList.remove('menu--closed');
    navMain.classList.add('menu--open');
  //  scroll.classList.add('scroll--js');

  } else {
    navMain.classList.add('menu--closed');
    navMain.classList.remove('menu--open');
//    scroll.classList.remove('scroll--js');
  }
});
