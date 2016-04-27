angular.module('app')
  .controller('ScoreController', function($scope, score) {
    $scope.score = score;
    $scope.increment = function() {
      $scope.score.points++;
    };
  });