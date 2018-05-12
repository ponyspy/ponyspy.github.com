$(function() {
	var $columns = $('.column');

	var debounce = function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	var scrollColumns = function(event) {
		var $this = $(this);
		var $columnsCheck = $columns.not(this);

		$columnsCheck.off('scroll.col');

		var scroll_percentage = $this.scrollTop() / ($this[0].scrollHeight - $this.height()) * 100;

		$columnsCheck.each(function() {
			var $this = $(this);

			$this.scrollTop(scroll_percentage * ($this[0].scrollHeight - $this.height()) / 100);
		});
	};

	$columns
		.on('scroll.col', scrollColumns)
		.on('scroll', debounce(function() {
			$(this).on('scroll.col', scrollColumns);
		}, 250, true));
});