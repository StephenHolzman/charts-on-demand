'use strict';

var jetpack = require('fs-jetpack');

angular.module('app')
  .directive('homeButton', function($location) {
    return {
      templateUrl: 'templates/components/home-button.html',
      restrict: 'E',
      link: function($scope) {
        $scope.goHome = function() {
          $location.path('/');
          var obj = { greet: "Hello World!" };
          jetpack.write('/Users/Birdy/Desktop/file.json', obj);
        };
      }
    };
  });
