const mongoose = require('mongoose')
const ingredientSchema = require('../schemas/ingredientSchema')

const Ingredient = mongoose.model('ingredient', ingredientSchema)

module.exports = Ingredient