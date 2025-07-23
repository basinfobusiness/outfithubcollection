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
const productName = document.getElementById("product-name");
const cartTotal = document.getElementById("cart-total");
let productListNode = document.getElementsByClassName("product-name");
let productcart = document.getElementById("cart-quantity");
let cartItems = document.getElementById("cart-items");
let productquantity = document.getElementById("quantity");
let product_price = document.getElementById("product-price");
let bidprice = document.querySelectorAll(".card-text");
let product_quality = document.getElementById("quality");
let productDetails = document.getElementById("product-details");
let wishlistCstaus = document.getElementById("wishlist-current");
let wishlistTable = document.getElementById("wishlist-table");

// select product

(()=>{
   'use strict';
   let productList = ["Luis Vuitton Forest Green","Puma Pink & White","Puma Navy Blue & White","Nike Air Force 1","Nike Air Force 1 Black","Nike Air Force 1 Carmo"];
   for(let i = 0; i < productListNode.length && i < productList.length; i++) {
	   productListNode[i].textContent = productList[i];
   }
   // Add click event to each card to set the bid price
   let cards = document.querySelectorAll('.card');
   cards.forEach((card, idx) => {
	   card.addEventListener('click', function() {
		   let priceElem = card.querySelector('.card-text');
		   if (priceElem) {
			   product_price.textContent = priceElem.textContent;
		   }
	   });
   });
})();

// add to cart
addCartBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	// alert("quantity increased");
	let increaseproduct = Number(productquantity.value) + 1;
	productquantity.value = increaseproduct;
	productcart.textContent = productquantity.value;
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
function loadToCart(){
	let productNameText = this.parentElement.parentElement.querySelector('.card-title').textContent;
	productName.textContent = productNameText;
	productDetails.textContent = `Purchase ${productNameText} now`;
	productDetails.classList.add("text-success");
	product_quality.classList.add("text-secondary");
	console.log("Function product name " + productNameText);

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
}

function productAdded() {
	// loadToCart();
	productcart.textContent = productquantity.value;
	let productQuantity = productcart.textContent;
	// let totalPrice = Number(productQuantity) * parseFloat(this.parentElement.parentElement.querySelector('.card-text').textContent.replace(/[^0-9.-]+/g,""));
	let productprice = product_price.textContent.replace(/[^0-9.-]+/g,"");
	let totalPrice = Number(productQuantity) * parseFloat(productprice);
	// let productNameText = this.parentElement.parentElement.querySelector('.card-title').textContent;
	// productName.textContent = productNameText;
	let productNameText = document.getElementById("product-name").textContent;
	cartItems.classList.remove("visually-hidden");
	cartItems.classList.add("text-success");
	// let productInCart = sessionStorage.getItem("Product_In_Cart");
	// if(productInCart !== null){
		cartItems.innerHTML += `<tr class="text-success">
		<td class="text-success">${productNameText}</td>
		<td class="text-success">${product_price.textContent}</td>
		<td class="text-success">${productQuantity}</td>
		<td class="text-success total-price">$ ${totalPrice}</td>
		<td class="text-success"><button class="btn btn-danger btn-sm" id="remove-cart-btn">Remove</button></td>
	</tr>`;
	// let totalPrices = [];
	// totalPrices.push(totalPrice);
	// let _totalPrices = 0;
	// console.log("the _totalprices is " + _totalPrices);
	// for(let i=0; i<totalPrices.length; i++){
	// 	totalPrices[i] += totalPrices[i];
	// 	console.log("Final prices length is " + totalPrices.length);
	// }
	let sumoftotalPrice = 0;
	document.querySelectorAll('.total-price').forEach(el => {
		// Extract numeric value from text, e.g., "¢150.00" -> 150.00
		let price = parseFloat(el.textContent.replace(/[^0-9.]/g, ''));
		if (!isNaN(price)) {
			sumoftotalPrice += price;
		}
	});
	cartTotal.textContent = `$ ${sumoftotalPrice.toFixed(2)}`;

	// console.log('Total Price:', sumoftotalPrice);

	productquantity.value = 1
	
	// }else{
	// 	cartItems.innerHTML = "";
	// }

	// productDetails.textContent = `Purchase ${productNameText} now`;
	// productDetails.classList.add("text-success");
	// product_quality.classList.add("text-secondary");
	// console.log("Function product name " + productNameText);
	// if(productInCart == null){
	// 	console.log('key does not exist')
	// }else{
	// 	console.log("Session total value is " + productInCart);
	// }
	// const productQuality = {
	// 	"puma": "1, buyer promise, return policy, shipping policy, 0 sold",
	// 	"nike": "1, buyer promise, return policy, shipping policy, 120 sold",
	// 	"adidas": "1",
	// 	"louis_vuitton": "1, buyer promise, return policy, shipping policy, 0 sold"
	// }
	// switch (productName.textContent.toLowerCase()) {
	// 		case "luis vuitton forest green":
	// 			product_quality.textContent = productQuality.louis_vuitton;
	// 			break;
	// 		case "puma pink & white":
	// 			product_quality.textContent = productQuality.puma;
	// 			break;
	// 		case "puma navy blue & white":
	// 			product_quality.textContent = productQuality.puma;
	// 			break;
	// 		case "nike air force 1":
	// 			product_quality.textContent = productQuality.nike;
	// 			break;
	// 		case "nike air force 1 black":
	// 			product_quality.textContent = productQuality.nike;
	// 			break;
	// 		case "nike air force 1 carmo":
	// 			product_quality.textContent = productQuality.nike;
	// 			break;
	// 		default:
	// 			product_quality.textContent = "0, buyer promise, return policy, shipping policy, 0 sold";
	// 			break;
	// }
	// productQuantity = localStorage.removeItem("productQuantity") || productquantity.value;
}

