'use strict'
const config = require('../config')
const store = require('../store')

const addNewAlbum = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/albums',
    method: 'POST',
    data: formData
  })
}

const getLibrary = () => {
  return $.ajax({
    url: config.apiUrl + '/albums',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET',
    data: {
      user: store.id
    }
  })
}

const updateAlbum = function (formData, albumId) {
<<<<<<< HEAD
  console.log(formData, albumId)

=======
>>>>>>> MVP
  return $.ajax({
    url: config.apiUrl + '/albums/' + albumId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}

const deleteAlbum = (albumId) => {
  return $.ajax({
    url: config.apiUrl + '/albums/' + albumId,
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
