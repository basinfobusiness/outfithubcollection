// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, ref, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
  import { loadAdminPage } from "https:/\/www.outfithubcollection.com/index.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCwF1CpAK61W1NtPxX2dAUcjp8DhSa_T4Q",
    authDomain: "outfit-hub-collection.firebaseapp.com",
    authDomain: "https:/\/outfit-hub-collection-default-rtdb.firebaseio.com/",
    projectId: "outfit-hub-collection",
    storageBucket: "outfit-hub-collection.firebasestorage.app",
    messagingSenderId: "846239063992",
    appId: "1:846239063992:web:c70f50297c8d19f3bb794d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const signinBtn = document.getElementById("signin-btn");

signinBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let user = document.querySelector("#floatingInput").value;
    const adminuser = ref(db, 'admin/');
   if(user){
       onChildAdded(adminuser, (data) =>{
       if(data.val().username == document.getElementById("floatingInput").value && data.val().password == document.getElementById("floatingPassword").value){       
         loadAdminPage();
       }else{
           alert("wrong input");
           console.log("user: " + data.val().username + " password: " + data.val().password);
       }
      })
      console.log("user: " + user);
   }else{
       alert(user)
   }
    
});
