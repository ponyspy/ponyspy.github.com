$(document).ready(function() {

	ordens_db.forEach(function(orden) {
		$('<div/>', {'class': 'orden', 'orden-id': orden._orden_id, 'style':'background: url(' + orden.img + ')'}).appendTo('.carousel.ordens');
	});

	persons_db.list.forEach(function(person) {
		$('<div/>', {'class': 'person', 'person-id': person._person_id, 'style':'background: url(' + person.img + ')'}).appendTo('.carousel.persons');
	});

	$(window).on('load', function() {
		$('.orden').draggable({
			scroll: false,
			appendTo: 'body',
			revert: 'invalid',
			helper: 'clone',
			drag: function() {
				$('.person').empty().removeClass('active');
			}
		});

		$('.person').droppable({
			hoverClass: 'hover',
			activeClass: 'activate',
			drop: function(event, ui) {
				var person_id = $(this).attr('person-id');
				var orden_id = $(ui.helper).attr('orden-id');

				var person = persons_db.list.filter(function(person) {
					return person._person_id == person_id;
				})[0];

				var person_orden = person.ordens.filter(function(orden) {
					return orden._orden_id == orden_id;
				})[0];

				if (!person_orden) {
					console.log('Reject default:', persons_db.defaults.reject);
				} else if (person_orden.success) {
					console.log('Success:', person_orden.success);
				} else if (person_orden.reject) {
					console.log('Reject:', person_orden.reject);
				} else {
					alert('Error:', '_orden_id: ' + orden_id, '_person_id: ' + person_id);
				}

				// $('.person').empty().removeClass('active');
				$(this).addClass('active').append($(ui.helper).clone().css({top:'auto', left: 'auto'}));
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