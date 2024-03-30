function resetUserData() {
  localStorage.clear();
  sessionStorage.clear();
}

function loginSuccesfully() {
  loginPage.style.display = "none";
  heroPage.style.display = "flex";
  loginToken = true;
  sessionStorage.setItem("loginToken", loginToken);
}

function isLoginCheck() {
  try {
    let isLogin = sessionStorage.getItem("loginToken");
    if (isLogin) {
      loginSuccesfully();
    }
  } catch {}
}

isLoginCheck();

// Profile

const profileCon = document.getElementById("profile-con");
const userIdActive = document.getElementById("user-id");
const userIdDesactive = document.getElementById("user-id-open");

function toggleUserProfile() {
  profileCon.classList.toggle("active-profile");
}

const userIdVer = document.getElementById("user-id-ver");

userIdActive.addEventListener("click", toggleUserProfile);
userIdDesactive.addEventListener("click", toggleUserProfile);
userIdVer.addEventListener("click", toggleUserProfile);

// In the profile

const profileUsername = document.getElementById("profile-username");
const profileEmailAdd = document.getElementById("profile-email-add");
const logOutBtn = document.getElementById("log-out-btn");

function insertProfileData() {
  try {
    let rawDataProfile = localStorage.getItem("userData");
    let dataProfile = JSON.parse(rawDataProfile);
    let usernameData = dataProfile.userName;
    let emailData = dataProfile.emailAdd;

    profileUsername.innerText = usernameData;
    profileEmailAdd.innerText = emailData;
  } catch (err) {
    console.log(err);
  }
}

insertProfileData();

function logoutAcc() {
  resetUserData();
  window.location.href = "index.html";
}

logOutBtn.addEventListener("click", logoutAcc);

// responsive navbar

const menuBar = document.querySelector("#menu-bar ");
const verNavBg = document.getElementById("vertical-nav-bg");

menuBar.addEventListener("click", () => {
  verNavBg.classList.toggle("activeVerNav");
});
