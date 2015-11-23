$(document).ready(function() {

	ordens_db.forEach(function(orden) {
		$('<div/>', {'class': 'orden', 'style':'background: url(' + orden.img + ')'}).appendTo('.carousel.ordens');
	});

	persons_db.forEach(function(person) {
		$('<div/>', {'class': 'person', 'style':'background: url(' + person.img + ')'}).appendTo('.carousel.persons');
	});

	$(window).on('load', function() {
		$('.orden').draggable({
			appendTo: 'body',
			revert: 'invalid',
			helper: 'clone'
		});

		$('.person').droppable({
			hoverClass: 'hover',
			drop: function(event, ui) {
					$('.person').empty().removeClass('active');
					$(this).append($(ui.helper).clone().css({top:'auto', left: 'auto'}));
					$(this).addClass('active');
			}
		});
	});


	$('.ordens').cycle({
			// speed: 600,
			// manualSpeed: 600,
			fx: 'carousel',
			timeout: 2000,
			autoHeight: false,
			slides: '.orden',
			paused: true,
			manualTrump: false,
			log: false
	});

	$('.persons').cycle({
			// speed: 600,
			// manualSpeed: 600,
			fx: 'carousel',
			timeout: 2000,
			autoHeight: false,
			slides: '.person',
			paused: true,
			manualTrump: false,
			log: false
	});


	$('.prev').on('click', function() {
		var type = $(this).parent('.navigate_block').next('.carousel').attr('class').split(' ')[1];
		$('.' + type).cycle('prev');
		// $('.person').removeClass('active').filter('.cycle-slide-active').next().next().addClass('active');
	});

	$('.next').on('click', function() {
		var type = $(this).parent('.navigate_block').next('.carousel').attr('class').split(' ')[1];
		$('.' + type).cycle('next');
		// $('.person').removeClass('active').filter('.cycle-slide-active').next().next().addClass('active');
	});

	$('.clear').on('click', function(event) {
		$('.person').empty();
	});
});