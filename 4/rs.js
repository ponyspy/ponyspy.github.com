var fs = require('fs');


var tiles_count = fs.readdirSync('.').length;
var tiles_on_row = Math.ceil(5120/100);

for (var i = 0; i <= tiles_count - 2; i++) {
	var x = ~~(i / tiles_on_row);
	var y = i % tiles_on_row;
	fs.renameSync('./' + i + '.jpg', './' + x + 'x' + y + '.jpg');
};