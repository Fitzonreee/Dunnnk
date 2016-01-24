"use strict";

var app = angular.module('dunnnk', [
    'dunnnk.controllers',
    'dunnnk.filters',
]);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {controller: "ShotsListCtrl", templateUrl: "partials/home.html"})
  .when("/shots/:id", {controller: "ShowCtrl", templateUrl: "partials/show.html"})
  .when("/user/:id", {controller: "ShowCtrl", templateUrl: "partials/profile.html"})
  .otherwise({redirectTo: "/"})
})
