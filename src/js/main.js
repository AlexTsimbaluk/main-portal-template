$(document).on('ready', function() {
	'use strict';
	
	$('.toggle-nav').on('click', function(e) {
		// $('.header .nav-header').slideToggle(100);
		if(!$('body').hasClass('menu-visible')) {
			$('body').addClass('menu-visible');
		}
		else {
			$('body').removeClass('menu-visible');
		}
	});
});