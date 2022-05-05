let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
  });

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header__toggle--opened')) {
    navToggle.classList.remove('main-header__toggle--opened');
    navToggle.classList.add('main-header__toggle--closed');
  } else {
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
  }
  });
