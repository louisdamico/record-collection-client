'use strict'
const store = require('../store')
const events = require('./events')
const api = require('./api')
const showAlbumTemplate = require('../templates/album-listing.handlebars')

// hide till get ablums
$('#album-catolog').hide()

const addNewAlbumSuccess = (data) => {
  $('form').trigger('reset')
  $('#addAlbum-message').show()
  $('#addAlbum-message').text('Album Added To Your Catalog')
  $('#addAlbum-message').delay(2500).slideUp(750)
}
const addNewAlbumFailure = (data) => {
  $('#addAlbum-message').show()
  $('#addAlbum-message').text('Oops...Title & Genre Required')
  $('#addAlbum-message').delay(2500).slideUp(750)
  $('form').trigger('reset')
}
const updateAlbumSuccess = () => {
  api.getLibrary()
    .then(getLibrarySuccess)
    .catch(function () {
      console.log('hello')
    })
}
const updateAlbumFailure = () => {
  $('#updateAlbum-message').text('Oops...Update Again')
}
const getLibrarySuccess = (data) => {
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('#album-catolog').show()
  $('.content').empty()
  // append must be stay on bottom
  $('.content').append(showAlbumHtml)
}
const getLibraryfailure = () => {
  $('.catolog-message').text('Opps...Try Again')
}
const deleteAlbumSuccess = (event) => {
  $('#deleteAlbum-message').text('Album DELETED')
  api.getLibrary()
    .then(getLibrarySuccess)
    .catch(function () {
      console.log('hello')
    })
}
const deleteAlbumFailure = () => {
  $('#deleteAlbum-message').text('Oops...Delete Again')
  $('#deleteAlbum-message').delay(2500).slideUp(750)
}

module.exports = {
  addNewAlbumSuccess,
  addNewAlbumFailure,
  getLibrarySuccess,
  getLibraryfailure,
  updateAlbumSuccess,
  updateAlbumFailure,
  deleteAlbumSuccess,
  deleteAlbumFailure
}
