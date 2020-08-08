'use strict'
const store = require('../store')
const events = require('./events')
const api = require('./api')
const showAlbumTemplate = require('../templates/album-listing.handlebars')

// hide till get ablums
$('#album-catolog').hide()

const addNewAlbumSuccess = (data) => {
  $('form').trigger('reset')
  $('#addAlbum-message').text('Album Added To Your Catalog')
}
const addNewAlbumFailure = (data) => {
  $('#addAlbum-message').show()
  $('#addAlbum-message').text('Oops...Title & Genre Required')
}
const getLibrarySuccess = (data) => {
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('#album-catolog').show()
  $('.content').empty()
  // append must be stay on bottom
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
  addNewAlbumFailure,
  getLibrarySuccess,
  updateAlbumSuccess,
  deleteAlbumSuccess
}
