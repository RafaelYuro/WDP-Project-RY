import { fetchData } from "./Main.js"
//1. Store form in varable.
let RegisterationForm = document.getElementById("RegisterForm")
//2. Add event listener.
if(RegisterationForm) RegisterForm.addEventListener('submit', Register)
//3. Create "Register" function.
function Register(e){
    e.preventDefault()
    console.log("hi")
    // 4. Create user object.
    const player = {
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pwd").value
    }
    fetchData("/player/register", player, "POST")
    .then(data=> {
        console.log(data)
    })
    .catch(err => {
      console.log(err)  
    })
    //window.location.href = "Main Menu.html"
}
//1. Store form in varable.
let LoginForm = document.getElementById("LoginForm")
//2. Add event listener.
if(LoginForm) LoginForm.addEventListener('submit', Login)
//3. Create "Register" function.
function Login(x){
    x.preventDefault()
    console.log("hi")
    // 4. Create user object.
    const player = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pwd").value
    }
     fetchData("/player/login", player, "POST")
    .then(data=> {
        console.log(data)
        window.location.href = "Main Menu.html"
    })
    .catch(err => {
      console.log(err)  
    })
}
