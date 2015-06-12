angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  /* INSERT SCOPE CODE HERE NOW


  INSERT LINKS CODE */

  $scope.data = {};

  $scope.getLinks = function() {
    Links.getServerLinks()
      .then(function (links) {
        $scope.data['links'] = links.data;
      });
  };

  $scope.getLinks();
});
