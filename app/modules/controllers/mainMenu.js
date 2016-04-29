'use strict';
angular.module('app')

  .controller('mainMenuController', function($scope, $location, $mdToast) {

    // shows how to use angular material service
    $mdToast.show($mdToast.simple({position: 'top'}).content('Welcome Back!'));

    // Use location to change page instead of a href in the template

    $scope.openPath = function(somepath) {
      $location.path(somepath);
    }

    $scope.taskOptions = [
      {
        title: 'Manage Existing Site',
        path: '/managesite'
      },{
        title: 'Create New Site',
        path: '/createsite'
      },{
        title: 'Help',
        path: '/help'
      }

    ];

  });
