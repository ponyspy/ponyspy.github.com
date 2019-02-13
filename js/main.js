$(function() {
	var swiper = new Swiper('.swiper-container', {
		loop: true,
		loopAdditionalSlides: 3,
		centeredSlides: true,
		slidesPerView: 2.3, // 3
		preventClicks: false,
		mousewheel: true,
		slideToClickedSlide: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			slideShadows: false,
			stretch: 450, // 100
			depth: 250, // 250
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