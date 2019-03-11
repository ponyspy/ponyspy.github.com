$(function() {
	$('.bg_block').tilt({
		// perspective: 1000,
		// maxTilt: 20,
		reset: true,
		scale: 1.2
	});

	$('.logo').on('click', function(e) {
		$('.bg_block').removeClass('blur');
		$('.content_block').removeClass('show');
		$('.footer_block').removeClass('scroll');
	});

	$('.bg_block').on('click', function(e) {
		$('.bg_block').addClass('blur');
		$('.content_block').addClass('show');
		$('.footer_block').addClass('scroll');
	});
});