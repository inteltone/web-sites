/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/////////////// Б У Р Г Е Р ////////////////////////////////
let burger = document.querySelector('[data-burger]');
if (burger) {
  let header_nav = document.querySelector('[data-header-nav]');
  burger.addEventListener('click', () => {
    if (header_nav.classList.contains('active')) {
      header_nav.classList.remove('active');
      burger.classList.toggle('active');
    } else {
      setTimeout(() => {
        header_nav.classList.add('active');
        burger.classList.toggle('active');
      }, 0);
    }
  });
  window.addEventListener('click', () => {
    if (header_nav.classList.contains('active')) {
      header_nav.classList.remove('active');
      burger.classList.toggle('active');
    }
  });
}

/////////////// Я З Ы К И //////////////////////////////////
let lang = document.querySelector('[data-lang]');
if (lang) {
  let btns = lang.querySelectorAll('span');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(btn => {
        btn.classList.toggle('clr-pink');
      });
    });
  });
}

// //////////// С Л А Й Д Е Р Ы ////////////////////////////

// import Splide from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// //--------------------------------------------------------------//

var slider = document.querySelector("[data-slider]");
if (slider) {
  // console.log(`slider is present`);

  var splide = new Splide('[data-slider]', {
    type: 'loop',
    autoplay: true,
    interval: 20000,
    speed: 1000,
    perPage: 1,
    focus: 0,
    pagination: false,
    gap: 20
  }).mount();
} else {
  // console.log(`slider is NOT present`);
}

/////////////// П О П А П Ы ////////////////////////////////////

// Вызов окна кнопкой с классом btn-modal
let btns_popup = document.querySelectorAll('[data-popup-call]');
if (btns_popup) {
  let popups = document.querySelectorAll('.popup');
  btns_popup.forEach(btn => {
    btn.addEventListener('click', e => {
      if (document.querySelector('dialog[open')) {
        document.querySelector('dialog[open]').close();
      }
      let target = e.currentTarget;
      let popup_index = target.getAttribute('data-popup');
      popups.forEach(popup => {
        if (popup.getAttribute('data-popup') === popup_index) {
          popup.showModal();
        }
      });
    });
  });
  // КНОПКИ ЗАКРЫТИЯ ПОПАПОВ -------------------------------
  let btns_popup_close = document.querySelectorAll('[data-popup-close]');
  btns_popup_close.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('dialog[open]').close();
    });
  });
  // ЗАКРЫТИЕ ПОПАПОВ ПРИ КЛИКАХ ВНЕ ИХ ---------------------
  popups.forEach(popup => {
    let popup_inner = popup.querySelector('[data-popup-inner]');
    popup.addEventListener("click", e => {
      const dialogDimensions = popup_inner.getBoundingClientRect();
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        popup.close();
      }
    });
  });
}

////// Р А З Н О Е /////////////////////////////////////////////

// ---- ФИЛЬТР НОВОСТЕЙ ----------------------------------------
let filter = document.querySelector('[data-filter]');
if (filter) {
  let cards = document.querySelectorAll('.card-news');
  let current = filter.querySelector('[data-current]');
  let menu = filter.querySelector('[data-menu]');
  let options = menu.querySelectorAll('.filter__option');
  let arrow = filter.querySelector('[data-svg]');
  options[0].classList.add('hide');
  current.addEventListener('click', e => {
    let target = e.currentTarget;
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      arrow.classList.remove('rotate');
    } else {
      setTimeout(() => {
        menu.classList.add('active');
        arrow.classList.add('rotate');
      }, 0);
    }
  });
  options.forEach(option => {
    option.addEventListener('click', e => {
      let target = e.currentTarget;
      showOptions();
      let option_index = target.getAttribute('data-f');
      current.setAttribute('data-f', option_index);
      arrow.setAttribute('data-f', option_index);
      let topic = target.textContent;
      target.classList.add('hide');
      let selected = filter.querySelector('[data-selected]');
      selected.textContent = topic;
      hideCards();
      cards.forEach(card => {
        if (option_index === '0') {
          showCards();
          return;
        }
        if (card.getAttribute('data-f') === option_index) {
          card.classList.remove('hide');
        }
      });
    });
  });
  function showOptions() {
    options.forEach(option => option.classList.remove('hide'));
  }
  function hideCards() {
    cards.forEach(card => card.classList.add('hide'));
  }
  function showCards() {
    cards.forEach(card => card.classList.remove('hide'));
  }
  window.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      arrow.classList.remove('rotate');
    }
  });
}

// ---- ССЫЛКИ НЕРАБОЧИЕ ----------------------------------------
let links_disabled = document.querySelectorAll('.btn--disabled');
if (links_disabled) {
  links_disabled.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
    });
  });
}

// ---- АНИМАЦИЯ ------------------------------------------------
let anims = gsap.utils.toArray('.anim');
if (anims) {
  anims.forEach(anim => {
    ScrollTrigger.create({
      trigger: anim,
      start: 'top 70%',
      animation: gsap.to(anim, {
        y: 0,
        autoAlpha: 1,
        ease: 'power1.out',
        duration: 0.75
      })
    });
  });
}
let anim_circle_2 = document.querySelector('.anim-circle-2');
if (anim_circle_2) {
  ScrollTrigger.create({
    trigger: anim_circle_2,
    start: 'top 70%',
    animation: gsap.to(anim_circle_2, {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.75,
      delay: .5
    })
  });
  ScrollTrigger.create({
    trigger: ".circle1-container",
    start: 'top 80%',
    animation: gsap.to(".circle1-container", {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.75
    })
  });
  ScrollTrigger.create({
    trigger: ".anim-title",
    start: 'top 80%',
    animation: gsap.to(".anim-title", {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.75
    })
  });
  ScrollTrigger.create({
    trigger: ".anim-subtitle",
    start: 'top 80%',
    animation: gsap.to(".anim-subtitle", {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      duration: 0.75
    })
  });
  ScrollTrigger.create({
    trigger: ".anim-list-item",
    start: 'top 80%',
    animation: gsap.to(".anim-list-item", {
      y: 0,
      opacity: 1,
      ease: 'power1.out',
      stagger: .5,
      duration: 0.75,
      delay: .5
    })
  });
}
/******/ })()
;
//# sourceMappingURL=main.js.map