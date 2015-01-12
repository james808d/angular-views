angular.module('listDisplay')
	.factory('viewMode', function(){

		var viewMode = {};
		viewMode.gridView = true;
		viewMode.toggleViewMode = function(){
			viewMode.gridView = !viewMode.gridView;
		};

		return viewMode;

	});