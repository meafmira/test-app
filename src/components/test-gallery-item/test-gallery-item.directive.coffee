module.exports = ->
  templateUrl: "components/test-gallery-item/test-gallery-item.html"
  require: "^testGallery"
  scope: {
    wrappedImage: '=image'
    $index: '=index'
  }
  link: (scope, element, attrs, testGallery) ->
    scope.$showImage = testGallery.showImage
    scope.$deleteImage = testGallery.deleteImage
