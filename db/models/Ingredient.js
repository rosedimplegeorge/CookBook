const mongoose = require('mongoose')
const Schema = require('../schema.js')

const Ingredient = mongoose.model('Ingredient', Schema.IngredientSchema)

module.exports = Ingredient