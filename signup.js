const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const signupToggle = document.getElementById("signup-toggle");
const loginToggle = document.getElementById("login-toggle");
const errorMessage = document.getElementById("error-message");

signupToggle.addEventListener("click", function () {
  signupForm.style.display = "block";
  loginForm.style.display = "none";
  errorMessage.textContent = "";
});

loginToggle.addEventListener("click", function () {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  errorMessage.textContent = "";
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const companyName = document.getElementById("company-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const companyType = document.getElementById("company-type").value.trim();
  const description = document.getElementById("description").value.trim();

  if (
    !companyName ||
    !email ||
    !password ||
    !confirmPassword ||
    !companyType ||
    !description
  ) {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    return;
  }

  alert("Registration successful!");

  signupForm.reset();
  errorMessage.textContent = "";
  window.location.href = "HomePage.html";
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    errorMessage.textContent = "Please enter your email and password.";
    return;
  }

  alert("Login successful!");

  loginForm.reset();
  errorMessage.textContent = "";
  window.location.href = "HomePage.html";
});
