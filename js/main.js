$(document).ready(function() {
	var photos = new Freewall('.images_inner');
	var projects = new Freewall('.projects_inner');

	photos.reset({
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
			photos.fitWidth();
		}
	});

	projects.reset({
		selector: '.project',
		animate: false,
		// keepOrder: true,
		// fixSize: false,
		draggable: true,
		cellW: 300,
		cellH: 200,
		gutterX: 20,
		gutterY: 20,
		onResize: function() {
			projects.fitWidth();
		}
	});

	photos.fitWidth();
	projects.fitWidth();




	$(window).trigger('resize');

	$('.content_image_main').on('click', function() {
		$('body').animate({
			'scrollTop': $('.content_body').offset().top
		}, 400);
	});

	$('.drop_item').on('click', function() {
		$(this).toggleClass('open');
	});

});