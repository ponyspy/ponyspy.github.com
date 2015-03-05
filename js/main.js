$(document).ready(function() {
	$('.outer').swingScroll({
		factor: 1,
		engine: function() {
			if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
				return 'scroll';
			else
				return 'wheel';
		}
	});
});