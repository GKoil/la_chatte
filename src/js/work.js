const navWork = document.querySelector('.work-nav');
const navWorkToggle = document.querySelector('.work-nav__toggle');

console.log(navWorkToggle);
navWorkToggle.addEventListener('click', () => {
  console.log('object');
  if (navWork.classList.contains('work-nav--closed')) {
    navWork.classList.remove('work-nav--closed');
    navWork.classList.add('work-nav--opened');
  } else {
    navWork.classList.add('work-nav--closed');
    navWork.classList.remove('work-nav--opened');
  }
});