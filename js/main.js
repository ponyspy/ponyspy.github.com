var current = 1;
var db = [
	{
		path: 'img/1.jpg',
		desc: '2016 / pokushal / privet wassia! privet wassia! privet wassia!'
	},
	{
		path: 'img/2.png',
		desc: '2015 / pospal / dlinno dlinno dlinno'
	},
	{
		path: 'img/3.png',
		desc: '2014 / ugadal / medlenno medlenno medlenno'
	},
	{
		path: 'img/4.gif',
		desc: '2013 / vstal / mashina / chi'
	},
	{
		path: 'img/5.jpg',
		desc: '2012 / cel / kokoko lalala'
	}
];

$(function() {


	$('.cv').on('click', function(e) {
		window.open('cv.html', '', 'width=360,height=500,left=200,top=200');
	});

	$('img').on('mousedown', function(e) {
		return false;
	});

	$('body').on('click', function(e) {
		$('.clone').remove();

		if (e.target.className == 'image') {
			$('img').attr('src', db[current].path);
			$('.marquee').children('span').text(db[current].desc);

			current == db.length - 1
				? current = 0
				: current += 1;
		}

		var $body = $(this);
		var $block = $('.block');

		var body_width = $body.width();
		var body_height = $body.height();

		var block_width = $block.width();
		var block_height = $block.height();

		// var x = e.pageX - block_width / 2;
		// var y = e.pageY - block_height / 2;
		var x = e.pageX;
		var y = e.pageY;

		$block.css({ 'left': x, 'top': y });

		var block_offset_right = $block.offset().left + block_width;
		var block_offset_bottom = $block.offset().top + block_height;

		if (block_offset_right > body_width || block_offset_bottom > body_height) {

			var x_clone = block_offset_right > body_width ? -body_width - block_width + block_offset_right : x;
			var y_clone = block_offset_bottom > body_height ? -body_height - block_height + block_offset_bottom : y;

			var $clone = $block.clone().addClass('clone');

			$clone.css({'left': x_clone, 'top': y_clone }).appendTo('body');
		}

	});


});