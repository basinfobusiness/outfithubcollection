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
            document.getElementById("user-telephone").innerText = userData.telephone; 
            document.getElementById("user-email").innerText = userData.email;   
            }else{
                alert("no such data found");
            }
        })
        .catch((error)=>{
            console.log("error getting document");
        })
    }else{
        alert("user is not found in localstorage");
    }
});

/* logout user */
const logout = document.getElementById("logoutBtn");

logout.addEventListener("click",(event)=>{
event.preventDefault();
    localStorage.removeItem("loggedinUser");
    signOut(auth)
    .then(()=>{
        window.location.href = "https:/\/www.outfithubcollection.com/logout.html";
    })
    .catch((error)=>{
        console.error("error signing out.",error);
    })
   
});