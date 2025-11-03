const hamburger = document.querySelector('.header__wrap-icon');
const nav = document.querySelector('.header-blur');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header-blur--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header-blur--active');
};

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('header__wrap-icon--close')) {
    closeMenu();
    hamburger.classList.remove('header__wrap-icon--close');
  } else {
    openMenu();
    hamburger.classList.add('header__wrap-icon--close');
  }
});

nav.addEventListener('click', (evt) => {
  if (evt.target === nav) {
    closeMenu();
    hamburger.classList.remove('header__wrap-icon--close');
  }
});
