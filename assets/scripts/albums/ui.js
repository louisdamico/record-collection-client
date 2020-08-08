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
<<<<<<< HEAD
const addNewAlbumFailure = () => {
  $('#addAlbum-messaage').text('Unsuccessful, Try Again')
=======
const addNewAlbumFailure = (data) => {
  $('#addAlbum-message').show()
  $('#addAlbum-message').text('Oops...Title & Genre Required')
>>>>>>> MVP
}
const getLibrarySuccess = (data) => {
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('#album-catolog').show()
  $('.content').empty()
  // append must be stay on bottom
  $('.content').append(showAlbumHtml)
}

const getLibraryfailure = () => {
  $('#addAlbum-message').text('OOPS...Try Again')
}

const updateAlbumSuccess = () => {
  api.getLibrary()
    .then(getLibrarySuccess)
    .catch(function () {
      console.log('hello')
    })

}
const updateAlbumFailure = () => {
  $('#updateAlbum-message').text('OOPS...Try Again')

}
const deleteAlbumSuccess = (event) => {
  api.getLibrary()
    .then(getLibrarySuccess)
    .catch(function () {
      console.log('hello')
    })
}

const deleteAlbumFailure = () => {
  $('#updateAlbum-message').text('OOPS...Try Again')


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
