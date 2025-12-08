const express = require("express")
const Characters = require("../Models/CharacterModel")
const router = express.Router()

// http method that calls the function in your model file (http methods)

router.get('/getCharacters', (req, res) => {
  try {
    const Characters = Characters.getAllCharacters()
    res.send(Characters)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//functions below fpor characters route file
// http method that calls the function in your model file (http methods)

.post('/getcharacter', async (req, res)=>{
  try {
    const character = await character.createcharacter(req.body)
    res.send({...character, character_name: undefined})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})
.post('/createcharacter', async (req, res)=>{
  try {
    const character = await character.register(req.body)
    res.send({...character, character_name: undefined})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})
.post('/deletecharacter', async (req, res)=>{
  try {
    const character = await character.deletecharacter(req.body)
    res.send({success: "Character Deleted"})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})
.post('/updatecharacter_name', async (req, res)=>{
  try {
    const character = await character.updatecharacter_name(req.body)
    res.send({success: "Character Name updated"})
  }catch(err){
    res.status(401).send({message:err.message})
  }
})

module.exports = router
//functions above fpor characters route file