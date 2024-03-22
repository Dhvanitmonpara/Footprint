const cartBg = document.getElementById("cart-bg");

function toggleCart() {
  cartBg.classList.toggle("active-cart");
}

const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", toggleCart);

const backFromCart = document.getElementById("back-from-cart");
backFromCart.addEventListener("click", toggleCart);