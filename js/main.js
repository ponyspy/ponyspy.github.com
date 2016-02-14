$(document).ready(function() {

	$(document)
		.on('scroll', function() {
			var $this = $(this);
			var scroll_top = $this.scrollTop();
			var body_offset = $('.content_body').offset().top;
			var document_height = $this.height();
			var scroll_persent = scroll_top / (document_height - body_offset) * 100;

			scroll_persent >= 0
				? $('.photo_inner').css('background-size', 100 + scroll_persent + '%')
				: false;


			$(window).scrollTop() == $(document).height() - $(window).height()
				? $('.other:first').clone().insertAfter('.other:last')
				: false;
		});
});