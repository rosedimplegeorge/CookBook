const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    ingredientName: String,
    quantity: Number,
    unit: String
})

module.exports = ingredientSchema