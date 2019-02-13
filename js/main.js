$(function() {
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		loopAdditionalSlides: 2,
		centeredSlides: true,
		slidesPerView: 2.2, // 3
		preventClicks: false,
		mousewheel: true,
		slideToClickedSlide: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			slideShadows: false,
			stretch: 250, // 100
			depth: 400, // 250
			modifier: 1,
		},
		breakpoints: {
			800: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		},
		initialSlide: 0,
		keyboard: {
			enabled: true
		}
	});

	swiper.on('slideChange', function(e) {
		$('iframe').each(function() {
			SC.Widget(this).pause();
		});
	});
});