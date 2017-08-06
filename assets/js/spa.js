angular.module('SailsTest', []);
angular.module('SailsTest').controller('BaseCtrl',

	['$scope', '$http', function ($scope, $http){

		//$http.get('/item').then(function(response){
			//$scope.items = response.data;
		//});

		io.socket.get('/item', function(data){
			$scope.items = data;
			$scope.$apply();
		});

		io.socket.on('item', function (event){
			switch (event.verb){
				case 'created':
					$scope.items.push(event.data);
					$scope.$apply();
					break;
			}
		});

	}]

);