'use strict';
var remote = require('remote');
var dialog = remote.require('electron').dialog;
var exec = require('child_process').exec;
//var shell = require('shelljs')

angular.module('app')

  .controller('mainMenuController', function($scope, $location, $mdToast, parameters) {

    // shows how to use angular material service
    //$mdToast.show($mdToast.simple({position: 'top'}).content('Welcome Back!'));

    // Use location to change page instead of a href in the template

    $scope.openPath = function(somepath,method) {

      if(method === 'selectDirectory'){
          $scope.parameters = parameters;
          $scope.parameters.siteDirectory = dialog.showOpenDialog({ properties: [ 'openDirectory' ],
            title: 'Select the Folder Containing Jekyll Site'
          });
          exec('bundle exec guard',{cwd:$scope.parameters.siteDirectory[0]},function(){})   

      }else if(method === 'createDirectory'){
          $scope.parameters = parameters;
          $scope.parameters.siteDirectory = dialog.showOpenDialog({ properties: [ 'openDirectory','createDirectory' ]})
          exec('cd '+$scope.parameters.siteDirectory[0],function(){});
          console.log('cd '+$scope.parameters.siteDirectory[0])
          exec('mkdir randomdirect',{cwd:$scope.parameters.siteDirectory[0]},function(){})   
      }
      $location.path(somepath);


    };

    $scope.taskOptions = [
      {
        title: 'Manage Existing Site',
        path: '/managesite',
        method: 'selectDirectory'
      },{
        title: 'Create New Site',
        path: '/createsite',
        method: 'createDirectory'
      },{
        title: 'Help',
        path: '/help',
        method: 'none'
      }

    ];

  });
