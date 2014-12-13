class Main
  constructor: (ImageRest, $q) ->
    @sortBy = "title"
    @pagination = 5
    @currentPage = 1
    ImageRest.getList().then (images) =>
      deferImages = images.map (image) ->
        image.date = new Date image.date
        deffered = $q.defer()
        img = new Image()
        img.onload = ->
          deffered.resolve { image: image, noImage: false }
        img.onerror = ->
          deffered.resolve { image: image, noImage: true }
        img.src = image.url
        deffered.promise
      @deferImages = $q.all(deferImages).then (wrappedImages) =>
        @totalItems = wrappedImages.length
        @wrappedImages = wrappedImages
      @sort()
      @pageChanged()

  sort: =>
    @deferImages.then (wrappedImages) =>
      comparators =
        date: (wrappedImage1, wrappedImage2) ->
          date1 = wrappedImage1.image.date
          date2 = wrappedImage2.image.date
          if date1.getTime() < date2.getTime() then -1 else 1
        title: (wrappedImage1, wrappedImage2) ->
          wrappedImage1.image.title.localeCompare wrappedImage2.image.title

      @wrappedImages = wrappedImages.sort comparators[@sortBy]

    @pageChanged()

  pageChanged: =>
    @deferImages.then (wrappedImages) =>
      @wrappedImages = wrappedImages.filter (wrappedImage, index) =>
        @currentPage * @pagination > index >= (@currentPage - 1) * @pagination

Main.$inject = [ 'ImageRest', '$q' ]

module.exports = Main
