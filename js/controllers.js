'use strict';

var controllers = angular.module('dunnnk.controllers', []);

controllers.controller('AppCtrl', function($scope) {
  $scope.name = "Kevin";
})

// Working with the Dribbble API

controllers.controller('ShotsListCtrl', function($scope, $http) {
  $http.jsonp('https://api.dribbble.com/v1/shots?callback=JSON_CALLBACK&access_token=f40087a1b5e7d5c99a63eb635b7dc264c5af09f011e344a6611a928a3020e581').then(function(data) {
    $scope.list = data.data;
    console.log(data);
  })
})
