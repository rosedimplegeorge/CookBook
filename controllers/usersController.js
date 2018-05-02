const express = require('express')
const  User = require('../db/models/User')
const router = express.Router()

router.get('/', (req, res) => {
  console.log("Hit Get All Users route", User)
  User.find()
    .then(users => {
      console.log("Found users", users)
      res.json(users)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  console.log('Hitting The Post route', req.body)
  const newUser = new User(req.body)
  newUser.save().then((user) => {
    res.json(user)
  }).catch(console.log)
})

module.exports = router;