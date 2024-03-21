function addWomenShoesText() {
  const womenProductDetailsElements = document.querySelectorAll(
    "#product-section-home .productDetails span"
  );

  womenProductDetailsElements.forEach((productDetailElement) => {
    if (productDetailElement.textContent === "Men's Shoes") {
      productDetailElement.textContent = "Women's Shoes";
    }
  });
}

window.addEventListener("load", addWomenShoesText);
