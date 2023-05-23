let form = document.querySelector(".sign-up-Form");
console.log(form);
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(email.value, password.value);
  console.log(form.userEmail.value, form.userPassword.value);
  console.log("Form submitted");
});
