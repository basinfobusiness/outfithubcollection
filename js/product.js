// import { loadToCart } from "./js/index.js";

const addCartBtn = document.getElementById("add-cart-btn");
const toCartBtn = document.getElementById("to-cart-btn");
const toWishlistBtn = document.getElementById("to-wishlist-btn");
const removeCartBtn = document.getElementById("remove-cart-btn");
const cartBtn1 = document.getElementById("to-cart-btn1");
const cartBtn2 = document.getElementById("to-cart-btn2");
const cartBtn3 = document.getElementById("to-cart-btn3");
const cartBtn4 = document.getElementById("to-cart-btn4");
const cartBtn5 = document.getElementById("to-cart-btn5");
const cartBtn6 = document.getElementById("to-cart-btn6");
let productListNode = document.getElementsByClassName("product-name");
const productName = document.getElementById("product-name");
const productcart = document.getElementById("cart-quantity");
const cartTotal = document.getElementById("cart-total");
let cartItems = document.getElementById("cart-items");
let productquantity = document.getElementById("quantity");

// add to cart
addCartBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	// alert("quantity increased");
	let increaseproduct = Number(productquantity.value) + 1
	productquantity.value = increaseproduct;
	productcart.textContent = productquantity.value;
	if (typeof(Storage) !== "undefined") {
		localSession.setItem("productQuantity", productquantity.value);
	}
});

// remove from cart
removeCartBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	// alert("quantity decreased");
	let decreaseproduct = Number(productquantity.value) - 1
	if (decreaseproduct < 1) {
		decreaseproduct = Number(productquantity.value) + 1
	}else{
	  productquantity.value = decreaseproduct;
	  productcart.textContent = productquantity.value;
	}
});

// product added
function productAdded() {
	// loadToCart();
	productcart.textContent = productquantity.value;
	let productQuantity = localStorage.getItem("productQuantity") || productquantity.value;
	let totalPrice = Number(productQuantity) * parseFloat(this.parentElement.parentElement.querySelector('.card-text').textContent.replace(/[^0-9.-]+/g,""));
	cartTotal.textContent = `$ ${totalPrice.toFixed(2)}`;
	let productNameText = this.parentElement.parentElement.querySelector('.card-title').textContent;
	productName.textContent = productNameText;
	let product_quality = document.getElementById("quality");
	let product_price = document.getElementById("product-price");
	product_price.textContent = this.parentElement.parentElement.querySelector('.card-text').textContent;
	let productDetails = document.getElementById("product-details");
	cartItems.classList.remove("visually-hidden");
	cartItems.classList.add("text-success");
	cartItems.innerHTML += `<tr class="text-success">
		<td class="text-success">${productNameText}</td>
		<td class="text-success">${product_price.textContent}</td>
		<td class="text-success">${productQuantity}</td>
		<td class="text-success">$ ${totalPrice}</td>
		<td class="text-success"><button class="btn btn-danger btn-sm" id="remove-cart-btn">Remove</button></td>
	</tr>`;
	productDetails.textContent = `Purchase ${productNameText} now`;
	productDetails.classList.add("text-success");
	product_quality.classList.add("text-secondary");
	console.log(productNameText);
	const productQuality = {
		"puma": "1, buyer promise, return policy, shipping policy, 0 sold",
		"nike": "1, buyer promise, return policy, shipping policy, 120 sold",
		"adidas": "1",
		"louis_vuitton": "1, buyer promise, return policy, shipping policy, 0 sold"
	}
	switch (productName.textContent.toLowerCase()) {
			case "luis vuitton forest green":
				product_quality.textContent = productQuality.louis_vuitton;
				break;
			case "puma pink & white":
				product_quality.textContent = productQuality.puma;
				break;
			case "puma navy blue & white":
				product_quality.textContent = productQuality.puma;
				break;
			case "nike air force 1":
				product_quality.textContent = productQuality.nike;
				break;
			case "nike air force 1 black":
				product_quality.textContent = productQuality.nike;
				break;
			case "nike air force 1 carmo":
				product_quality.textContent = productQuality.nike;
				break;
			default:
				product_quality.textContent = "0, buyer promise, return policy, shipping policy, 0 sold";
				break;
	}
	productquantity.value = "1";
	productQuantity = localStorage.removeItem("productQuantity") || productquantity.value;
}

cartBtn1.addEventListener('click',productAdded);

cartBtn2.addEventListener('click',productAdded);

cartBtn3.addEventListener('click',productAdded);

cartBtn4.addEventListener('click',productAdded);

cartBtn5.addEventListener('click',productAdded);

cartBtn6.addEventListener('click',productAdded);

// toCartBtn.addEventListener('click',(e)=>{
// 	e.preventDefault();
// 	// alert("Product added to cart");
// 	let productNameText = productName.textContent;
// 	let productPrice = document.getElementById("product-price").textContent;
// 	let productQuality = document.getElementById("quality").textContent;
// 	let cartItems = document.getElementById("cart-items");
// 	cartItems.classList.remove("visually-hidden");
// 	cartItems.classList.add("text-success");
// 	cartItems.innerHTML += `<tr class="text-success">
// 		<td class="text-success">${productNameText}</td>
// 		<td class="text-success">${productPrice}</td>
// 		<td class="text-success">${productQuality}</td>
// 	</tr>`;
// });

toWishlistBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	// alert("Product added to wishlist");
	let productNameText = productName.textContent;
	let productPrice = document.getElementById("product-price").textContent;
	let productQuality = document.getElementById("quality").textContent;
	let wishlistItems = document.getElementById("wishlist-items");
	wishlistItems.classList.remove("visually-hidden");
	wishlistItems.classList.add("text-success");
	wishlistItems.innerHTML += `<tr class="text-success">
		<td class="text-success">${productNameText}</td>
		<td class="text-success">${productPrice}</td>
		<td class="text-success">${productQuality}</td>
	</tr>`;
});

// select product
(()=>{
	'use strict'
	let productList = ["Luis Vuitton Forest Green","Puma Pink & White","Puma Navy Blue & White","Nike Air Force 1","Nike Air Force 1 Black","Nike Air Force 1 Carmo"];
	for(let i = 0; i < productListNode.length && i < productList.length; i++) {
		productListNode[i].textContent = productList[i];
	}
})();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})