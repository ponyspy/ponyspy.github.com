$(function() {

  $('.column_inner').on('mouseenter', function(e) {
    var $this = $(this);

    $('.column_inner').off('scroll').filter(this).on('scroll', function(e) {
      // var scroll_persentage = 100 * ($this.scrollTop() + $this.height()) / this.scrollHeight;
      var scroll_persentage = $this.scrollTop() / (this.scrollHeight - $this.height()) * 100;

      console.log(scroll_persentage)

      $('.column_inner').not(this).each(function() {
        // $(this).scrollTop($this.scrollTop() / 100 * scroll_persentage);
        $(this).scrollTop(scroll_persentage * (this.scrollHeight - $(this).height()) / 100);
      });
    })
  });

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