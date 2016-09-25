angular.module('BlogPostsList', [])
.controller('BlogPostsListController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/posts/posts.json').success(function(data) {
    $scope.posts = data.posts;
  });
}]);
