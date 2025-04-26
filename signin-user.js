// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCPH1vhHu7qyMCqQsogV2epGp34pW-ct-M",
    authDomain: "outfit-hub-collection-34232.firebaseapp.com",
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