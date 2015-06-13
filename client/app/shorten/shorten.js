angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url: ''};
  $scope.addedLink = {};

  $scope.addLink = function(url) {
    $scope.link.url = url;
    Links.addServerLink($scope.link).then(function(linkData) {
      console.log(linkData);
      checkLinkData(linkData);
      // $scope.addedLink = linkData;
    });
  };

  var checkLinkData = function(linkObj) {
    for (var key in linkObj) {
      if (key === 'url' ||
          key === 'title' ||
          key === 'code') {
        $scope.addedLink[key] = linkObj[key];
      }
    }
  };
});
