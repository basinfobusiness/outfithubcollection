// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, onAuthStateChanged, signOut } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  import { getFirestore, getDoc, doc } from "https:/\/www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
  
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

const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user)=>{
    const loggedInUserId = localStorage.getItem("loggedinUser");
    if(loggedInUserId){
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData = docSnap.data();
                document.getElementById("user-fullname").innerText = userData.fullname;
            document.getElementById("user-telephone").innerText = userData.telephonenumber; 
            document.getElementById("user-email").innerText = userData.email; 
 
 /*if(userData.gender === "Male") {
     document.getElementById("user-avatar").src = "https:/\/www.outfithubcollection.com/avatar_male.png";
     
 }else{
     document.getElementById("user-avatar").src = "https:/\/www.outfithubcollection.com/avatar_female.png";     
            }*/
            else{
                alert("No data found. Try creating an account.");
            }
        })
        .catch((error)=>{
            console.log("error getting document");
            console.error("error is:",error);
        });
    else{
        alert("Logged Out!");
    }
});

/* logout user */
const logout = document.getElementById("logoutBtn");

logout.addEventListener("click",(event)=>{
event.preventDefault();
    localStorage.removeItem("loggedinUser");
    signOut(auth)
    .then(()=>{
        window.location.href = "https:/\/www.outfithubcollection.com/login.html";
    })
    .catch((error)=>{
        console.error("error signing out.",error);
    })
   
});