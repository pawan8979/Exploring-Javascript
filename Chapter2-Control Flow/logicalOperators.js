//And &&,  OR ||,  NOT !

let password = "qwerty@";
if (password.length > 5 && password.includes("@"))
  console.log("Strong password strength");
else if (password.length > 5 || password.includes("@"))
  console.log("Medium password strength");
else console.log("Weak password strength");

let status = false;
if (!status) console.log("Your status is ", status);

// Priorities
//Not
// And, OR from left to right

let result = (true && true) || (false && !false);
result = (true && true) || (false && true);
result = true || (false && true);
result = true && true;
console.log(result);
