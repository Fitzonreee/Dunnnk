'use strict';

var filters = angular.module('dunnnk.filters', []);

filters.filter('dunnnkDate', function($filter) {
  return function(value, format) {
    console.log(value, format);
    if (value) {
      value = Date.parse(value);
    }
    return $filter('date')(value, format);
  }
})
