$(function() {
	var $players = $('iframe');

	var swiper = new Swiper('.swiper-container', {
		loop: true,
		centeredSlides: true,
		slidesPerView: 3,
		preventClicks: false,
		mousewheel: true,
		slideToClickedSlide: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			slideShadows: false,
			stretch: 100,
			depth: 250,
			modifier: 1,
		},
		initialSlide: 0,
		keyboard: {
			enabled: true
		}
	});

	swiper.on('slideChange', function(e) {
		$players.each(function() {
			SC.Widget(this).pause();
		});
	});
});