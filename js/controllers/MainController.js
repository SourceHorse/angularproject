app.controller('MainController', ['$scope', function($scope) {
  $scope.twitchview = {
    icon: 'img/Tablet_Twitch.png',
    title: 'Twitch Viewer'
  };

  $scope.wikisearch = {
    icon: 'img/Tablet_Wiki.png',
    title: 'Wikipedia Search'
  };

  $scope.weather = {
    icon: 'img/Tablet_Weather.png',
    title: 'Local Weather'
  };
}]);
