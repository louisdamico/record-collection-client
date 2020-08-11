'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onAddNewAlbum = function (event) {
  event.preventDefault()
  const data = event.target
  const formData = getFormFields(data)
  api.addNewAlbum(formData)
    .then(() => onGetLibrary(event))
    .then(ui.addNewAlbumSuccess)
    .catch(ui.addNewAlbumFailure)
}

const onAddAlbumModal = function (event) {
  event.preventDefault()
  $('#fullHeightModalRight').on('click')
}

const onGetLibrary = (event) => {
  event.preventDefault()
  api.getLibrary()
    .then(ui.getLibrarySuccess)
    .catch(ui.getLibraryfailure)
}

const onUpdateAlbum = function (event) {
  event.preventDefault()
  const data = event.target
  const formData = getFormFields(data)
  const albumId = $(event.target).closest('section').data('id')
  api.updateAlbum(formData, albumId)
    .then(ui.updateAlbumSuccess)
    .catch(ui.updateAlbumFailure)
}

const onDeleteAlbum = function (event) {
  event.preventDefault()
  const albumId = $(event.target).closest('section').data('id')
  api.deleteAlbum(albumId)
    .then(ui.deleteAlbumSuccess)
    .catch(ui.deleteAlbumFailure)
}
module.exports = {
  onAddNewAlbum,
  onAddAlbumModal,
  onGetLibrary,
  onUpdateAlbum,
  onDeleteAlbum
}
