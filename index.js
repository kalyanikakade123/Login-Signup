const signup = document.querySelector('.signup');
const login = document.querySelector('.login');

const formContainer = document.querySelector('.formContainer');

let htmlSignup = 
`
<form action="">
    <div class="inputContainer">
        <label for="user">Username</label>
        <input id="1" type="text" id="user" />
    </div>
    <div class="inputContainer">
        <label for="user">Email address</label>
        <input id="2" type="email" id="user" />
    </div>
    <div class="inputContainer">
        <label for="user">Password</label>
        <input id="3" type="password" id="user" />
    </div>
    <div class="inputContainer">
        <label for="pass">Confirm Password</label>
        <input id="4" type="password" id="pass" />
    </div>
    <div class="inputContainer btn">
        <input id="5" type="button" value="Signup" />
    </div>
</form>
`;
let htmlLogin = `
<form action="">
    <div class="inputContainer">
        <label for="user">Username or email address</label>
        <input type="text" id="user" />
    </div>
    <div class="inputContainer">
        <label for="pass">Password</label>
        <input type="password" id="pass" />
    </div>
    <div class="inputContainer remember">
        <label for="remember">Remember Me</label>
        <input type="checkbox" id="remember" />
    </div>
    <div class="inputContainer btn">
        <input type="button" value="Login" />
    </div>
    <div class="forget">
        <p>Forget Password?</p>
    </div>
</form>`;
signup.addEventListener('click', (element)=>{
    signup.classList.add('active');
    login.classList.remove('active');
    formContainer.innerHTML = htmlSignup;

})
login.addEventListener('click', (element)=>{
    login.classList.add('active');
    signup.classList.remove('active')
    formContainer.innerHTML = htmlLogin;
})
