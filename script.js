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

// login page

const regForm = document.getElementById("registration-form");
regForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  var regErrorMessage = document.getElementById("registration-error-message");

  if (
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    regErrorMessage.textContent = "Please fill out all fields";
  } else if (password !== confirmPassword) {
    regErrorMessage.textContent = "Passwords do not match";
  } else {
    // Simulated registration process (here you can add your actual registration logic)
    alert(
      "Registration successful!\nUsername: " +
        username +
        "\nEmail: " +
        email +
        "\nPassword: " +
        password
    );

    // storing data
    let userData = {
      userName: username,
      emailAdd: email,
      userPassword: password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
    regErrorMessage.textContent = "";
  }

  loginSuccesfully();
});

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let userEmail = document.getElementById("userEmail").value;
  let storedUserPassword = document.getElementById("userPassword").value;
  let loginErrorMessage = document.getElementById("login-error-message");

  let rawData = localStorage.getItem("userData");
  let userData = JSON.parse(rawData);

  let userName = userData.userName;
  let emailAdd = userData.emailAdd;
  let userPassword = userData.userPassword;

  if (userEmail.trim() === "" || storedUserPassword.trim() === "") {
    loginErrorMessage.textContent = "Please fill out all fields";
  } else if (storedUserPassword !== userPassword || userEmail !== emailAdd) {
    loginErrorMessage.textContent = "Email address or password is incorrect";
  } else {
    console.log("login successfully");
    loginSuccesfully();
  }
});

const heroPage = document.getElementById("heroPage");
const loginPage = document.getElementById("loginPage");

function loginSuccesfully() {
  loginPage.style.display = "none";
  heroPage.style.display = "flex";
}
heroPage.style.display = "none";

const registrationField = document.querySelector(".reg-container");
const loginField = document.querySelector(".login-container");

function loginToggleFunc() {
  loginField.classList.toggle("loginToggler");
  registrationField.classList.toggle("loginToggler");
}

function regToggleFunc() {
  loginField.classList.toggle("loginToggler");
  registrationField.classList.toggle("loginToggler");
}

const loginToggleBtn = document.getElementById("loginToggleBtn");
const regToggleBtn = document.getElementById("regToggleBtn");

loginToggleBtn.addEventListener("click", loginToggleFunc);
regToggleBtn.addEventListener("click", regToggleFunc);

function resetUserData(){
  localStorage.clear()
}