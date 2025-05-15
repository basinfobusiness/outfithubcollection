// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, ref, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

  const firebaseConfig = {
    databaseURL: "https://outfit-hub-collection-34232-default-rtdb.firebaseio.com"
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
      let divData = "<div class='col-sm mb-5 col-md col-lg-3'>" + 
          "<div class='p-3' style='background: #eeeeee;' data-bs-toggle='modal' data-bs-target='#view-product'>" +
            // "<br>" + "<span class='text-capitalize rounded-circle p-3' style='background: white;'>new</span>" +
            "<center><img src='https://www.outfithubcollection.com/ohc_merch.png' alt='' class='d-block' style='width:80%'></center>" +
                 "<p class='mt-3 mb-2 fw-bold'>" + data.val().productname +
               "<span class='float-end'>Price <span style='color: #db4f66;'>&#x20B5;" +
                    data.val().productprice +
                  "</span></span></p>" +
            "</div>" +  
          "</div>";
        
        if(typeof(Storage)!== "undefined"){
            localStorage.productname = data.val().productname;
        }
      let cataloglog = document.getElementById("catalog-log");
          cataloglog.insertAdjacentHTML('afterbegin',divData);
      console.log("i got loaded!");
      }
  });
  
  onChildAdded(bizrecords, (data) =>{
   let bizData = "<a href='' class='text-decoration-none text-white'>" +
                      "<i class='bi bi-geo-alt-fill'></i>" +
                      "<span> " + data.val().businessaddress + "</span>" +
                  "</a><br>" +
              "<a href='tel:+233500518387' class='text-decoration-none text-white'>" +
                "<i class='bi bi-telephone'></i>" +
                  "<span> " + data.val().businessnumber + "</span>" +
                  "</a><br>" +
              "<a href='mailto:info@outfithubcollection' class='text-decoration-none text-white'>" +
                "<i class='bi bi-envelope'></i>" +
                  "<span> " + data.val().businessemail + "</span>" +
                  "</a>";

let businessdetails = document.getElementById("contact-details");
 businessdetails.insertAdjacentHTML('beforeend',bizData);
      console.log("i got loaded!");
      
  });
  
  /* About us */
onChildAdded(bizinfo, (data) =>{
    let infoData = "<p>" +
              data.val().aboutus +
           "</p>";
          
          let businessabout = document.getElementById("about-us");
          businessabout.insertAdjacentHTML('beforeend',infoData);
          
      console.log("i got loaded!");
});

// help and support
onChildAdded(bizinfo, (data) =>{
         
 let helpData = "<p>" +
              data.val().support + 
            "</p>";
          
          let businesssupport = document.getElementById("help-and-support");
          businesssupport.insertAdjacentHTML('beforeend',helpData);
          
      console.log("help and support!");
});

/* pod */
// (()=>{
// 'use strict'
//     const ohc_now = document.createElement("small");
//     const catalogNow = document.getElementById("catalog-log");
//     catalogNow.appendChild(ohc_now);
//  //   ohc_now.textContent = "<center>"+"Outfit Hub Collection Frequency"+"</center>";
//  console.log("maintenance");
// })();