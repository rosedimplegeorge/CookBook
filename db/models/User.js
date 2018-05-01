const mongoose = require('mongoose')
const Schema = require('../schema.js')

const User = mongoose.model('User', Schema.UserSchema)

module.exports = User