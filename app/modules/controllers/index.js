'use strict';
angular.module('app')

  .controller('indexController', function($scope, $location, $mdToast) {

    // shows how to use angular material service
    $mdToast.show($mdToast.simple({position: 'top'}).content('Welcome Back!'));

    // Use location to change page instead of a href in the template
    $scope.openUploadChart = function() {
      $location.path('/uploadchart');
    };

    $scope.openCards = function() {
      $location.path('/cards');
    };

    $scope.openPath = function(somepath) {
      $location.path(somepath);
    }

    $scope.taskOptions = [
      {
        title: 'Write a New Post',
        path: '/newpost'
      },{
        title: 'Edit an Old Post',
        path: '/editpost'
      },{
        title: 'Manage Published Posts',
        path: '/publishposts'
      },{
        title: 'Create a New Chart',
        path: '/uploadchart'
      },{
        title: 'Edit an Old Chart',
        path: '/editchart'
      },

    ];
  });
