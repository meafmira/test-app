class Main
  constructor: (ImageRest, $q, @$modal) ->
    @sortBy = "title"
    @pagination = 5
    @currentPage = 1
    @searchQuery = ''
    @totalItems = 0
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
        @wrappedImages = wrappedImages
      @update()

  update: =>
    @deferImages
      .then (wrappedImages) => @_sort wrappedImages, @sortBy
      .then (wrappedImages) => @_search wrappedImages, @searchQuery
      .then (wrappedImages) =>
        @totalItems = wrappedImages.length
        @_paginate wrappedImages, @pagination, @currentPage
      .then (wrappedImages) => @wrappedImages = wrappedImages

  showImage: (index) =>
    @$modal.open
      templateUrl: 'components/image-modal/index.html'
      controller: 'ImageModalCtrl as imageModal'
      resolve:
        wrappedImages: => @deferImages
        index: => index + @pagination * (@currentPage - 1)

  _sort: (wrappedImages, sortBy) =>
    comparators =
      date: (wrappedImage1, wrappedImage2) ->
        date1 = wrappedImage1.image.date
        date2 = wrappedImage2.image.date
        if date1.getTime() < date2.getTime() then -1 else 1
      title: (wrappedImage1, wrappedImage2) ->
        wrappedImage1.image.title.localeCompare wrappedImage2.image.title

    wrappedImages.sort comparators[sortBy]

  _paginate: (wrappedImages, pagination, currentPage) =>
    wrappedImages.filter (wrappedImage, index) =>
      currentPage * pagination > index >= (currentPage - 1) * pagination

  _search: (wrappedImages, searchQuery) =>
    if searchQuery == ''
      wrappedImages
    else
      wrappedImages.filter (wrappedImage) =>
        wrappedImage.image.title.toLocaleLowerCase().indexOf(searchQuery.toLocaleLowerCase()) != -1

Main.$inject = [ 'ImageRest', '$q', '$modal' ]

module.exports = Main
