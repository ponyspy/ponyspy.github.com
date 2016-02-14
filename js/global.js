$(document).ready(function() {
	$(document)
		.on('scroll', function() {
			$('.menu_lectures').removeClass('active');
		})
		.on('mouseup touchend', function(event) {
			if (!/menu_block|lecture/.test(event.target.className)) {
				$('.logo').removeClass('hide');
				$('.menu_lectures, .menu_search').removeClass('active');
			}
		});

	$('.item_lectures').on('mousemove', function(e) {
		var $this = $(this);

		$this.children('.lectures_outer').scrollLeft(e.pageX - $this.width() / 2);
	});

	$('.logo').on('click', function() {
		$('.menu_lectures').toggleClass('active');
		$('body').animate({
			'scrollTop': 0
		}, 400);
	});

	$('.search').on('click', function() {
		$('.logo').toggleClass('hide');
		$('.menu_search').toggleClass('active').children('.search_input').focus();
	});
});