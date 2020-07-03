(function($) {
  $(document).ready(function() {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav__toggle');
    const popupCall = document.querySelector('.popup-call');
    const navPhone = document.querySelector('.main-nav__phone-icon-button');
    const navPhoneText = document.querySelector('.main-nav__phone-text-button');
    const closePopupCall = document.querySelector('.popup-call__closed');
    const popupAddition = document.querySelector('.popup-addition');
    const navAddition = document.querySelector('.main-menu__item-link--addition');
    const closePopupAddition = document.querySelector('.popup-addition__closed');
    const themeToggle = document.querySelector('.night-mode__toggle');
  
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
      console.log('click');
      if (popupCall.classList.contains('popup-call--closed')) {
        popupCall.classList.remove('popup-call--closed');
        popupCall.classList.add('popup-call--opened');
      }
    });
    navPhoneText.addEventListener('click', () => {
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
    themeToggle.addEventListener('click', () => {
      if (themeToggle.classList.contains('night-mode__toggle--off')) {
        themeToggle.classList.remove('night-mode__toggle--off');
        themeToggle.classList.add('night-mode__toggle--on');
      } else {
        themeToggle.classList.remove('night-mode__toggle--on');
        themeToggle.classList.add('night-mode__toggle--off');
      }
    });

    const addScrollLogo = () => {
      const logoScroll = document.createElement('span');
      logoScroll.className = 'logo__text--scroll';
      logoScroll.innerHTML = '<span class="logo__first">L</span><span class="logo__second">C</span>'

      document.querySelector('.logo__title').append(logoScroll);
    }
    addScrollLogo();

    const changeMainLogo = (scrollTop) => { 
      const mainLogo = document.querySelector('.logo__text--main');
      const scrollLogo = document.querySelector('.logo__text--scroll');
      if (scrollTop > 50) {
        mainLogo.classList.remove('logo__text--on');
        mainLogo.classList.add('logo__text--off');
        scrollLogo.classList.remove('logo__text--off');
        scrollLogo.classList.add('logo__text--on');
      } else {
        scrollLogo.classList.remove('logo__text--on');
        scrollLogo.classList.add('logo__text--off');
        mainLogo.classList.remove('logo__text--off');
        mainLogo.classList.add('logo__text--on');
      }
    }
    window.addEventListener('scroll', () => {
      changeMainLogo(pageYOffset);
    });
  });
})(jQuery)
