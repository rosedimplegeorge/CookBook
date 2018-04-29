const mongoose = require('mongoose')
const userSchema = require('../schemas/userSchema')

const User = mongoose.model('user', userSchema)

module.exports = User