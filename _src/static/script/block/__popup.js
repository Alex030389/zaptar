const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');

const popupOpen = (currentPopup) => {
  if (currentPopup) {
    const popupActive = document.querySelector('.popup--open');
    if (popupActive) {
      popupClose(popupActive);
    }
  }

  body.classList.add('fixed');
  currentPopup.classList.add('popup--open');

  currentPopup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup__content')) {
      popupClose(e.target.closest('.popup'));
    }
  })
}

const popupClose = (currentPopup) => {
  currentPopup.classList.remove('popup--open');
  body.classList.remove('fixed');
}

const closeIcons = document.querySelectorAll('.popup__close');
closeIcons.forEach((close) => {
  close.addEventListener('click', () => {
    popupClose(close.closest('.popup'));
  })
})

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup--open');
    popupClose(popupActive);
  }
})

if (popupLinks.length > 0) {
  popupLinks.forEach((popupLink, index) => {
    popupLink.addEventListener('click', (e) => {
      const currentPopup = document.getElementById('popup-order');
      popupOpen(currentPopup);
      e.preventDefault();
    })
  })
}
