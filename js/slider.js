$(function() {
	var back_interval = setInterval(function() {
		window.location.href = '../index.html';
	}, 1000 * 60 * 4);

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
		onSlideChangeStart: function(swiper) {
			clearInterval(back_interval);

			back_interval = setInterval(function() {
				window.location.href = '../index.html';
			}, 1000 * 60 * 4);
		}
	});
});