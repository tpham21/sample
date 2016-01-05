angular.module('sampleModule')
	.controller('listCtrl',['$scope','$route','$location','dataService',function($scope,$route,$location,dataService){
		 $scope.gridItems= {
                    enableColumnMenus: false,
                    showTreeRowHeader: false,
                    enableSorting: false,
					rowHeight:175,
					showHeader: false,
                    columnDefs: [
                        { field: 'image',displayName:'Item',width:180, enableHiding: false,cellTemplate:'<md-card style="padding: 5px 5px 5px 5px;"><img ng-src={{row.entity.image}}  class="md-card-image" height="100" width="100"></md-card>'},
                        { field: 'Description',cellTemplate:'<div layout="column" class="cell"><span class="md-headline"><strong>{{row.entity.Title}}</strong></span><span class="md-subhead"><strong>Price</strong>: ${{row.entity.price}}</span><span class="md-subhead"><strong>Description</strong><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp{{grid.appScope.limitSummary(row.entity.Description,3) +"..."}}</span><div><md-button ng-click="grid.appScope.onDetail(row)">Read Current Chapter</md-button></div></div>'}
                    ],
                    data:dataService.getAllData()
                };
		$scope.limitSummary = function(description, count){
			var index = getPosition(description,'.',count);
			return description.substring(0,getPosition(description,'.',count));		
		}		
		$scope.onDetail = function(row){
			$location.path('/detail/'+$scope.gridItems.data.indexOf(row.entity));
		}
		function getPosition(str, m, i) {
		return str.split(m, i).join(m).length;
		}
	}]);