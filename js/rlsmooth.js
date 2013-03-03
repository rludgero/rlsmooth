/*
* Author: Rodrigo Ludgero http://rodrigoludgero.com/
*
* Description: A jQuery flowing effect plugin
*
* License: MIT licensed
*
* Project: jQuery rlSmooth Plugin https://github.com/Rodrigo-Ludgero
*
*
*/

(function( $ ){

$.fn.rlSmooth = function(options) {

 		var settings = $.extend({
	    y: 0, //ms default settings for vertical window position
	    down: 500, // ms default settings for slide down effect speed
	    up: 500 // ms default settings for slide up effect speed
    }, options);


 		return this.each(function() {

			var $this = $(this); // global object reference

 		  $(window).scroll(function() {
 		    if ($(window).scrollTop() > settings.y) {
 		      $this.slideDown(settings.down);
 		    }
 		    else {
 		      $this.slideUp(settings.up);
 		    }
 		  });
 	  });

 	};

})( jQuery );
