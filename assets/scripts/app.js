'use strict'

const authEvents = require('./auth/events')
const albumEvents = require('./albums/events')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.add-album').on('submit', albumEvents.onAddNewAlbum)
  $('.add-new-album').on('click', albumEvents.onAddAlbumModal)
  $('#getAlbumsButton').on('click', albumEvents.onGetLibrary)
  $('#content').on('submit', '.partial-update-album', albumEvents.onUpdateAlbum)
  $('#content').on('click', '.delete-album', albumEvents.onDeleteAlbum)
})
