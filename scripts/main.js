$(document).ready(function($) {
	$('.tiles_cont').mapNavigate();

	$('.plus').click(function(event) {
		$('.wrap').animate({'width': '+=60%'}, 300);
	});

	$('.minus').click(function(event) {
		$('.wrap').animate({'width': '-=60%'}, 300);
	});

	$(document).on({
		dblclick: function() {
			$(this).animate({'width': '+=60%'}, 300);
		},
		contextmenu: function() {
			return false;
		},
		mousedown: function() {
			event.button == 2
				? $(this).animate({'width': '-=60%'}, 300)
				: false
		}
	}, '.wrap');

	function imgLoaded(event) {
		$(event.data.img).addClass('loaded');
	};

	function lazyLoad() {
		$('.tile').each(function() {
			src = $(this).attr('data-src');

			$(this).attr('src', src).on('load', {img: this}, imgLoaded);
		});
	};

	$(window).on('load', lazyLoad);

});