//Map Method
//Create a new array from original array by applying transformation function

let salaries = [3000, 5000, 8000, 6000, 9000];
let newSalaries = salaries.map((salary) => {
  let incrementedAmount = salary / 2;
  return salary + incrementedAmount;
});
console.log(salaries);
console.log(newSalaries);

//filter method
//Used to perform filtration on array

let gifts = ["Watch", "choclates", "Ring", "Teddy", "Cloth"];

let filteredGift = gifts.filter((gift) => {
  if (gift === "Watch" || gift === "Ring") {
    return gift;
  }
});

console.log(filteredGift);

//reduce method(Non Mutable)
//Run reducer function for each element
//Array.reduce(function(total, currentValue), initialValue)
//It return single value

//sum of all elements using reduce method

let arr = [1, 5, 8, 3, 9];
let sum = arr.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(sum);
