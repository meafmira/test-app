class ImageModal
  constructor: (@wrappedImages, @index, @autoRotate, @$timeout) ->
    @index = index
    @currentWrappedImage = @wrappedImages[@index]
    if @autoRotate?
      fn = =>
        @next()
        @$timeout fn, @autoRotate
      @$timeout fn, @autoRotate

  prev: ->
    if @index == 0
      @index = @wrappedImages.length - 1
    else
      @index--
    @currentWrappedImage = @wrappedImages[@index]

  next: ->
    if @index == @wrappedImages.length - 1
      @index = 0
    else
      @index++
    @currentWrappedImage = @wrappedImages[@index]

ImageModal.$inject = [ 'wrappedImages', 'index', 'autoRotate', '$timeout' ]

module.exports = ImageModal
