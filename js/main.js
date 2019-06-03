$(window).on('load hashchange', function(e) {
	$('.drop, .section_item').removeClass('show').filter(location.hash).addClass('show');
});

$(function() {
	$(document).on('mouseup touchend', function(e) {
		if ($(e.target).closest('.up_block, .down_block, .sections_block').length) return;

		location.hash = '#';

		e.stopPropagation();
	});

	$('.main_block').on('mousemove', function(e) {
		$('.content_line').css('left', e.pageX - 2);
	});

	$('.mask_item').on('mouseenter', function(e) {
		var $this = $(this);
		var index = $this.index();

		$('.title_block').text($this.attr('data-title'));
		$('.content_item').removeClass('active').eq(index).addClass('active');
		$('.mask_item').removeClass('active').eq(index).addClass('active');
	}).eq(0).trigger('mouseenter');
});