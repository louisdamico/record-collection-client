'use strict'
const store = require('../store')
const events = require('./events')

<<<<<<< HEAD
$('.add-album').hide()
$('#sign-out').hide()
$('#album-catolog').hide()
$('.certified-pw').hide()
=======
// hide till signed in
$('.pw-signout').hide()
$('.collection').hide()
$('.add-album').hide()
>>>>>>> MVP

const signUpSuccess = function () {
  $('#log-message').text('All Signed up!').show()
  $('form').trigger('reset')
<<<<<<< HEAD
  $('#sign-up').hide()
=======
>>>>>>> MVP
}

const signUpFailure = function () {
  $('#log-message').text('Try A Different Email').show()
}
const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
<<<<<<< HEAD
  $('#log-message').text('Loged In').show()
  $('#album-catolog').show()
  $('.certified-pw').hide()
  $('.add-album').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#login').hide()
=======
  $('#message').text('Loged In').show()
  $('.login-signup').hide()
  $('.collection').show()
  $('.pw-signout').show()
  $('.add-album').show()
>>>>>>> MVP
}

const signInFailure = function () {
  $('#log-message').text('OOPS...Sign In').show()
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#log-message').text('Password changed').show()
}

const changePasswordFailure = function () {
  $('#change-pw').text('oops...Try Again').show()
}

const signOutSuccess = function (response) {
  store.user = response
<<<<<<< HEAD
  $('#log-message').text('Signed Out Successfully').show()
=======
  $('#message').text('Signed Out Successfully').show()
  $('#addAlbum-message').hide()
  $('.login-signup').show()
  $('.pw-signout').hide()
  $('.collection').hide()
  $('.add-album').hide()
>>>>>>> MVP
  $('.content').empty()
  $('#sign-in').show()
  $('#sign-up').show()
}

const signOutFailure = function () {
  $('#log-message').text('Signed Out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
