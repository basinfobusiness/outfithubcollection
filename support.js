 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, ref, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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
  
 const bizsupport = ref(db, 'businesssinfo/');

/* Help */
/* About us */
//onChildAdded(bizinfo, (data) =>{
onChildAdded(bizsupport, (data) =>{
         
 let helpData = "<div class='col-md-6 col-lg-3'>" +
            "<h6>" +
              "NEED HELP" +
            "</h6>" +
            "<p>" +
              data.val().support + 
            " <a href='javascript:void(0)'>Getting Started</a></p>" +
          "</div>";
          
          let businesssupport = document.getElementById("support");
          businesssupport.insertAdjacentHTML('beforebegin',helpData);
          
      console.log("help and support!");
});