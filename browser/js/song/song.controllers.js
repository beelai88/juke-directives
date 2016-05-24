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

juke.directive('songList',function(PlayerFactory, ArtistFactory, AlbumFactory){
  return {
    restrict: 'E',
    scope: {
      list: '='
    }, 
    templateUrl: '/js/song/templates/song.html', 
    
    link: function(scope){
      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, $scope.playlist.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };      
      // if(scope.albums ==='playlist.songs') scope.allSongs = scope.$parent.playlist.songs; 
      // if(scope.albums ==='album.songs') scope.allSongs = scope.$parent.$parent.artist.albums
      // if(scope.albums ==='artist.songs') scope.allSongs = scope.$parent.$parent.artist.albums

    }
  }
})