$(function() {
	$('.cv').on('click', function(e) {
		window.open('cv.html', '', 'width=360,height=500,left=200,top=200');
	});

	$('.contact').on('change', function(e) {
		var selected = $('.contact option:selected').text();

		if (selected == 'email') {
			location.href = 'mailto:wassia@kuku.com';
		} else if (selected == 'fb') {
			window.open('http://www.facebook.com', '_blank');
		}
	});
});