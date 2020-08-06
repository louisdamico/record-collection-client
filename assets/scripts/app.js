'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
const albumEvents = require('./albums/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authentication:
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#add-album').on('submit', albumEvents.onAddNewAlbum)
  $('#getAlbumsButton').on('click', albumEvents.onGetLibrary)
})
