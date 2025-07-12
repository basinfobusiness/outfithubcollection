'use strict'

function loadAdminPage(){
    window.open("https://outfithubcollection.com/dashboard.html","ADMIN",true)
}

function loadToCart(){
    const productquantity = document.getElementById("quantity");
	const productcart = document.getElementById("cart-quantity");
	productcart.textContent = productquantity.value ;
	productquantity.value = "1";
}

export { loadAdminPage, loadToCart };