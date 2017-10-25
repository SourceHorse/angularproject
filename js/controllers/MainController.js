app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books';
  $scope.promo = 'The most popular books this month.';
  $scope.projects = [
  {
    image: 'img/Tablet_Twitch.png',
    title: 'Twitch Viewer',
    description: 'This app uses the twitch.tv API to get information about streamers.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'JavaScript']
  },
  {
    image: 'img/Tablet_Wiki.png',
    title: 'Wikipedia Search',
    description: 'Use the MediaWiki API to search Wikipedia pages.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery']
  },
  {
    image: 'img/Tablet_Weather.png',
    title: 'Local Weather',
    description: 'Displays current weather conditions for the device\'s location.',
    languages: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery']
  }
];
}]);
