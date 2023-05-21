//Ternary Operator
let budget = 700000;
let age = parseInt(prompt("Please enter age:"), 10);
let result =
  budget > 500000 ? (age > 18 ? "Legal" : "Illegal") : "Purchase Alto";

console.log(result);

//Switch case

switch (age) {
  case 18:
    console.log("Age is", 18);
    break;
  case 20:
    console.log("Age is", 20);
    break;
  case 23:
    console.log("Age is", 23);
    break;
  default:
    console.log("Invalid Age");
}
