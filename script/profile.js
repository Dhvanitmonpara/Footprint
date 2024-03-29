let loginToken;

const profileUsernameReg = document.getElementById("profile-username");
const profileEmailAddReg = document.getElementById("profile-email-add");

function insertProfileDataReg() {
  try {
    let rawDataProfileReg = localStorage.getItem("userData");
    let dataProfileReg = JSON.parse(rawDataProfile);
    let usernameDataReg = dataProfile.userName;
    let emailDataReg = dataProfile.emailAdd;

    profileUsernameReg.innerText = usernameDataReg;
    profileEmailAddReg.innerText = emailDataReg;
  } catch (err) {
    console.log(err);
  }
}

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
  insertProfileDataReg()
});

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginErrorMessage = document.getElementById("login-error-message");
  try {
    let rawData = localStorage.getItem("userData");
    let userData = JSON.parse(rawData);

    let userEmail = document.getElementById("userEmail").value;
    let storedUserPassword = document.getElementById("userPassword").value;

    let userName = userData.userName;
    let emailAdd = userData.emailAdd;
    let userPassword = userData.userPassword;

    if (userEmail.trim() === "" || storedUserPassword.trim() === "") {
      loginErrorMessage.textContent = "Please fill out all fields";
    } else if (storedUserPassword !== userPassword) {
      loginErrorMessage.textContent = "Incorrect password";
    } else if (userEmail !== emailAdd) {
      loginErrorMessage.textContent = "Incorrect email address";
    } else {
      loginSuccesfully();
      loginErrorMessage.textContent = "";
    }
  } catch {
    loginErrorMessage.textContent =
      "You doesn't have any account, try to register first.";
  }
});

const heroPage = document.getElementById("heroPage");
const loginPage = document.getElementById("loginPage");

function loginSuccesfully() {
  loginPage.style.display = "none";
  loginToken = true;
  sessionStorage.setItem("loginToken", loginToken);
}

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
