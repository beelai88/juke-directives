'use strict';

// juke.controller('PlayerCtrl', function ($scope, $rootScope, PlayerFactory) {

//   angular.extend($scope, PlayerFactory); // copy props from param2 to param1

//   $scope.toggle = function () {
//     if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
//     else PlayerFactory.resume();
//   };

//   $scope.getPercent = function () {
//     return PlayerFactory.getProgress() * 100;
//   };

// });


juke.directive('myPlayer', function(PlayerFactory){
	return {
		restrict: 'E', 
		templateUrl: 'js/player/templates/player.html',
		link: function(scope, element, attributes) {
			angular.extend(scope, PlayerFactory);
		  	scope.toggle = function() {
	      		if (PlayerFactory.isPlaying()) PlayerFactory.pause();
	      		else PlayerFactory.resume();
	  		};
	  		scope.getPercent = function () {
    			return PlayerFactory.getProgress() * 100;
			};
		}
	}
})