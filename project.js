var app = window.app || {};

(function() {
	var project = app.project = {};
	
	project.init = function () {
	};
	
	Ti = window;
	Ti.App = document;
	Ti.include = function () {
		for (var i=0; i < arguments.length; ++i) {
			document.write('<script src="' + arguments[i] + '"><\/script>');
		}
	}
	
	if (navigator.splashscreen) navigator.splashscreen.hide();

	Modernizr.load = Modernizr.load || function (obj) {
		$.getScript(obj.load);
	}
	
})();

Ti.include(
	'file:///android_asset/www/utilities/utilities.js',
	'file:///android_asset/www/model/model.js',
	'file:///android_asset/www/view/view.js',
	'file:///android_asset/www/viewmodel/viewmodel.js'
);
