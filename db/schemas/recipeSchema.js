const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ingredientSchema = require('./ingredientSchema')
const reviewSchema = require('./reviewSchema')

const recipeSchema = new Schema ({
    title: String,
    type: String,
    ingredients:[ingredientSchema],
    reviews:[reviewSchema]
})

module.exports = recipeSchema
