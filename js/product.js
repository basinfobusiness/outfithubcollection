'use strict'

const addCartBtn = document.getElementById("add-cart-btn");
const removeCartBtn = document.getElementById("remove-cart-btn");
const cartBtn = document.getElementById("to-cart-btn");

// add to cart
addCartBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	// alert("quantity increased");
	const productquantity = document.getElementById("quantity");
	let increaseproduct = Number(productquantity.value) + 1
	productquantity.value = increaseproduct;
});

// remove from cart
removeCartBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	// alert("quantity decreased");
	const productquantity = document.getElementById("quantity");
	let decreaseproduct = Number(productquantity.value) - 1
	if (decreaseproduct < 1) {
		decreaseproduct = Number(productquantity.value) + 1
	}else{
	  productquantity.value = decreaseproduct;
	}
});

// product added
cartBtn.addEventListener('click',(e)=>{
	e.preventDefault();

	// alert("product added");
	const productquantity = document.getElementById("quantity");
	const productcart = document.getElementById("cart-quantity");
	productcart.textContent = productquantity.value;
	productquantity.value = "1";
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})