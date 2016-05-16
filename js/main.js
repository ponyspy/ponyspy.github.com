$(document).ready(function() {
	var wall = new Freewall('.images_inner');

	wall.reset({
		selector: '.brick',
		animate: false,
		// keepOrder: true,
		// fixSize: false,
		draggable: true,
		cellW: 300,
		cellH: 200,
		gutterX: 20,
		gutterY: 20,
		onResize: function() {
			wall.fitWidth();
		}
	});

	wall.fitWidth();
	$(window).trigger('resize');

	$('.drop_item').on('click', function() {
		$(this).toggleClass('open');
	});

});