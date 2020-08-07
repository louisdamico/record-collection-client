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
}

const signInFailure = function () {
  $('#message').text('OOPS...Sign In').show()
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
  $('.content').empty()
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
