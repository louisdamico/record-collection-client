'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const albumEvents = require('./albums/events')
// const albumHandlebars = require('./templates/album-listing.handlebars')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#add-album').on('submit', albumEvents.onAddNewAlbum)
  $('#getAlbumsButton').on('click', albumEvents.onGetLibrary)
  $('.content').on('click', '.btn-outline-warning', albumEvents.onUpdateAlbum)
  $('.content').on('click', '.btn-outline-danger', albumEvents.onDeleteAlbum)
})
