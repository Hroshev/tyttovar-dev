import Swiper from "swiper/bundle";

const testimonials = new Swiper(".comment__swipper", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //   760: {
  //     slidesPerView: 2,
  //   },
  //   1004: {
  //     slidesPerView: 3,
  //   },
  // },
});

// const reviews = new Swiper(".swiper-reviews", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });