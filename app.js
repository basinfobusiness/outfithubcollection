// Import the functions you need from the SDKs you need
  import { initializeApp } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getDatabase, update, ref, set, get, child, push, onValue, onChildAdded } from "https:/\/www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

  const firebaseConfig = {
    databaseURL: "https://outfit-hub-collection-34232-default-rtdb.firebaseio.com"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const paymentmodeBtn = document.getElementById("paymentBtn");

const policyupdate = document.getElementById("shoppolicyBtn");

const updateadminpass = document.getElementById("updateadminpassBtn");

const addproduct = document.getElementById("add-product");

/* payment settings */
paymentmodeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const id = push(child(ref(db), 'paymentmode')).key;
    update(ref(db, 'paymentmode/' + id),{
          merchantname: document.getElementById("merchant-name").value,
          merchantnumber: document.getElementById("merchant-number").value,
          paymentmode: document.getElementById("payment-mode").value,
          paypalaccount: document.getElementById("paypal").value
      })
      .then(()=>{
      alert("payment mode added successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
});

/* policy settings */
policyupdate.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const id = push(child(ref(db), 'shipshoppolicy')).key;
    update(ref(db, 'shipshoppolicy/' + id),{
          shipping_policy: document.getElementById("shopping-policy").value
      })
      .then(()=>{
      document.getElementById("shopping-policy").value = "";
      alert("shipping and shopping policy updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
});

/* uodate admin password */
updateadminpass.addEventListener('click',(e)=>{
    e.preventDefault();
   
    const id = push(child(ref(db), 'admin')).key;
    update(ref(db, 'admin/' + id),{
          password: document.getElementById("admin-password").value
      })
      .then(()=>{
      alert("Admin password updated successfully! Login with the new logins");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
});

/* Add product */
addproduct.addEventListener('click', (e)=>{
    e.preventDefault(); 
      
      const id = push(child(ref(db), 'products')).key;
      set(ref(db, 'products/' + id),{
          productname: document.getElementById("product-name").value,
          productprice: document.getElementById("product-price").value,
          productdescription: document.getElementById("product-description").value
      })
      .then(()=>{
          document.getElementById("product-name").value = "";
          document.getElementById("product-description").value = "";
          document.getElementById("product-price").value = "";
      alert("Catalog updated successfully!");
      })
      .catch((error)=>{
          console.error("something went wrong");
      }); 
});

  