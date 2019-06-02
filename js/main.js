$(window).on('load hashchange', function(e) {
	$('.drop').removeClass('show').filter(location.hash).addClass('show');
});

$(function() {
	$('.main_block').on('mousemove', function(e) {
		$('.content_line').css('left', e.pageX - 2);
	});

	$('.mask_item').on('mouseenter', function(e) {
		var $this = $(this);
		var index = $this.index();

		$('.title_block').text($this.attr('data-title'));
		$('.content_item').removeClass('active').eq(index).addClass('active');
		$('.mask_item').removeClass('active').eq(index).addClass('active');
	})
});