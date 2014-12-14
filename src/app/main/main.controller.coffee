class Main
  constructor: (ImageRest) ->
    @images = ImageRest.getList()

Main.$inject = [ 'ImageRest' ]

module.exports = Main
