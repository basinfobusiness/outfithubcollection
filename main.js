 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, ref, set, update, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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

const updaterecordsBtn = document.getElementById("updaterecordsBtn");

const editcontentBtn = document.getElementById("contentBtn");

/* update records */
updaterecordsBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const id = push(child(ref(db), 'records')).key;
    
    set(ref(db, 'records/' + id),{
          businessemail: document.getElementById("biz-email").value,
          businessnumber: document.getElementById("biz-telephone").value,
          businessaddress: document.getElementById("biz-address").value
      })
      .then(()=>{
      alert("Record updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
},false);

/* content settings */
editcontentBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const id = push(child(ref(db), 'businesssinfo')).key;
    set(ref(db, 'businesssinfo/' + id),{
          aboutus: document.getElementById("about-us").value,
          support: document.getElementById("support").value
      })
      .then(()=>{
      alert("Content updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
},false);