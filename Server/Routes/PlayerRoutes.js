const express = require("express")
const Player = require("../Models/PlayerModel")
const router = express.Router()
//functions below fpor characters route file
// http method that calls the function in your model file (http methods)

router.get('/getPlayer', (req, res) => {
  try {
    const Players = Player.getAllPlayers()
    res.send(Players)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})
.post('/login', async (req, res)=>{
  try {
    const player = await Player.login(req.body)
    res.send({...player, Password: undefined})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})
.post('/register', async (req, res)=>{
  try {
    const player = await Player.register(req.body)
    res.send({...player, Password: undefined})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})
.post('/deleteplayer', async (req, res)=>{
  try {
    const player = await Player.deleteplayer(req.body)
    res.send({success: "Account Deleted"})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})
.post('/updatepassword', async (req, res)=>{
  try {
    const player = await Player.updatepassword(req.body)
    res.send({success: "password updated"})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})

module.exports = router
//functions above fpor characters route file