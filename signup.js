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

const signup = document.getElementById("signup-btn");
const regstatus = document.getElementById("reg-status");
const regstatusText = ["Email already registered!","Account successfully created!","Processing please wait...","Password too short","Unable to create user"];

signup.addEventListener('click',(event)=>{
    event.preventDefault();

    signup.innerHTML = "<span class='spinner-border text-light'></span>";
    
    const fullname = document.getElementById("floatingFullname").value;
    const phonenumber = document.getElementById("floatingTelephone").value;
    const email = document.getElementById("floatingEmail").value;
    const password = document.getElementById("floatingPassword").value;
    const gender = document.getElementById("gender").value;
    
    const auth = getAuth();
    const db = getFirestore();   
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData = {
            fullname: fullname,
            telephonenumber: phonenumber,
            email: email,
            gender: gender
        };
        const docRef = doc(db, "users", user.uid);
        signup.innerHTML = "account created";
        // regstatus.textContent = "Account successfully created!";
        regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[1]}</div>`;
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href = "https://www.outfithubcollection.com/login.html";
        })
        .catch((error)=>{
            console.error("error writing userdata", error);
        });
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode === "auth/email-already-in-use"){
            signup.innerHTML = "Create Account";
            regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[0]}</div>`;
        }else if(errorCode === "auth/weak-password"){
            signup.innerHTML = "Create Account";
            regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[3]}</div>`;
        }
        else{
            signup.innerHTML = "Create Account";
            regstatus.innerHTML = `<div class='alert alert-secondary' id='reg-status'>${regstatusText[4]}</div>`;
            console.error("error performing: ", error);
        }
    });
});   
