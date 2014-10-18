var fs = require('fs');

var original_image_width = 2560;
var tile_image_width = 100;

var tiles_count = fs.readdirSync('.').length;
var tiles_on_row = Math.ceil(original_image_width/tile_image_width);

for (var i = 0; i <= tiles_count; i++) {
	var x = ~~(i / tiles_on_row);
	var y = i % tiles_on_row;
	fs.renameSync('./' + i + '.jpg', './' + x + 'x' + y + '.jpg');
};