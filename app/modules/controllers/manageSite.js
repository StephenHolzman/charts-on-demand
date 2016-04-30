'use strict';
angular.module('app')

  .controller('manageSiteController', function($scope, $location, $mdToast, parameters) {

    // Use location to change page instead of a href in the template
    $scope.parameters = parameters;
    
    $scope.openPath = function(somepath) {
      $location.path(somepath);
    }

    $scope.taskOptions = [
      {
        title: 'Write a New Post',
        path: '/writepost'
      },{
        title: 'Edit an Old Post',
        path: '/editpost'
      },{
        title: 'Manage Published Posts',
        path: '/publishpost'
      },{
        title: 'Edit About Page',
        path: '/editabout'
      }

    ];

  });
