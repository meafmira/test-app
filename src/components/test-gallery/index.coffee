testGalleryDirective = require "./test-gallery.directive"
testGalleryItemDirective = require "test-gallery-item/test-gallery-item.directive"
testGalleryCtrl = require "./test-gallery.controller"
imageService = require "images.service"
imageModalCtrl = require "image-modal/image-modal.controller"

module.exports = angular.module "test-gallery", [
  "ui.bootstrap"
  "ngCookies"
]

.controller "TestGalleryCtrl", testGalleryCtrl
.controller "ImageModalCtrl", imageModalCtrl
.directive "testGallery", testGalleryDirective
.directive "testGalleryItem", testGalleryItemDirective
.factory "ImageRest", imageService
