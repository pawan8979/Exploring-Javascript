//keyboard Event
//live checking of username when user is typing username

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

//live feedback

user.addEventListener("keyup", (e) => {
  if (userNamePattern.test(e.target.value)) {
    //true
    user.setAttribute("class", "success");
  } else {
    user.setAttribute("class", "error");
  }
  //   if (userNamePattern.test(e.target.value)) console.log("Valid username");
  //   else console.log("invalid username");
  //   if (userNamePattern.test(form.name.value)) console.log("Valid username");
  //   else console.log("invalid username");
  //   let username = user.value;
  //   console.log(username);
  //   if (userNamePattern.test(username)) console.log("Valid username");
  //   else console.log("invalid username");
});
