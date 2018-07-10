var mypro = angular.module("mypro", ["ngRoute"]);
mypro.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html",
        controller : 'myController'
    })
  })
