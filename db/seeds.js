require('dotenv').config()
const mongoose = require('mongoose')

const Recipe = require('../db/models/recipeModel')

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection

db.on('open',() => {
    console.log('Successfully Connected to the DB')
})
db.on('error',(error) => {
    console.log(error)
})


const brownie = new Recipe({
    title: 'Brownie',
    type: 'dessert',
    createdBy: {
        userName: 'Rose',
        userType: 'Admin',
        password: 'admin'
    },
    ingredients:[{
        ingredientName: 'cocopowder',
        quantity: 2,
        unit: 'tbs'
    },
    {
        ingredientName: 'butter',
        quantity: 3,
        unit: 'tbs'
    },
    {
        ingredientName: 'sugar',
        quantity: 4,
        unit: 'tbs'
    }],
    reviews:[{
        reviewerName: 'Ethan',
        comment: 'Yummy'
    },
    {
        reviewerName: 'Bejoy',
        comment: 'Good'
    }]
})


Recipe.remove().then(() => {
    return Recipe([brownie])
}).then(() => {
    console.log('Saved Recipe Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})