cartBtn1.addEventListener('click',loadToCart);

cartBtn2.addEventListener('click',loadToCart);

cartBtn3.addEventListener('click',loadToCart);

cartBtn4.addEventListener('click',loadToCart);

cartBtn5.addEventListener('click',loadToCart);

cartBtn6.addEventListener('click',loadToCart);

toCartBtn.addEventListener('click', productAdded,true);

// toCartBtn.addEventListener('click',(e)=>{
// 	e.preventDefault();
// 	// alert("Product added to cart");
// 	let productNameText = productName.textContent;
// 	let productPrice = document.getElementById("product-price").textContent;
// 	let productQuality = document.getElementById("quality").textContent;
// 	let productQuantity = productcart.textContent;
// 	let cartItems = document.getElementById("cart-items");
// 	let totalPrice = Number(productQuantity) * parseFloat(this.parentElement.parentElement.querySelector('.card-text').textContent.replace(/[^0-9.-]+/g,""));
// 	cartTotal.textContent = `$ ${totalPrice.toFixed(2)}`;
// 	cartItems.classList.remove("visually-hidden");
// 	cartItems.classList.add("text-success");
// 	cartItems.innerHTML += `<tr class="text-success">
// 		<td class="text-success">${productNameText}</td>
// 		<td class="text-success">${productPrice}</td>
// 		<td class="text-success">${productQuality}</td>
// 		<td class="text-success">${productQuantity}</td>
// 		<td class="text-successf">${totalPrice}</td>
// 		<td class="text-success"><button class="btn btn-danger btn-sm" id="remove-cart-btn">Remove</button></td>
// 	</tr>`;
// });

toWishlistBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	// alert("Product added to wishlist");
	wishlistCstaus.classList.remove("show");
	wishlistTable.classList.add("show");
	let productNameText = productName.textContent;
	// let productQuality = document.getElementById("quality").textContent;
	let wishlistItems = document.getElementById("wishlist-items");
	wishlistItems.classList.remove("visually-hidden");
	wishlistItems.classList.add("text-success");
	wishlistItems.innerHTML += `<tr class="text-success">
		<td class="text-success">${productNameText}</td>
		<td class="text-success">${product_price.textContent}</td>
		<td class="text-success">${product_quality.textContent}</td>
		<td class="text-success"><button class="btn btn-danger btn-sm">Remove</button></td>
	</tr>`;
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})