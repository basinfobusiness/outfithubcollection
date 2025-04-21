'use strict';

const shop = document.getElementById("shop");

shop.addEventListener('click',(e)=>{
    document.writeln("Loading... please wait");
    window.open("https:/\/www.outfithubcollection.com/shop.html",true);
});