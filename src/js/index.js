(function($) {
  $(document).ready(function() {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav__toggle');
    const popupCall = document.querySelector('.popup-call');
    const navPhone = document.querySelector('.main-nav__phone');
    const closePopupCall = document.querySelector('.popup-call__closed');
    const popupAddition = document.querySelector('.popup-addition');
    const navAddition = document.querySelector('.main-menu__item-link--addition');
    const closePopupAddition = document.querySelector('.popup-addition__closed');
  
    navMain.classList.remove('main-nav--nojs');
  
    navToggle.addEventListener('click', () => {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
    navPhone.addEventListener('click', () => {
      if (popupCall.classList.contains('popup-call--closed')) {
        popupCall.classList.remove('popup-call--closed');
        popupCall.classList.add('popup-call--opened');
      }
    });
    closePopupCall.addEventListener('click', () => {
      if (popupCall.classList.contains('popup-call--opened')) {
        popupCall.classList.remove('popup-call--opened');
        popupCall.classList.add('popup-call--closed');
      }
    });
    navAddition.addEventListener('click', () => {
      if (popupAddition.classList.contains('popup-addition--closed')) {
        popupAddition.classList.remove('popup-addition--closed');
        popupAddition.classList.add('popup-addition--opened');
      }
    });
    closePopupAddition.addEventListener('click', () => {
      if (popupAddition.classList.contains('popup-addition--opened')) {
        popupAddition.classList.remove('popup-addition--opened');
        popupAddition.classList.add('popup-addition--closed');
      }
    });
  });
})(jQuery)
