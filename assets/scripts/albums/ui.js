'use strict'
const store = require('../store')
const events = require('./events')
const showAlbumTemplate = require('../templates/album-listing.handlebars')

const getLibrarySuccess = (data) => {
  console.log(data)
  const showAlbumHtml = showAlbumTemplate({ albums: data.album })
  $('.content').text(showAlbumHtml)
}

module.exports = {
  getLibrarySuccess

}
