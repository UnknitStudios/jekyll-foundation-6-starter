angular.module('BlogPostSearch', []).controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/posts/posts.json').success(function(data) {
    $scope.paginator.posts = data.posts;
  });
}]);
