$(document).ready(function() {
	$('.flip_block').on('touchstart mouseenter', function(event) {
		var $this = $(this);

		$this.toggleClass('hover');
		setTimeout(function() {
			$this.removeClass('hover');
		}, 4000);
	});

});