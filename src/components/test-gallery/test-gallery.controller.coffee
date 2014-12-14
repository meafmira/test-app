class TestGalleryCtrl
  constructor: (@$q, @$modal, @$cookies, @$scope, @$attrs) ->
    @$scope.$watch 'data', (data) =>
      if data?
        @init data

  init: (images) =>
    deletedImages = @$cookies.deletedImages
    if deletedImages?
      @deletedImages = deletedImages.split ','
    else
      @deletedImages = []
    @sortBy = "title"
    @pagination = 5
    @currentPage = 1
    @searchQuery = ''
    @totalItems = 0
    @$q.when(images).then (images) =>
      deferImages = images.map (image, index) =>
        image.date = new Date image.date
        deffered = @$q.defer()
        img = new Image()
        img.onload = ->
          deffered.resolve { id: index, image: image, noImage: false }
        img.onerror = ->
          deffered.resolve { id: index, image: image, noImage: true }
        img.src = image.url
        deffered.promise
      @deferImages = @$q.all(deferImages)
      @update()

  update: =>
    @deferImages
      .then (wrappedImages) => @_deletedImages wrappedImages
      .then (wrappedImages) => @_sort wrappedImages, @sortBy
      .then (wrappedImages) => @_search wrappedImages, @searchQuery
      .then (wrappedImages) =>
        @totalItems = wrappedImages.length
        @wrappedImagesWithoutPagination = wrappedImages
        @_paginate wrappedImages, @pagination, @currentPage
      .then (wrappedImages) =>
        @$scope.$images = wrappedImages
        @wrappedImages = wrappedImages

  showImage: (index) =>
    @$modal.open
      templateUrl: 'components/image-modal/index.html'
      controller: 'ImageModalCtrl as imageModal'
      resolve:
        wrappedImages: => @wrappedImagesWithoutPagination
        index: => index + @pagination * (@currentPage - 1)
        autoRotate: => @$scope.autoRotate

  deleteImage: (id) =>
    @deletedImages.push id.toString()
    @$cookies.deletedImages = @deletedImages.join ','
    @update()

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

  _deletedImages: (wrappedImages) =>
    if @deletedImages.length == 0
      wrappedImages
    else
      wrappedImages.filter (wrappedImage) =>
        wrappedImage.id.toString() not in @deletedImages


TestGalleryCtrl.$inject = [ '$q', '$modal', '$cookies', '$scope', '$attrs' ]

module.exports = TestGalleryCtrl
