const slides = document.querySelectorAll(".heroImage");

var counter = 0;

slides.forEach((slides, index) => {
  slides.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%) rotateZ(-45deg)`;
    if (counter >= 3) {
      counter = 0;
      slideImage();
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    counter++;
    slideImage();
  }, 6000);
});

// Function to generate a random name
function generateRandomName(category) {
  let names = [];
  if (category === "men") {
    names = [
      "Nike Airforce 1",
      "Air Max Solo",
      "Nike Airforce 1'07 LV8",
      "Dunk Low Older",
      "Air Max EXXEE",
      "Dunk Low Retro",
      "Dunk Low SE",
      "Dunk High Older",
      "Dunk Low Twist",
    ];
  } else if (category === "women") {
    names = [
      "Nike Airforce 1'07",
      "Air Max EXXEE Women",
      "Dunk Low Older Women",
      "Dunk Low SE Women",
      "Air Max Solo Women",
    ];
  }
  return names[Math.floor(Math.random() * names.length)];
}

const productDetailsElements = document.querySelectorAll(
  "#product-section-home .productDetails span"
);
productDetailsElements.forEach((productDetailElement) => {
  let categoryI = Math.floor(Math.random() * 2);
  if (categoryI == 0) {
    productDetailElement.textContent = "Men's Shoes";
  } else {
    productDetailElement.textContent = "Women's Shoes";
  }
});

// Function to generate a random price
function generateRandomPrice() {
  return Math.floor(Math.random() * (15000 - 5000) + 5000); // Generates a random price between 5000 and 15000
}

// Get all product details elements for men's and women's shoes
const menProductDetailsElements = document.querySelectorAll(
  ".productDetails.men"
);
const womenProductDetailsElements = document.querySelectorAll(
  ".productDetails.women"
);

// Update men's shoes
menProductDetailsElements.forEach((productDetailElement) => {
  const productNameElement = productDetailElement.querySelector("p");
  const priceTagElement = productDetailElement.querySelector(".priceTag");

  // Generate random name and price for men's shoes
  const randomName = generateRandomName("men");
  const randomPrice = generateRandomPrice();

  // Update the text content
  productNameElement.textContent = randomName;
  priceTagElement.textContent = `MRP: ${randomPrice}`;
});

// Update women's shoes
womenProductDetailsElements.forEach((productDetailElement) => {
  const productNameElement = productDetailElement.querySelector("p");
  const priceTagElement = productDetailElement.querySelector(".priceTag");

  // Generate random name and price for women's shoes
  const randomName = generateRandomName("women");
  const randomPrice = generateRandomPrice();

  // Update the text content
  productNameElement.textContent = randomName;
  priceTagElement.textContent = `MRP: ${randomPrice}`;

});
