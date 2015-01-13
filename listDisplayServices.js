angular.module('listDisplay')
	.factory('viewMode', function(){

		var viewMode = {};

		viewMode.view = {
			list:true,
			grid:false,
			column:false
		};

		viewMode.setView = function(setting) {

			_.each(viewMode.view, checkView);

			function checkView(value, key, list) {
				if (key === setting) {
					list[key] = true
				} else {
					list[key] = false
				}
			}
		};

		return viewMode;

	});