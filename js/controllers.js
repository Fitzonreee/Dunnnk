'use strict';

var controllers = angular.module('dunnnk.controllers', []);

controllers.controller('AppCtrl', function($scope) {
  $scope.name = "Kevin";
})

// Working with the Dribbble API

controllers.controller('ShotsListCtrl', function($scope, $http) {
  $http.jsonp('https://api.dribbble.com/v1/shots?callback=JSON_CALLBACK&access_token=f40087a1b5e7d5c99a63eb635b7dc264c5af09f011e344a6611a928a3020e581').then(function(data) {
    $scope.list = data.data;
  })
});

controllers.controller('ShowCtrl', function($scope, $http, $routeParams) {

  var id = $routeParams.id;

  $http.jsonp('https://api.dribbble.com/v1/shots/'+ id +'?callback=JSON_CALLBACK&access_token=f40087a1b5e7d5c99a63eb635b7dc264c5af09f011e344a6611a928a3020e581').then(function(data) {
    $scope.shot = data.data;
  })

  $http.jsonp('https://api.dribbble.com/v1/shots/'+ id +'/comments?callback=JSON_CALLBACK&access_token=f40087a1b5e7d5c99a63eb635b7dc264c5af09f011e344a6611a928a3020e581').then(function(comment_data) {
    $scope.comments = comment_data.data;
  })

  $http.jsonp('https://api.dribbble.com/v1/users/' + id + '?callback=JSON_CALLBACK&access_token=f40087a1b5e7d5c99a63eb635b7dc264c5af09f011e344a6611a928a3020e581').then(function(data) {
    $scope.user = data.data;
    console.log(data);
  })
});
