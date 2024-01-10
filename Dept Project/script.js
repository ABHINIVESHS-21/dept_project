const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnpopup = document.querySelector(".btnlogin-popup");
const iconclose = document.querySelector(".icon-close");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnpopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconclose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// login for email//
function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  if (email == "abhi@gmail.com" && password == "abhi123") {
    window.location.assign("Faculty.html");
    alert("login success");
  } else {
    alert("invalid information");
    return;
  }
}
