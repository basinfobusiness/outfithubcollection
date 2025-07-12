'use strict'

// password helper 
function showPassword(){
    let password = document.getElementById("floatingPassword");
    if(password.type==="password"){
        password.type = "text"
    }else{
        password.type = "password";
    }
}  