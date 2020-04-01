$(function() {

	var header = $("#header"),
		introH = $("intro").innerHeight(),
		scrollOffset = 0;

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		if ( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	});


});