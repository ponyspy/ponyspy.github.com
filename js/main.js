$(document).ready(function() {
	$('.flip_block').on('touchstart mouseenter', function() {
		$(this).toggleClass('hover');
	});

	setInterval(function() {
		$('.flip_block').removeClass('hover');
	}, 4000);

});