const cartBg = document.getElementById("cart-bg");

function toggleCart() {
  cartBg.classList.toggle("active-cart");
}

const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", toggleCart);

const backFromCart = document.getElementById("back-from-cart");
backFromCart.addEventListener("click", toggleCart);


const cartBgBlog = document.getElementById("cart-bg");
const profileConBlog = document.getElementById('profile-con')

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    profileConBlog.classList.add("active-profile");
    cartBgBlog.classList.remove("active-cart");
  }
});