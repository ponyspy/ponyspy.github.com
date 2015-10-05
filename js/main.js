$(document).ready(function() {
	var intercom = Intercom.getInstance();

	$('.flip_block').cycle({
			speed: 600,
			manualSpeed: 600,
			fx: 'flipHorz',
			timeout: 2000,
			paused: true,
			// manualTrump: false,
			log: false
	});


	$(document).on(screenfull.raw.fullscreenchange, function() {
		if (!screenfull.isFullscreen) {
			$('.flip_block').css('width', '');
		}
	});

	// var flips = 0;
	// setInterval(function() {
	// 	if (flips > 5) flips = 0;
	// 	$('.flip_block').eq(flips).cycle('next');
	// 	flips++;
	// }, 300);

	// var flips = 0;
	// setInterval(function() {
	// 	if (flips > 5) flips = 0;
	// 	$('.flip_block').eq(flips).cycle('next');
	// 	$('.flip_block').eq(5 - flips).cycle('next');
	// 	flips++;
	// }, 600);


	var flip_interval = false;

	$('.flip_block').on('touchstart mouseenter', function(event) {
		$(this).cycle('next');
		// setTimeout(function() {
		// 	$('.flip_block').cycle('goto', 0);
		// }, 3000);
	});



	// $('.flip_block').on('touchend mouseleave', function(event) {
	// 	$(this).cycle('prev');
	// });


	$('.play').on('click', function() {
		if (!flip_interval) {
			$(this).text('pause');
			intercom.emit('flip', {status: 'resume'});
		} else {
			$(this).text('play');
			intercom.emit('flip', {status: 'pause'});
		}
		flip_interval = !flip_interval;
	});

	$('.reload').on('click', function() {
		intercom.emit('reload');
	});

	$('.flip').on('click', function(event) {
		$('.flip_block').css('width', '100%');
		var index = $(this).index();
		var target = $('.flip_block')[index];
		if (screenfull.enabled) {
			screenfull.request(target);
		}
	});

	$('.all').on('click', function(event) {
		var target = $('.outer_block')[0];

		if (screenfull.enabled) {
			screenfull.request(target);
		}
	});



	intercom.on('flip', function(data) {
		$('.flip_block').cycle(data.status);
	});

	intercom.on('reload', function(data) {
		location.reload();
	});


});