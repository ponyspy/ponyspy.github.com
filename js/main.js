$(window).on('load hashchange', function(e) {
	var title_text = $('.section_item').filter(location.hash).find('.section_title').text();

	$('.title_block').text(title_text == '' ? $('.section_item').filter($('.mask_item').filter('.active').attr('href')).find('.section_title').text() : title_text);
	$('.menu_block').children('a').removeClass('active').filter('[href="' + location.hash + '"]').addClass('active');
	$('.drop, .section_item').removeClass('show').filter(location.hash).addClass('show').scrollTop(0);
});

$(function() {
	$(document)
		.on('keyup', function(e) {
			var num_codes = [49, 50, 51, 52, 53];

			if (/^[0-9]+$/.test(num_codes.indexOf(e.which))) {
				$('.menu_block').find('a').eq(num_codes.indexOf(e.which)).trigger('click');
			}
		})
		.on('mouseup touchend', function(e) {
			if ($(e.target).closest('.up_block, .down_block, .sections_block').length) return;

			location.hash = '#';

			e.stopPropagation();
		});

	$('.menu_block').children('a').on('click', function(e) {
		e.preventDefault();

		$(this).attr('href') == location.hash
			? location.hash = '#'
			: location.hash = $(this).attr('href');
	});

	$('.main_block').on('mousemove', function(e) {
		$('.content_line').css('left', e.pageX - 2);
	});

	$('.mask_item')
		.on('mousemove', function(e) {
			var $this = $(this);
			var $content_item = $('.content_item.active');
			var percentage = (e.pageX - $this.offset().left) / $this.width() * 100;

			$content_item.css('background-position-x', percentage + '%');
		})
		.on('mouseenter', function(e) {
			var $this = $(this);
			var index = $this.index();

			$('.title_block').text($('.section_item').filter($this.attr('href')).find('.section_title').text());
			$('.content_item').removeClass('active').eq(index).addClass('active');
			$('.mask_item').removeClass('active').eq(index).addClass('active');
		}).eq(0).trigger('mouseenter');
});