const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = require('./userSchema')
const ingredientSchema = require('./ingredientSchema')
const reviewSchema = require('./reviewSchema')

const recipeSchema = new Schema ({
    title: String,
    type: String,
    createdBy: {userSchema},
    ingredients:[{ingredientSchema}],
    reviews:[{reviewSchema}]
})

module.exports = recipeSchema
