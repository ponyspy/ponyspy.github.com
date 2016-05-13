$(document).ready(function() {
	$('.images_inner').masonry({
	  itemSelector: '.brick',
	  columnWidth: 180,
	  gutter: 20
	});

	$('.projects_inner').masonry({
	  itemSelector: '.project',
	  columnWidth: 180,
	  gutter: 20
	});

	$('.drop_item').on('click', function() {
		$(this).toggleClass('open');
	});

});