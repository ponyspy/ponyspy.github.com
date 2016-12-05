var current = 1;
var db = [
	{
		path: 'img/1.jpg',
		desc: '2016 / pokushal / privet wassia! privet wassia! privet wassia!'
	},
	{
		path: 'img/2.jpg',
		desc: '2015 / pospal / dlinno dlinno dlinno'
	},
	{
		path: 'img/3.jpg',
		desc: '2014 / ugadal / medlenno medlenno medlenno'
	},
	{
		path: 'img/4.gif',
		desc: '2013 / vstal / mashina / chi'
	},
	{
		path: 'img/5.jpg',
		desc: '2012 / cel / kokoko lalala'
	},
	{
		path: 'img/6.jpg',
		desc: '2012 / bee / um mu um mu'
	}
];

$(function() {
	$('.cv').on('click', function(e) {
		window.open('cv.html', '', 'width=360,height=500,left=200,top=200');
	});

	$('img').mousedown(function(){
		return false;
	});

	$('img').on('click', function() {
		$('img').attr('src', db[current].path);
		$('.marquee').children('span').text(db[current].desc);

		$('.current').text(current + 1);

		current == db.length - 1
			? current = 0
			: current += 1;
	});
});