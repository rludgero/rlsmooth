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

(function( $ ) {

	$.fn.rlSmooth = function(method, options) {

		var $this = $(this);

		var settings = $.extend({

			y: 0, //ms default settings for vertical window position
			on: 500, // ms default settings effect speed
			off: 500 // ms default settings effect speed

		}, options);

		var fxs = {

			init : function() { // defaults settings
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.slideDown(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			slide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.slideDown(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			slideOut : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.slideDown(settings.on);
						}
						else {
							$this.fadeOut(settings.off);
						}

					});

				});
			},

			slideHide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.slideDown(settings.on);
						}
						else {
							$this.hide(settings.off);
						}

					});

				});
			},

			fade : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.fadeIn(settings.on);
						}
						else {
							$this.fadeOut(settings.off);
						}

					});

				});
			},

			fadeUp : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.fadeIn(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			fadeHide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.fadeIn(settings.on);
						}
						else {
							$this.hide(settings.off);
						}

					});

				});
			},

			showHide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.show(settings.on);
						}
						else {
							$this.hide(settings.off);
						}

					});

				});
			},

			showUp : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.show(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			showOut : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.y) {
							$this.show(settings.on);
						}
						else {
							$this.fadeOut(settings.off);
						}

					});

				});
			}

		};

	 // Method calling logic
		if ( fxs[method] ) {
			return fxs[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return fxs.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.smooth' );
		}

	};


})( jQuery );