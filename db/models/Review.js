const mongoose = require('mongoose')
const Schema = require('../schema.js')

const Review = mongoose.model('Review', Schema.ReviewSchema)

module.exports = Review