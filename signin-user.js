// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
  
  const firebaseConfig = {
      apiKey: "AIzaSyCPH1vhHu7qyMCqQsogV2epGp34pW-ct-M",
      authDomain: "outfit-hub-collection-34232.firebaseapp.com",
      databaseURL: "https://outfit-hub-collection-34232-default-rtdb.firebaseio.com",
      projectId: "outfit-hub-collection-34232",
      storageBucket: "outfit-hub-collection-34232.firebasestorage.app",
      messagingSenderId: "1058398717171",
      appId: "1:1058398717171:web:e11c2433991ff35664a386",
      measurementId: "G-1QXNMQ4NYZ"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const signinBtn = document.getElementById("signin-btn");
const regstatus = document.getElementById("reg-status");
const regstatusText = ["Account does not exist","Successfully logged in","Processing please wait...","Wrong account details","something went wrong"];
//const regstatusText = "Processing please wait...";
signinBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    
    signinBtn.innerHTML = "<span class='spinner-border text-light'></span>";
    regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[2]}</div>`;
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[1]}</div>`;
       signinBtn.innerHTML = "Logged in";
       const user = userCredential.user;
 
        if(typeof(Storage)!=="undefined"){
          localStorage.setItem("loggedinUser",user.uid);
        }     
       window.open("https://www.outfithubcollection.com/useraccount.html",user.fullname,false);
    })
    .catch((error)=>{
    const errorCode = error.code;
    if(errorCode === "auth/invalid-credential"){
        regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[3]}</div>`;
       signinBtn.innerHTML = "Sign in";
        // regstatus.textContent = "Wrong account details";
    }else{
        //regstatus.textContent = "Account does not exist";
        regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[4]}</div>`;
       signinBtn.innerHTML = "Sign in";
    }
        
    });
});