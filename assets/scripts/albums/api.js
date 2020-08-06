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
    url: config.apiUrl + '/albums',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: {
      user: store.user.id
    }
  })
}

const updateAlbum = function (formData) {
  const albumId = store.album.id
  console.log(albumId)
  return $.ajax({
    url: config.apiUrl + '/albums/' + albumId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}

const deleteAlbum = function () {
  return $.ajax({
    url: config.apiUrl + '/albums/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}
module.exports = {
  addNewAlbum,
  getLibrary,
  updateAlbum,
  deleteAlbum
}
