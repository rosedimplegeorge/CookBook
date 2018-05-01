const { Schema } = require('mongoose')

const ReviewSchema = new Schema({
    reviewerName: String,
    comment: String
})

const IngredientSchema = new Schema({
    ingredientName: String,
    quantity: Number,
    unit: String
})

const RecipeSchema = new Schema({
    title: String,
    type: String,
    ingredients: [IngredientSchema],
    reviews: [ReviewSchema]
})

const UserSchema = new Schema({
    userName: String,
    recipes: [RecipeSchema]
})

module.exports = {
    UserSchema,
    RecipeSchema,
    IngredientSchema,
    ReviewSchema
}