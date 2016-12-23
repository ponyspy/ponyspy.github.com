$(function() {
	var swiperH = new Swiper('.swiper-container-h', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		direction: 'horizontal',
		spaceBetween: 20,
		// speed: 800,
		// autoplay: 4000,
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