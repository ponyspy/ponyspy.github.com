$(function() {
	var $photo_inner = $('.photo_stream');
	var $photo = $('.photo_item');

	$(document)
		.on('scroll', function() {
			var factor = 100 + (100 * $(window).scrollTop() / ($(window).height() + $photo_inner.height()));

			if (factor >= 0) {
				factor = factor + '%';

				// $photo.css({'top': factor, 'bottom': factor, 'left': factor, 'right': factor});
				$photo.css({'background-size': factor});
			}
		});
});