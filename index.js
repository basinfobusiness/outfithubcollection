'use strict'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child, onValue } from "https:/\/www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCwF1CpAK61W1NtPxX2dAUcjp8DhSa_T4Q",
  authDomain: "outfit-hub-collection.firebaseapp.com",
  databaseURL: "https:/\/outfit-hub-collection-default-rtdb.firebaseio.com",
  projectId: "outfit-hub-collection",
  storageBucket: "outfit-hub-collection.firebasestorage.app",
  messagingSenderId: "846239063992",
  appId: "1:846239063992:web:c70f50297c8d19f3bb794d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const adminUser = ref(db, 'admin/');
const id = ref(db, 'admin/' + id);

function fetchAdminUser(){
    //return adminUser
    onChildAdded(adminUser, (data) =>{
       let _admin =  data.val().username;
       let _adminpass = data.val().password;
    });
}

export { fetchAdminUser };
