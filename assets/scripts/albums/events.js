'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const api = require('../app')
// const store = require('../store')

const onAddNewAlbum = function (response) {
  event.preventDefault()
  const data = event.target
  const formData = getFormFields(data)
  console.log(formData)
  api.addNewAlbum(formData)
    .then(ui.addNewAlbumSuccess)
    .catch(ui.addNewAlbumFailure)
}

const onGetLibrary = (event) => {
  event.preventDefault()
  api.getLibrary()
    .then(ui.getLibrarySuccess)
    .catch(ui.getLibraryfailure)
}

module.exports = {
  onAddNewAlbum,
  onGetLibrary
}
