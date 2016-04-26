'use strict';
var dialog = require('electron').dialog;
var AWS = require('aws-sdk'); 
var jetpack = require('fs-jetpack');

angular.module('app')

  .controller('indexController', function($scope, $location, $mdToast) {

    // shows how to use angular material service
    $mdToast.show($mdToast.simple({position: 'top'}).content('Welcome Back!'));

    // Use location to change page instead of a href in the template
    $scope.openMemory = function() {
      //$location.path('/memory');
      console.log(dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]}));


      /*var uploadFile = jetpack.read(uploadFilePath);

      var s3 = new AWS.S3(); 

       s3.createBucket({Bucket: 'randomBucket45670'}, function() {

        var params = {Bucket: 'randomBucket45670', Key: 'myKey', Body: uploadFile};

        s3.putObject(params, function(err, data) {

            if (err)       

                console.log(err)     

            else       console.log("Successfully uploaded data to myBucket/myKey");   

         });

      });
*/
    };

    $scope.openCards = function() {
      $location.path('/cards');
    };
  });
