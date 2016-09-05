$(function() {
	var menu_height = $('.menu_block').height();
	var left;


	$('.area_content_inner').each(function() {
		var $this = $(this);
		var height = $this.find('.area_news').height() >= $this.find('.area_events').height() && $this.find('.area_news').height();
		if (height) $this.css('height', height + 10);
	});


	$(window).on('resize', function() {
		left = $('.area_content_inner').offset().left + $('.area_events').width() + 40;
		$('.area_news.fixed').css('left', left);
	}).trigger('resize');


	$('.logo').on('click', function() {
		$('body').animate({
			'scrollTop': 0
		}, 400);

		return false;
	});


	$('.area_title').on('click', function() {
		$('body').animate({
			'scrollTop': $(this).parent().offset().top - menu_height
		}, 400);
	});

	// $('.banner_event').on('click', function() {
	// 	$('.banner_block').animate({
	// 		'scrollTop': $('.banner_block').scrollTop() + $('.banner_block').height()
	// 	}, 400, function() {
	// 		var $event = $('.banner_event').first();
	// 		$('.banner_block').append($event);
	// 	});
	// });


	$(document).on('scroll', function() {
		var persentage = $(document).scrollTop() / $(window).height() * 100;

		if (persentage >= 0) {
			$('.banner_event').css('background-position-y', -persentage + 'px');
		}

		$('.area_item').each(function() {
			var $this = $(this);

			if ($this.offset().top - $(document).scrollTop() <= menu_height) {
				$this.find('.area_news').addClass('fixed').css({'position': 'fixed', 'top': menu_height + 65, 'left': left});
				$this.children('.area_title').css({'position': 'fixed', 'top': menu_height});
			} else {
				$this.find('.area_news').removeClass('fixed').removeAttr('style');
				$this.children('.area_title').removeAttr('style');
			}
		});
	});

});