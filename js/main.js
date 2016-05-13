$(document).ready(function() {
	$('.images_block').masonry({
	  itemSelector: '.brick',
	  columnWidth: '.sizer',
	  // percentPosition: true,
	  transitionDuration: '0.2s',
	  gutter: 20
	});

	$('.projects_block').masonry({
	  itemSelector: '.project',
	  columnWidth: 180,
	  gutter: 20
	});

	$('.drop_item').on('click', function() {
		$(this).toggleClass('open');
	});

});