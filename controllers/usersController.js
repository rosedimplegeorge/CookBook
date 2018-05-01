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

module.exports = router;