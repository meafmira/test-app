mainCtrl = require "./main.controller"
testGallery = require "test-gallery"

module.exports = angular.module "testApp.main", [
  testGallery.name
]
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state "home",
      url: "/"
      templateUrl: "app/main/main.html"
      controller: "MainCtrl as main"

  $urlRouterProvider.otherwise "/"

.controller "MainCtrl", mainCtrl
