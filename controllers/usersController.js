const express = require('express')
const  UserModel  = require('../db/models/userModel')
const router = express.Router()

router.get('/', (req, res) => {
  console.log("Hit Get All Users route", UserModel)
  UserModel.User.find()
    .then(users => {
      console.log("Found users", users)
      res.json(users)
    })
    .catch((err) => console.log(err))
})

module.exports = router;