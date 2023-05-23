//It is a pattern of characters used to do pattern matching or we can say for "Data Validation"

//Password validation
//length at least = 8
// At least contain one upper case letter
// At least contain one lower case letter
// At least contain one lower case letter
// At least contain one digit 0 to 9

let form = document.querySelector(".sign-up-Form");
console.log(form);
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let passwordValue = password.value;
  console.log(passwordValue);
  let result = passwordValue.match(passwordPattern);
  if (result) {
    console.log("strong password");
  } else console.log("weak password");
});
