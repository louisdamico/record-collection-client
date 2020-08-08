'use strict'
const store = require('../store')
const events = require('./events')
const api = require('./api')
const showAlbumTemplate = require('../templates/album-listing.handlebars')

const addNewAlbumSuccess = (data) => {
  $('form').trigger('reset')
  $('#addAlbum-message').text('Album Added To Your Catalog')
}

const getLibrarySuccess = (data) => {
  console.log(data)
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('.content').empty()
  $('.content').append(showAlbumHtml)
}

const updateAlbumSuccess = () => {
  api.getLibrary()
    .then(getLibrarySuccess)
    .catch(function () {
      console.log('hello')
    })
}

const deleteAlbumSuccess = (event) => {
  api.getLibrary()
    .then(getLibrarySuccess)
    .catch(function () {
      console.log('hello')
    })
}

module.exports = {
  addNewAlbumSuccess,
  getLibrarySuccess,
  updateAlbumSuccess,
  deleteAlbumSuccess
}
