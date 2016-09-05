$(function() {
	$(document).on('scroll', function() {
		var persentage = $(document).scrollTop() / $(window).height() * 100;

		if (persentage >= 0) {
			$('.banner_block').css('background-position-y', -persentage + 'px');
		}
	});
});