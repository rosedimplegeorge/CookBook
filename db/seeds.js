require('dotenv').config()

const User = require('../db/models/User')
const Recipe = require('../db/models/Recipe')
const Ingredient = require('../db/models/Ingredient')
const Review = require('../db/models/Review')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection

db.on('open',() => {
    console.log('Successfully Connected to the DB')
})
db.on('error',(error) => {
    console.log(error)
})

User.remove().then(() => {

        const rose = new User({
            userName: 'Rose'
        })
        const brownie = new Recipe({
            title: 'Brownie',
            type: 'Dessert'
        })
        const coco = new Ingredient({
            ingredientName: 'Cocopowder',
            quantity: 20,
            unit: 'ml'
        })
        const comment = new Review({
            reviewerName: 'Ethan',
            comment: 'Yummy'
        })
   

        brownie.ingredients.push(coco)
        brownie.reviews.push(comment)
        rose.recipes.push(brownie)

        return rose.save()
}).catch((error) =>{
    console.log('Error Seeding Data')
    console.log(error)
}).then(()=>{
    mongoose.connection.close()
    console.log('Finish Seeding Data - Disconnecting from DB')
})







