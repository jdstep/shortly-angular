angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  /* INSERT SCOPE CODE HERE NOW


  INSERT LINKS CODE */

  $scope.data = {};

  $scope.getLinks = function() {
    Links.getServerLinks()
      .then(function (links) {
        $scope.data['links'] = links.data;
        checkAllLinkData($scope.data.links);
        console.log($scope.data.links);
      });
  };
  $scope.allLinks = [];
  var checkAllLinkData = function(links) {
    for (var i = 0; i < links.length; i++){
      $scope.allLinks.push({
        url: links[i].url,
        title: links[i].title,
        code: links[i].code
      });
    }
  };
  $scope.getLinks();
});
