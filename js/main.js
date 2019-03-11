$(function() {
	var element = document.querySelector('.bg_block');

	VanillaTilt.init(element, {
		reset: true,
		scale: 1.2,
		maxTilt: 60,
		perspective: 500,
		glare: false,
		gyroscopeMinAngleX: -25,
		gyroscopeMaxAngleX:  25,
		gyroscopeMinAngleY: -25,
		gyroscopeMaxAngleY:  25,
		gyroscope: true
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