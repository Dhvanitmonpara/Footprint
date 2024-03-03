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