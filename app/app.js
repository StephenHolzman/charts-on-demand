'use strict';

var angular = require('angular');
require('angular-route');
require('angular-material');
var _templateBase = './templates';

var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngMaterial']);

var index = require('./modules/index');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: _templateBase + '/index.html',
    controller: 'indexController',
  });

  $routeProvider.when('/memory', {
    templateUrl: _templateBase + '/memory.html',
    controller: 'memoryController',
  });

  $routeProvider.when('/cards', {
    // html alsoo works directly
    templateUrl: _templateBase + '/cards.html',
    controller: function($scope) {
      $scope.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
    }
  });

  $routeProvider.otherwise({ redirectTo: '/' });

}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('charts-on-demand', {
    '50': '333333',
    '100': '333333',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': '333333',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('charts-on-demand',{
      'default': '400'
    })
});
