angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url: ''};

  $scope.addLink = function() {
    Links.addServerLink($scope.link.url)
  };
});
