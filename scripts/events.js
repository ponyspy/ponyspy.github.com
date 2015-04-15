$(document).ready(function() {

	// $('.event_item_block').each(function() {
	// 	var img = new Image();
	// 	img.src = $(this).attr('image');
	// });


	$event_blocks = $('.event_item_block');
	var height = $('.date_events_block').height();
	var offset_bottom = $('.date_events_block').offset().top + height;
	var count = 3;

	$(document).on('scroll', function() {
		if ($(document).scrollTop() >= offset_bottom) {

			$event_blocks.slice(0, count).each(function() {
				var img = new Image();
				img.src = $(this).attr('image');
			});

			offset_bottom += height;
			count += 3;
		}

	});


	$('.event_item_block')
		.on('mouseenter touchstart', function() {
			var path = $(this).attr('image');
			$(this).css('background-image', 'url(' + path + ')');
		})
		.on('mouseleave touchend', function() {
			$(this).removeAttr('style');
		});
});