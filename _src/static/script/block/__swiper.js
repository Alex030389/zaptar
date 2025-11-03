const popularSlider = new Swiper('.popular-slider', {
  // loop: true,
  // effect: "fade",

  navigation: {
    nextEl: '.popular-slider__btn-next',
    prevEl: '.popular-slider__btn-prev',
  },

  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1075: {
      slidesPerView: 3,
    },
  },
});

const seasonSlider = new Swiper('.season-slider', {

  navigation: {
    nextEl: '.season-slider__btn-next',
    prevEl: '.season-slider__btn-prev',
  },

  slidesPerView: 3,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1075: {
      slidesPerView: 3,
    },
  },
});
