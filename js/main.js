$(document).ready(function() {
	var parent = $('.infinity');
	var max = parent[0].scrollHeight - parent[0].offsetHeight - 20;

	parent.on('scroll', function(event) {
	    var s = $(this).scrollTop(),
	        f = $('>:first', parent),l = $('>:last', parent);
	    if(s > max) {f.appendTo(parent); parent.scrollTop(s - f.height())}
	    if(s < 5) {l.prependTo(parent);parent.scrollTop(s + l.height()) }
	}).scrollTop(5);
});