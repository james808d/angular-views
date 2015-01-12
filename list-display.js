angular.module('listDisplay')

.directive('listDisplay', [function() {

	return {
		scope: {
			data: '=data',
			options: '=options',
			showtools: '='
		},
		templateUrl: function(tElement, tAttrs) {

			return tAttrs.templateUrl || '/angular-list-view/templates/list-display.html';
		},
		replace: true,
		controller: function($scope, $attrs, $state, viewMode){

			if($scope.options.fixView) {
				$scope.viewMode = {};
				if ($scope.options.fixView === 'grid') {
					$scope.viewMode.gridView = true;
				} else {
					$scope.viewMode.gridView = false;
				}

			} else {
				$scope.viewMode = viewMode;
			}

			if($scope.options.orderBy){
				$scope.listOrder = $scope.options.orderBy;
			} else {
				$scope.listOrder = 'name';
			}

			$scope.goto = function(item) {
				$state.go($scope.options.linkCell, {id:item._id});
			};

		}
	};
}])

.directive('listRow', [ function() {

	return {
		scope: {
			data: '=data',
			options: '=options'
		},
		replace:true,
		templateUrl: function(tElement, tAttrs) {

			return tAttrs.templateUrl || '/angular-list-view/templates/list-row.html';
		},
		link: function($scope, element, attrs) {
			$scope.item = $scope.data;
		}

	};

}])

.directive('gridItem', [ function() {

	return {
		scope: {
			data: '=data',
			options: '=options',
			templateUrl: '=templateUrl'
		},
		replace:true,
		templateUrl: function(tElement, tAttrs) {
			return tAttrs.templateUrl || '/angular-list-view/templates/tile.html';
		},
		link: function($scope, element, attrs) {
			$scope.item = $scope.data;
		}

	};

}]);