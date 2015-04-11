$(document).ready(function() {
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