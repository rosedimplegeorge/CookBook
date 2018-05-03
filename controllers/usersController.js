const express = require('express')
const  User = require('../db/models/User')
const router = express.Router()

router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch((err) => console.log(err))
})

router.post('/', (req, res) => {
  const newUser = new User(req.body.newUser)
  console.log('From post route: ', newUser)
  newUser.save().then((user) => {
    console.log('From DB return to post route: ', user)
    res.json(user)
  }).catch(console.log)
})

router.get('/:userId', (req, res) => {
  console.log('From specific user get: ', req.params.userId)
  User.findById(req.params.userId)
  .then((user) => {
    console.log('From DB: ', user)
    res.json(user)
  })
})

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).then(() => {
    console.log('The User to be Deleted :', req.params.id)
    res.sendStatus(200)
  })
  .catch((error) => {
    console.log(error)
  })
})

  router.put("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const savedUser = await User.findByIdAndUpdate(userId, updatedUser);
    res.json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;