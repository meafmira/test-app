module.exports = ->
  controller: "TestGalleryCtrl as main"
  templateUrl: (elem, attr) ->
    "components/test-gallery/test-gallery.html"
  scope:
    data: '='
    autoRotate: '='
