main = require "./main"
testGallery = require "test-gallery"

angular.module "testApp", [
  "ngAnimate"
  "ngTouch"
  "ngSanitize"
  "restangular"
  "ui.router"
  "angular-loading-bar"
  main.name
  testGallery.name
]
