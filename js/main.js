$(window).on('load hashchange', function(e) {
	var title_text = $('.section_item').filter(location.hash).find('.section_title').text();

	$('.title_block').text(title_text == '' ? $('.section_item').filter($('.mask_item').filter('.active').attr('data-href')).find('.section_title').text() : title_text);
	$('.menu_block').children('a').removeClass('active').filter('[href="' + location.hash + '"]').addClass('active');
	$('.drop, .section_item').removeClass('show').filter(location.hash).addClass('show').scrollTop(0);
});

$(function() {
	$(document)
		.on('keyup', function(e) {
			var menu_index = [49, 50, 51, 52, 53].indexOf(e.which);

			if (menu_index !== -1) {
				$('.menu_block').children('a').eq(menu_index).trigger('click');
			}

			if (e.which == 27) {
				location.hash = '#';
			}
		})
		.on('mouseup touchend', function(e) {
			if ($(e.target).closest('.up_block, .down_block, .sections_block').length) return;

			location.hash = '#';

			e.stopPropagation();
		});

	$('.menu_block').children('a').on('click', function(e) {
		var href = $(this).attr('href');

		e.preventDefault();

		href == location.hash
			? location.hash = '#'
			: location.hash = href;
	});

	$('.main_block').on('mousemove', function(e) {
		$('.content_line').css('left', e.pageX - 2);
	});

	$('.mask_item')
		.on('click', function(e) {
			location.href = $(this).attr('data-href');
		})
		.on('mousemove', function(e) {
			var $this = $(this);
			var percentage = (e.pageX - $this.offset().left) / $this.width() * 100;

			$('.content_item.active').css('background-position-x', percentage + '%');
		})
		.on('mouseenter', function(e) {
			var $this = $(this);
			var index = $this.index();

			$('.title_block').text($('.section_item').filter($this.attr('data-href')).find('.section_title').text());
			$('.content_item').removeClass('active').eq(index).addClass('active');
			$('.mask_item').removeClass('active').eq(index).addClass('active');
		}).eq(0).trigger('mouseenter');
});