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


	$('.logo.main').on('click', function() {
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


	$('.banner_event').on('click', function() {
		var $banner_events = $('.banner_events');

		$banner_events.stop(false, true).animate({
			'scrollTop': $banner_events.scrollTop() + $banner_events.height()
		}, 400, function() {
			$('.banner_event:first').insertAfter('.banner_event:last');
			$banner_events.scrollTop($banner_events.scrollTop() - $banner_events.height());

			if ($('.banner_dot.active').index() == $('.banner_dot').size() - 1) {
				$('.banner_dot').removeClass('active').eq(0).addClass('active');
			} else {
				$('.banner_dot.active').removeClass('active').next().addClass('active');
			}
		});
	});


	$('.banner_dot').on('click', function() {
		var index = $(this).index();
		var last_index = $('.banner_dot.active').index();
		var $banner_events = $('.banner_events');

		if (last_index < index) {
			$banner_events.eq(index).insertAfter('.banner_events:first');
			$banner_events.stop(false, true).animate({
				'scrollTop': $banner_events.scrollTop() + $banner_events.height()
			}, 400, function() {
				$('.banner_dot').removeClass('active').eq(index).addClass('active');
			});
		} else if (last_index > index) {
			$banner_events.eq(index).insertBefore('.banner_events:first');
			$banner_events.stop(false, true).animate({
				'scrollTop': $banner_events.scrollTop() - $banner_events.height()
			}, 400, function() {
				$('.banner_dot').removeClass('active').eq(index).addClass('active');
			});
		} else return false;
	});


	var $area_items = $('.area_item');
	$(document).on('scroll', function() {
		var $document = $(this);
		var persentage = $document.scrollTop() / $(window).height() * 100;

		if (persentage >= 0 && persentage <= 50) {
			$('.banner_event').first().css('background-position-y', -persentage);
		}

		$area_items.each(function() {
			var $item = $(this);

			if ($item.offset().top - $document.scrollTop() <= menu_height) {
				$item.find('.area_news').addClass('fixed').css({'position': 'fixed', 'top': menu_height + 65, 'left': left});
				$item.children('.area_title').css({'position': 'fixed', 'top': menu_height});
			} else {
				$item.find('.area_news').removeClass('fixed').removeAttr('style');
				$item.children('.area_title').removeAttr('style');
			}
		});
	});

});