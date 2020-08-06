'use strict'
const store = require('../store')
const events = require('./events')

const signUpSuccess = function () {
  $('#message').text('All Signed up!').show()
  $('form').trigger('reset')
  $('#sign-up').delay(750).slideUp(750)
}
const signUpFailure = function () {
  $('#message').text('Try A Different Email').show()
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(store.user)
  $('form').trigger('reset')
  $('#message').text('Loged In').show()
  // $('#sign-up').delay(750).slideUp(750)
  // $('#sign-in').delay(100).slideUp(750)
}

const signInFailure = function () {
  $('#message').text('OOPS...Sign In').show()
}
const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Password changed').show()
  // $('#change-pw').show()
  // $('#change-pw').text('Changed Successfully')
  // $('#change-pw').delay(1000).slideUp(750)
  // $('#change-password').delay(1500).slideUp(750)
}

const changePasswordFailure = function () {
  // $('#change-pw').text('Loged In').show()
  $('#change-pw').text('oops...Try Again').show()
}
const signOutSuccess = function (response) {
  store.user = response
  $('#message').text('Signed Out Successfully').show()
  // $('#change-password').hide()
  // $('#sign-up').slideDown(750)
  // $('#sign-in').delay(500).slideDown(750)
  // $('#login').delay(3000).show('#login')
  // $('#change-pw').slideUp(700)
  // $('#sign-out').delay(750).slideUp(750)
  // $('#start-game').delay(500).slideUp(750)
}

const signOutFailure = function () {
  $('#message').text('Signed Out')
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
