//1. Store form in varable.
let startGame = document.getElementById("startGame")
//2. Add event listener.
if(startGame) startGame.addEventListener('click', StartGame)
//3. Create "Register" function.
function StartGame(g){
    g.preventDefault()
    console.log("hi")
    // 4. Create user object.
    console.log("game started!")
}