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
 
 /* retrieved data */
  const newProd = ref(db, 'products/');
  
 const bizrecords = ref(db, 'records/');
  
  const bizinfo = ref(db, 'businesssinfo/');
  
  onChildAdded(newProd, (data) =>{
      
      /* retrieval section */
      if(data.val().productname !== ""){
      let divData = "<div class='row'><div class='col-sm-6 col-md-4 col-lg-3'><div class='box'>" +
           "<a href='https:/\/www.outfithubcollection.com/app.html'>" + 
              "<div class='img-box'>" +
                "<img src='https:/\/www.outfithubcollection.com/OHC.png'' alt=''>" +
              "</div>" +
              "<div class='detail-box'>" +
                "<h6 id='product-name-2'>" +
                  data.val().productname +
               "</h6>" +
               "<h6> Price<span> " +
                    "¢" + data.val().productprice +
                  "</span>" +
                "</h6>" +
              "</div>" +
              "<div class='new'>" +
                "<span>" +
                  "New" +
                "</span>" +
              "</div>" +
           " </a>" +
          "</div>" +
        "</div></div><br>";
        
        if(typeof(Storage)!== "undefined"){
            localStorage.productname = data.val().productname;
        }
      let cataloglog = document.getElementById("catalog-log");
          cataloglog.insertAdjacentHTML('beforebegin',divData);
      console.log("i got loaded!");
      }
  });
  
  onChildAdded(bizrecords, (data) =>{
   let bizData = "<div class='col-md-6 col-lg-3'><h6>" +
              "CONTACT US" +
            "</h6>" +
           " <div class='info_link-box'><a href=''>" +
               "<i class='fa " + "fa-map-marker' aria-hidden='true'></i> " +
            "<span>" + data.val().businessaddress + "</span>" +
            "</a>" +
              "<a href=''>" +
                "<i class='fa" + " fa-phone' aria-hidden='true'></i>" +
                " <span>" + data.val().businessnumber + "</span>" +
              "</a>" +
              "<a href=''>" +
                "<i class='fa" + " fa-envelope' aria-hidden='true'></i>" +
               " <span>" + data.val().businessemail + "</span>" +
              "</a></div></div>";

let businessdetails = document.getElementById("contact-details");
 businessdetails.insertAdjacentHTML('beforebegin',bizData);
      console.log("i got loaded!");
      
  });
  
  /* About us */
onChildAdded(bizinfo, (data) =>{
    let infoData ="<div class='col-md-6 col-lg-3'>" +
           "<h6>" +
             "ABOUT US" +
            "</h6>" +
            "<p>" +
              data.val().aboutus +
           "</p>" +
          "</div>";
          
          let businessabout = document.getElementById("about-us");
          businessabout.insertAdjacentHTML('beforebegin',infoData);
          
      console.log("i got loaded!");
});

/* pod */
(()=>{
'use strict'
    const ohc_now = document.createElement("small");
    const catalogNow = document.getElementById("catalog-log");
    catalog.appendChildElement(ohc_now);
    ohc_now.textContent = "Outfit Hub Collection Frequency" 
})();