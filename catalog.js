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
  
  onChildAdded(newProd, (data) =>{
      
      /* retrieval section */
      if(data.val().productname !== ""){
      let divData = "<div class='row'><div class='col-sm-6 col-md-4 col-lg-3'><div class='box'>" +
           "<a href=''>" + 
              "<div class='img-box'>" +
                "<img src='https:/\/www.outfithubcollection.com/p7.png'' alt=''>" +
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
      let cataloglog = document.getElementById("catalog-log");
          cataloglog.insertAdjacentHTML('beforebegin',divData);
      console.log("i got loaded!");
      }
  });
  
 onChildAdded(bizrecords, (data) =>{
    let bizData = "<a href=''>" +
                "<i class='fa fa-map-marker' aria-hidden='true'></i>" +
               "<span>" + data.val()bizaddress + "</span>" +
              "</a>" +
              "<a href=''>" +
                "<i class='fa fa-phone' aria-hidden='true'></i>" +
                "<span>" + data.val().biznumber + "</span>" +
              "</a>" +
              "<a href=''>" +
                "<i class='fa" + "'fa-envelope' aria-hidden='true'></i>" +
               "<span>" + data.val().businessaddress + "</span>" +
              "</a>";
});

let businessdetails = document.getElementById("contact-details");
 businessdetails.insertAdjacentHTML('beforebegin',bizData);
      console.log("i got loaded!");
      }
  });