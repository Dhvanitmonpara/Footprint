const productBox = document.querySelectorAll(".product-box");
const productBuyBg = document.getElementById("product-buy-bg");
const productBackBtn = document.getElementById("product-back-btn");
const productNameBuy = document.getElementById("product-name-buy");
const productCatBuy = document.getElementById("product-category-buy");
const priceTagBuy = document.getElementById("priceTagBuy");
const productImgBuy = document.getElementById("product-buy-img");

function toggleProductDetails() {
  productBuyBg.classList.toggle("activateProductDetails");
}

productBox.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    toggleProductDetails();
    const imgSrc = event.target.parentElement.querySelector("img").src;
    const shoesName = event.target.parentElement.querySelector("p").innerText;
    const shoesType =
      event.target.parentElement.querySelector("span").innerText;
    const shoesPrice =
      event.target.parentElement.querySelector(".priceTag").innerText;

    //   assigning values
    productImgBuy.src = imgSrc;
    priceTagBuy.innerText = shoesPrice;
    productNameBuy.innerText = shoesName;
    productCatBuy.innerText = shoesType;
  });
});

productBackBtn.addEventListener("click", toggleProductDetails);

const sizePara = document.querySelectorAll("#shoes-size p");

sizePara.forEach((d) => {
  d.addEventListener("click", (e) => {
    sizePara.forEach((x) => {
      x.classList.remove("activePara");
    });
    e.target.classList.add("activePara");
  });
});

// cart

const cartTotalAmount = document.getElementById("cart-total-amount");

function totalAmount() {
  const amounts = document.querySelectorAll(".cart-product-price");
  let totalval = 0;
  amounts.forEach((e) => {
    const price = parseFloat(e.innerText.replace("MRP:", ""));
    totalval += price;
  });

  cartTotalAmount.innerText = `Total MRP: ${totalval}`;
}

totalAmount();

const removeCart = document.querySelectorAll(".remove-cart");

removeCart.forEach((e) => {
  e.addEventListener("click", (elem) => {
    elem.target.parentElement.parentElement.remove();
    totalAmount();
  });
});

const cartBg = document.getElementById("cart-bg");

function toggleCart() {
  cartBg.classList.toggle("active-cart");
}

const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click", toggleCart);

const backFromCart = document.getElementById("back-from-cart");
backFromCart.addEventListener("click", toggleCart);

// imprting data

const cartBody = document.getElementById("cart-body");
const shoeSizes = document.querySelectorAll('#shoes-size p')

function importData() {

let cartSize = 0

  shoeSizes.forEach((e)=>{
    if(e.classList.contains('activePara')){
      cartSize = e.innerText
    }
  })

  const newShoe = document.createElement("div");
  newShoe.innerHTML = `<img width="270px" id="cart-product-img" src="${productImgBuy.src}" alt="" />
  <div class="cart-productDetails">
    <svg class="remove-cart" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 320.591 320.591" style="enable-background: new 0 0 512 512" xml:space="preserve">
      <g>
        <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" fill="#000" opacity="1" data-original="#000000" class=""></path>
        <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" fill="#000" opacity="1" data-original="#000000" class=""></path>
      </g>
    </svg>
    <h1 class="cart-product-name">${productNameBuy.textContent}</h1>
    <span class="cart-product-category">${productCatBuy.textContent}</span>
    <div class="cart-product-price">${priceTagBuy.textContent}</div>
    <div class="cart-product-size">${cartSize}</div>
  </div>`;

  newShoe.classList.add("cart-product-box");

  cartBody.appendChild(newShoe);

  const cartRemove = newShoe.querySelector(".remove-cart");
  cartRemove.addEventListener('click', (e)=>{
    e.target.parentElement.parentElement.remove()
    totalAmount()
  });

  totalAmount()
}

const addToCart = document.getElementById("add-to-cart");

function addToCartFunc () {
  importData()

  addToCart.innerText = "successfully added!"
  setTimeout(() => {
    addToCart.innerText = "Add to cart"
  }, 3000);
}

addToCart.addEventListener("click", addToCartFunc);
