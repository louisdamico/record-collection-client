'use strict'
const store = require('../store')
const events = require('./events')

// hide till signed in
$('.pw-signout').hide()
$('.collection').hide()
$('.add-album').hide()

const signUpSuccess = function () {
  $('#message').text('All Signed up!').show()
  $('form').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Try A Different Email').show()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
  $('#message').text('Loged In').show()
  $('#message').delay(2500).slideUp(750)
  $('.login-signup').hide()
  $('.collection').show()
  $('.pw-signout').show()
  $('.add-album').show()
}

const signInFailure = function () {
  $('#message').text('Oops...Sign In').show()
}
const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Password changed').show()
}

const changePasswordFailure = function () {
  $('#change-pw').text('oops...Try Again').show()
}
const signOutSuccess = function (response) {
  store.user = response
  $('#message').text('Signed Out Successfully').show()
  $('#message').delay(2500).slideUp(750)
  $('#addAlbum-message').hide()
  $('#album-catolog').hide()
  $('.login-signup').show()
  $('.pw-signout').hide()
  $('.collection').hide()
  $('.add-album').hide()
  $('.content').empty()
}

const signOutFailure = function () {
  $('#message').text('Oop...Sign Out Again')
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
