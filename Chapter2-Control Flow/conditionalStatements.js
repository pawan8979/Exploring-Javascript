// if statement
let budget = 700000;
if (budget > 500000) {
  console.log("Purchase Mustang GT");
}

// nested if
if (budget > 500000) {
  console.log("Purchasing Mustang GT");
  if (budget == 700000) console.log("Mustang GT Purchased");
}

// if else statement
if (budget > 500000) {
  console.log("Purchase Mustang GT");
} else {
  console.log("Purchase Alto");
}

// else if statement
if (budget > 500000) {
  console.log("Purchase Mustang GT");
} else if (budget == 500000) {
  console.log("Purchase BMW");
} else {
  console.log("Purchase Alto");
}
