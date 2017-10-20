app.directive('portItem', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/portItem.html'
  };
});
