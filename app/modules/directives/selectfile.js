'use strict';
var remote = require('remote');
var dialog = remote.require('electron').dialog;
var AWS = require('aws-sdk'); 
var jetpack = require('fs-jetpack');

angular.module('app')
  .directive('selectfileButton', function($location) {
    return {
      templateUrl: 'templates/components/selectfile-button.html',
      restrict: 'E',
      link: function($scope, parameters) {
        $scope.selectFile = function() {
          $scope.parameters = parameters;
          console.log($scope.parameters.localFilePath);
          $scope.parameters.localFilePath = dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory' ]});
          console.log($scope.parameters.localFilePath);
        };
      }
    };
  });
