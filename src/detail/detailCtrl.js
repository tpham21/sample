angular.module('sampleModule')
	.controller('detailCtrl',['$scope','$route','dataService',function($scope,$route,dataService){
		$scope.data = dataService.getDataOf($route.current.params.ID);
		 $scope.pages = [];
		 var i=1;
		 $scope.data['chapter']['pages'].forEach(function(item){
			 $scope.pages.push({thumb: item, img: item, description: 'Page '+i});
		 });
	}]);