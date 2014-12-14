mainCtrl = require "./main.controller"
imageService = require "images.service"
imageModalCtrl = require "image-modal/image-modal.controller"

module.exports = angular.module "testApp.main", []
.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state "home",
      url: "/"
      templateUrl: "app/main/main.html"
      controller: "MainCtrl as main"

  $urlRouterProvider.otherwise "/"

.controller "MainCtrl", mainCtrl
.controller "ImageModalCtrl", imageModalCtrl
.factory "ImageRest", imageService
