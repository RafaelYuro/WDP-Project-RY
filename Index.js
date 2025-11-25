// specify we want to use express
const express = require('express')
const app = express()

app.use(express.json())

const playerRoutes = require("./Server/Routes/PlayerRoutes")

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use("/player", playerRoutes)
/* I have a route called getRecipes under recipeRoutes below.
   What is the fetch url to call it? It is a get request.
*/

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`))