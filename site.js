'use strict';

/*const shop = document.getElementById("shop");

shop.addEventListener('click',(e)=>{
    document.writeln("Loading... please wait");
    window.open("https:/\/www.outfithubcollection.com/shop.html",true);
});*/

(()=>{
    // alert("Welcome to Outfit Hub Collection!");
    const UserDevice = navigator.userAgentData?.platform || navigator.platform;
    // let _userDevice = document.getElementById("user-device");
     if(UserDevice === "Windows"){
        document.getElementById("user-device").innerHTML = "<i class='bi bi-shop'></i>" + " Outfit Hub Collection";
     }
    // else{
    //     _userDevice.innerHTML = "<i class='bi bi-shop'></i>" + " OHC";
    //  }
    console.log(UserDevice);
})();