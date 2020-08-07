'use strict'
const store = require('../store')
const events = require('./events')
const showAlbumTemplate = require('../templates/album-listing.handlebars')

const addNewAlbumSuccess = (data) => {
  console.log(data)
  $('#addAlbum-message').text('Album Added To Your Catalog')
}

const getLibrarySuccess = (data) => {
  console.log(data)
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('.content').empty()
  $('.content').append(showAlbumHtml)
}

const updateAlbumSuccess = (data) => {
  console.log(data)
  const showAlbumHtml = showAlbumTemplate({ albums: data.album.id })
  $('#updateAlbum-message').text('Album Updated')
  $('.content').text(showAlbumHtml)
}

const deleteAlbumSuccess = (event) => {
  $('.content').empty()
  console.log('Album Deleted')
}
module.exports = {
  addNewAlbumSuccess,
  getLibrarySuccess,
  updateAlbumSuccess,
  deleteAlbumSuccess
}
