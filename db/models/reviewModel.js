const mongoose = require('mongoose')
const reviewSchema = require('../schemas/reviewSchema')

const Review = mongoose.model('review', reviewSchema)

module.exports = Review