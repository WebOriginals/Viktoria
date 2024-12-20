define(['dispatcher', 'skrollr', 'utils', "resize/breakpoint.store"], function(dispatcher, skrollr, utils, store) {

	"use strict";
	var instance;
	var firstScrollCurrent = false;


	var _handleChange = function() {
	}

	var init = function() {
		var breakpoint = store.getData().breakpoint.name;
		if (breakpoint === 'tablet' || breakpoint === 'mobile') {
			return
		};

		var isTouchDevice = 'ontouchstart' in document.documentElement;

		if (Modernizr && !Modernizr.opacity) return;
		if (isTouchDevice) return;

		instance = skrollr.init({
			forceHeight: false,
			smoothScrolling: false,
			smoothScrollingDuration: 0,
			mobileCheck: function() {
				return false;
			}
		});


		dispatcher.subscribe(function(e) {
			var pos;
			var speed = 500;
			if (e.type === 'scroll-to') {
				if (e.hasOwnProperty('speed') && typeof e.speed === 'number') {
					speed = e.speed;
				}
				if (e.hasOwnProperty('position') && typeof e.position === 'number') {
					pos = e.position;
					instance.animateTo(pos, {
						duration: speed,
						easing: 'outCubic'
					});
				} else if (e.hasOwnProperty('element')) {
					pos = utils.offset(e.element).top;
					instance.animateTo(pos, {
						duration: speed,
						easing: 'outCubic'
					});
				}
			}

			if (e.type === 'total-reset') {
				instance.refresh();
			}
 		});
	}

	return {
		init: init
	}
});