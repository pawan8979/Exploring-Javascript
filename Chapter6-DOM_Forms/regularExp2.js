//Basic Form validation
//Implement username validation

//username can only consist of A-Z or a-z
//length of username between 6 to 12

let form = document.querySelector(".sign-up-Form");
console.log(form);
let user = document.querySelector("#name");
let password = document.querySelector("#password");
let userNamePattern = /^[A-Za-z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = user.value;
  console.log(username);
  //test method return boolean values
  let result = userNamePattern.test(username);
  if (result == true) console.log("Valid Username");
  else console.log("Invalid username");
});
