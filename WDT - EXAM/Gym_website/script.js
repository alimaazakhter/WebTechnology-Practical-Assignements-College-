// LOGIN FORM
let loginForm = document.getElementById("loginForm");

if(loginForm){
loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    let savedUser = JSON.parse(localStorage.getItem("gymUser"));

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if(savedUser && email === savedUser.email && password === savedUser.password){
        document.getElementById("loginMsg").innerHTML = "Login Successful 💪";
    }else{
        document.getElementById("loginMsg").innerHTML = "Invalid Email or Password ❌";
    }
});
}

// REGISTRATION FORM
let gymForm = document.getElementById("gymForm");

if(gymForm){
gymForm.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let goal = document.getElementById("goal").value;
    let plan = document.getElementById("plan").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        age: age,
        goal: goal,
        plan: plan,
        email: email,
        mobile: mobile,
        password: password
    };

    localStorage.setItem("gymUser", JSON.stringify(user));
    document.getElementById("msg").innerHTML = "Registration Successful! You can now login. 💪";
});
}
