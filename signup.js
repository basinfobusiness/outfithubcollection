// Import the functions you need from the SDKs you need
import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
//import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-auth.js';
import { getFirestore, setDoc, doc} from 'https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js'

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
//const analytics = getAnalytics(app);

const signup = document.getElementById("signup-btn");
const regstatus = document.getElementById("reg-status");

signup.addEventListener('click',(event)=>{
    event.preventDefault();
    
    const fullname = document.getElementById("floatingFullname").value;
    const phonenumber = document.getElementById("FloatingTelephone").value;
    const email = document.getElementById("FloatingEmail").value;
    const password = document.getElementById("FloatingPassword").value;
    
    const auth = getAuth();
    const db = getFirestore();
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData = {
            fullname: fullname,
            telephonenumber: phonenumber,
            email: email
        };
        const docRef = doc(db, "users", user.uid);
        regstatus.textContent = "Account successfully created!";
        setDoc(docRef,userData)
        .then(()=>{
            window.location.assign("https:/\/www.outfithubcollection.com/login.html");
        })
        .catch((error)=>{
            console.error("error writing userdata", error);
        });
    })
    .catch((error)=>{
        const errorCode = error.code;
        if(errorCode == "auth/email-already-in-use"){
            regstatus.textContent = "email already registered!";
        }else{
            regstatus.textContent = "unable to create user";
        }
    });
});