$(document).ready(function() {
	var as = audiojs.createAll()[0];

	function selectPeople(index) {
		var $people_nav = $('.people_nav');
		var audio = $people_nav.eq(index).attr('audio-src');
		as.load(audio);
		as.play();

		$people_nav
			.children('.people_photo').removeClass('selected').end()
			.eq(index).children('.people_photo').addClass('selected');
	}

	function scrollSelect() {
		$('.people_block').each(function() {
			var $this = $(this);

			if ($('.main').offset().top >= $this.offset().top + $this.height()) {
				$this.data('play', false);
			} else if ($('.main').offset().top >= $this.offset().top && !$this.data('play')) {
				var index = $this.index();

				selectPeople(index);

				$this.data('play', true);
			}

		});
	}

	$('.people_nav').on('click', function(event) {
		$('.main').off('scroll');

		var index = $(this).index('.people_nav');
		$('.people_block').data('play', false).eq(index).data('play', true);

		selectPeople(index);

		$('.main').animate({
			'scrollTop': $('.people_block').eq(index).offset().top + $('.main').scrollTop()
		}, 600, function() {
			// $('.main').on('scroll', scrollSelect);
		});
	});

	// $('.main').on('scroll', scrollSelect);

	$('.fullscreen').on('click', function(event) {
		var target = $('.columns_block')[0];
		if (screenfull.enabled) {
			screenfull.request(target);
		}
	});

	$(document).on('contextmenu', function() {
		return false;
	});

});