$(function() {
	$('.d_item').on('mouseenter', function(e) {
		var id = $(this).attr('class').split(' ')[1];

		$('.p_item').not('.' + id).addClass('hover');
	});

	$('.d_item').on('mouseleave', function(e) {
		$('.p_item').removeClass('hover');
	});
});