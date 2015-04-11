$(document).ready(function() {

	$('.event_item_block').each(function() {
		var img = new Image();
		img.src = $(this).attr('image');
	});


	$('.event_item_block').on({
		mouseenter: function(event) {
			var path = $(this).attr('image');
			$(this).css('background-image', 'url(' + path + ')');
		},
		mouseleave: function(event) {
			$(this).removeAttr('style');
		}
	})
});