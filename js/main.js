$(function() {
	var swiperH = new Swiper('.swiper-container-h', {
		slidesPerView: 1,
		direction: 'horizontal',
		spaceBetween: 30,
		speed: 600,
		autoplay: 4000,
		// autoplayDisableOnInteraction: false,
		// effect: 'fade',
		// autoHeight: true,
		// initialSlide: 1,
		centeredSlides: true,
		keyboardControl: true,
		loop: true,
		runCallbacksOnInit: false,
	});
});