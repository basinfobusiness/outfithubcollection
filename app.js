// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, update, ref, set, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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

const id = push(child(ref(db), 'paymentmode')).key;

const paymentmodeBtn = document.getElementById("paymentBtn");

const policyupdate = document.getElementById("shoppolicyBtn");

paymentmodeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    update(ref(db, 'paymentmode/' + id),{
          merchantname: document.getElementById("merchant-name").value,
          merchantnumber: document.getElementById("merchant-number").value,
          paymentmode: document.getElementById("payment-mode").value
      })
      .then(()=>{
      alert("payment mode added successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
});

policyupdate.addEventListener('click', (e)=>{
    e.preventDefault();
    
    update(ref(db, 'shipshoppolicy/' + id),{
          shipping_policy: document.getElementById("shopping-policy").value
      })
      .then(()=>{
      alert("shipping and shopping policy updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
});