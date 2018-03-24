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

//Карусель
    var width = 270; // ширина изображения
    var count = 1; // количество изображений

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('.pets__list');
    var listElems = carousel.querySelectorAll('.pets__item');

    var position = 0; // текущий сдвиг влево

    carousel.querySelector('.pets__arrow--prev').onclick = function() {
      // сдвиг влево
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position + width * count, 0)
     list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.pets__arrow--next').onclick = function() {
      // сдвиг вправо
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
    };
