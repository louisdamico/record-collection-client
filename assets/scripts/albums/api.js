'use strict'
const config = require('../config')
const store = require('../store')

const addNewAlbum = function (formData) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/albums',
    method: 'POST',
    data: formData
  })
}

const getLibrary = function () {
  return $.ajax({
    url: config.apiUrl + '/albums'
  })
}

module.exports = {
  addNewAlbum,
  getLibrary
}
