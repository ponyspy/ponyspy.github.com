$(document).ready(function() {
	var flip_timer = null;

	$('.flip_block').on('touchstart mouseenter', function(event) {
		var $this = $(this);

		$this.toggleClass('hover');
		flip_timer = setTimeout(function() {
			$this.toggleClass('hover');
			flip_timer = null;
		}, 3000);
	});

	setInterval(function() {
		if (flip_timer) return false;
		$('.flip_block').toggleClass('hover');
	}, 3000);

});