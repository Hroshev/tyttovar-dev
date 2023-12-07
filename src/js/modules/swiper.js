import Swiper from "swiper/bundle";

const template = new Swiper(".template__swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});
