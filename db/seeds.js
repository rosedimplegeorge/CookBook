require('dotenv').config()
const mongoose = require('mongoose')

const User = require('../db/models/userModel')

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection

db.on('open',() => {
    console.log('Successfully Connected to the DB')
})
db.on('error',(error) => {
    console.log(error)
})

const rose = new User({
    userName: 'Rose',
    recipes: {
        title: 'Brownie',
        type: 'dessert',
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
    }
})



User.remove().then(() => {
    return User.insertMany([rose])
}).then(() => {
    console.log('Saved USER Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})