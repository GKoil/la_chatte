(function($) {
  $(document).ready(function() {
    const header = document.querySelector('.page-header');
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
    const buttonSendApplicationMobile = document.querySelector('.form-send__send');
    const popupApplication = document.querySelector('.popup-application');

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
      
    navMain.classList.remove('main-nav--nojs');
  
    navToggle.addEventListener('click', () => {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        header.classList.add('page-header--opened');
        header.classList.remove('page-header--closed');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        header.classList.remove('page-header--opened');
        header.classList.add('page-header--closed');
      }
    });
    navPhone.addEventListener('click', () => {
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

    //---- change logo on scroll
    const addScrollLogo = () => {
      const logoScroll = document.createElement('span');
      logoScroll.className = 'logo__text--scroll logo__text--off';
      logoScroll.innerHTML = '<span class="logo__first">L</span><span class="logo__second">C</span>'

      document.querySelector('.logo__title').append(logoScroll);
    }
    if (isMobile) {
      addScrollLogo();
    }

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
    };
    window.addEventListener('scroll', () => {
      if (isMobile) {
        changeMainLogo(pageYOffset);
      }
    });
    //----

    //---- add hint about scrolling 
    const addHintScroll = () => {
      const containerBlock = document.createElement('div');
      containerBlock.className = 'hint-scroll';

      const body = document.querySelector('.main-body');
      body.append(containerBlock);
    }
    if (!isMobile) {
      addHintScroll();
    }

    const hiddentHintScroll = (scrollTop) => {
      const hint = document.querySelector('.hint-scroll');

      if (scrollTop > 10) {
        hint.classList.remove('hint-scroll--on');
        hint.classList.add('hint-scroll--off');
      } else {
        hint.classList.remove('hint-scroll--off');
        hint.classList.add('hint-scroll--on');
      }
    };

    window.addEventListener('scroll', () => {
      if (!isMobile) {
        hiddentHintScroll(pageYOffset);
      }
    });
    //----

    buttonSendApplicationMobile.addEventListener('click', () => {
      if (popupApplication.classList.contains('popup-application--closed')) {
        popupApplication.classList.remove('popup-application--closed');
        popupApplication.classList.add('popup-application--opened');
      }
    });
    document.addEventListener('click', (e) => {
      const isPopupActive = popupApplication.classList.contains('popup-application--opened');
      const isClickOnInside = popupApplication.contains(e.target);
      
      if (e.target.classList.contains('form-send__send')) {
        return;
      }
      if ( isPopupActive && !isClickOnInside) {
        popupApplication.classList.remove('popup-application--opened');
        popupApplication.classList.add('popup-application--closed');
      }
    });

  });
})(jQuery)