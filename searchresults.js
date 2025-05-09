'use strict';

// search result
(()=>{
    const searchTerm = sessionStorage.getItem('searchpara');
    document.querySelector("#resname").innerHTML = searchTerm;
    const searchheader = document.getElementById("searchheader");
    // const contres = document.getElementById("searchres1");
    // const searchpara = sessionStorage.getItem("searchpara");
            searchheader.textContent = "Looking for: " + searchTerm;
	        document.getElementById("searchres1").innerText = "Accessories";
	        document.getElementById("searchres2").innerText = "Shoes";
           // searchheader.textContent = "Looking for: " + searchTerm + " <span class='badge rounded-pill bg-info'>106</span>";
           // document.getElementById("searchres1").innerText = "Up next";
           // document.getElementById("searchres2").innerText = "New arrivals";
        
})();