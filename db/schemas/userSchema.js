const mongoose = require('mongoose');
const Schema = mongoose.Schema
const recipeSchema = require('./recipeSchema')

const userSchema = new Schema ({
    userName: String,
    recipes: [recipeSchema]
})

module.exports = userSchema

