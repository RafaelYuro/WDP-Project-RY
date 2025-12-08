import { fetchData } from "./Main.js"

//1. Store form in varable.
let getCharacter = document.getElementById("CharacterForm")
//2. Add event listener.
if(getCharacter) getCharacter.addEventListener('click', MakeCharacter)
//3. Create "Register" function.
function MakeCharacter(g){
    g.preventDefault()
    console.log("hi")
    // 4. Create user object.
    const character = {
        CharacterName: document.getElementById("CharacterName").value,
        CharacterDesign: document.getElementById("CharacterDesign").value,
        CharacterItem: document.getElementById("CharacterItem").value
    }
    fetchData("/character/createcharacter", character, "POST")
    .then(data => {
        console.log(data)
        // window.location.href = "Main Menu.html"
    })
    .catch(err => {
      console.log(err)  
    })
}
