const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    reviewerName: String,
    comment: String
})

module.exports = reviewSchema