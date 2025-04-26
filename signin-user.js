const signinBtn = document.getElementById("signin-btn");
const regstatus = document.getElementById("reg-status");

signinBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
       regstatus.textContent = "Successfully logged in!";
       const user = userCredential.user;
       localStorage.setItem("loggedinUser",user.uid);
       window.location.href = "https:/\/www.outfithubcollection.com/useraccount.html";
    })
    .catch((error)=>{
    const errorCode = error.code;
    if(errorCode === "auth/invalid-credential"){
        regstatus.textContent = "Wrong account details";
    }else{
        regstatus.textContent = "Account does not exist";
    }
        
    });
});