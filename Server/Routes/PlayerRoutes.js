const express = require("express")
const Player = require("../Models/PlayerModel")
const router = express.Router()

// http method that calls the function in your model file (http methods)

router.get('/getPlayer', (req, res) => {
  try {
    const Players = Player.getAllPlayers()
    res.send(Players)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router