'use strict'
const store = require('../store')
const events = require('./events')
const api = require('./api')
const showAlbumTemplate = require('../templates/album-listing.handlebars')

const addNewAlbumSuccess = (data) => {
  $('#addAlbum-message').text('Album Added To Your Catalog')
}
const addNewAlbumFailure = () => {
  $('#addAlbum-messaage').text('Unsuccessful, Try Again')
}
const getLibrarySuccess = (data) => {
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('.content').empty()
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
