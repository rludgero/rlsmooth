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
			down: 500, // ms default settings for slide down effect speed
			up: 500 // ms default settings for slide up effect speed

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

			slideout : function() {
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

			slidehide : function() {
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

			fadeup : function() {
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

			fadehide : function() {
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

			showhide : function() {
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

			showup : function() {
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

			showout : function() {
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