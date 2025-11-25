//1. Store form in varable.
let RegisterationForm = document.getElementById("RegisterForm")
//2. Add event listener.
if(RegisterationForm) RegisterForm.addEventListener('submit', Register)
//3. Create "Register" function.
function Register(e){
    e.preventDefault()
    console.log("hi")
    // 4. Create user object.
    const User = {
        FirstName: document.getElementById("fname").value,
        LastName: document.getElementById("lname").value,
        UserName: document.getElementById("username").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("pwd").value
    }
    console.log("hi")
    console.log(User)
    window.location.href = "Main Menu.html"
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
    const User1 = {
        UserName: document.getElementById("username").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("pwd").value
    }
    console.log("hi")
    console.log(User1)
    window.location.href = "Main Menu.html"
}
