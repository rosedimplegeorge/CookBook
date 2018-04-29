const mongoose = require('mongoose')
const recipeSchema = require('../schemas/recipeSchema')

const Recipe = mongoose.model('recipe', recipeSchema)

module.exports = Recipe
