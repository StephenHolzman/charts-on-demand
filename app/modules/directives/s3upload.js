'use strict';
var remote = require('remote');
var dialog = remote.require('electron').dialog;
var AWS = require('aws-sdk'); 
var jetpack = require('fs-jetpack');

angular.module('app')
  .directive('twoButton', function($location) {
    return {
      templateUrl: 'templates/components/two-button.html',
      restrict: 'E',
      link: function($scope) {
        $scope.actionTwo = function() {
          //$location.path('/');
          var filePath = dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory' ]});
          console.log(filePath);
        };
      }
    };
  });
