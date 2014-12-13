mainCtrl = require "./main.controller"
imageService = require "images.service"

module.exports = angular.module "testApp.main", []
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state "home",
      url: "/"
      templateUrl: "app/main/main.html"
      controller: "MainCtrl as main"

  $urlRouterProvider.otherwise "/"

.controller "MainCtrl", mainCtrl
.factory "ImageRest", imageService
