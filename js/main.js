var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(function() {

  if (!is_mobile) {
    var $columns = $('.column_inner');

    $columns.on('mouseenter', function(e) {
      var $this = $(this);

      $columns.off('scroll').filter(this).on('scroll', function(e) {
        var scroll_persentage = $this.scrollTop() / (this.scrollHeight - $this.outerHeight()) * 100;

        $columns.not(this).each(function() {
          var $this = $(this);

          $this.scrollTop(scroll_persentage * (this.scrollHeight - $this.outerHeight()) / 100);
        });
      })
    });
  }

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