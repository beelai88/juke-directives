'use strict';

juke.controller('SongChooseCtrl', function ($scope, SongFactory) {

  $scope.songs = [];

  SongFactory.fetchAll()
  .then(function (songs) {
    $scope.songs = songs;
  });

  $scope.reset = function () {
    $scope.toAdd = null;
  };

  $scope.addIt = function () {
    $scope.addSong($scope.toAdd)
    .then(function () {
      $scope.reset();
    });
  };

});

juke.directive('songList',function(){
  return {
    restrict: 'E',
    templateUrl: 'js/song/templates/song.html', 
    scope: {
      songType: '@'
    }, 
    link: function(scope){
      console.log(scope)
      // if(scope.albums ==='playlist.songs') scope.allSongs = scope.$parent.playlist.songs; 
      // if(scope.albums ==='album.songs') scope.allSongs = scope.$parent.$parent.artist.albums
      // if(scope.albums ==='artist.songs') scope.allSongs = scope.$parent.$parent.artist.albums

    }
  }
})