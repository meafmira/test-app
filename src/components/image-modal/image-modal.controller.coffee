class ImageModal
  constructor: (@wrappedImages, @index) ->
    @index = index
    @currentWrappedImage = @wrappedImages[@index]

  prev: ->
    @index--
    @currentWrappedImage = @wrappedImages[@index]

  next: ->
    @index++
    @currentWrappedImage = @wrappedImages[@index]

ImageModal.$inject = [ 'wrappedImages', 'index' ]

module.exports = ImageModal
