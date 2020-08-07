'use strict'
const store = require('../store')
const events = require('./events')

$('.add-album').hide()
$('#sign-out').hide()
$('#album-catolog').hide()
$('.certified-pw').hide()

const signUpSuccess = function () {
  $('#log-message').text('All Signed up!').show()
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#log-message').text('Try A Different Email').show()
}
const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
  $('#log-message').text('Loged In').show()
  $('#album-catolog').show()
  $('.certified-pw').hide()
  $('.add-album').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#login').hide()
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
  $('#log-message').text('Signed Out Successfully').show()
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
