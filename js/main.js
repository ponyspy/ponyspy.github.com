$(function() {

  var swColumns = new Swiper('.swiper-columns', {
    spaceBetween: 0,
    simulateTouch: false,
    keyboard: {
      enabled: true
    },
    breakpoints: {
      1200: {
        autoHeight: false,
        slidesPerView: 3
      },
      800: {
        autoHeight: true,
        slidesPerView: 1
      }
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    }
  });

});