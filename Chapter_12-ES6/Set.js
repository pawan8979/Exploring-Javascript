//sets are just collection of unique values

let openingHours = {
  sunday: { open: "09:00AM", close: "11:00PM" },
  monday: { open: "10:00AM", close: "10:00PM" },
  Tuesday: { open: "08:00AM", close: "12:00PM" },
};

let hotel = {
  name: "EatIt",
  address: "Basant Vihar Delhi",
  categories: ["chinese", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  starterMenu: ["SpecialFoodA", "SpecialFoodB"],
  //   openingHours:openingHours //before es6
  openingHours, //after es6
};

//Example

let itemset = new Set([1, 2, 3, 1, 4, 6, 4]);
let itemset2 = new Set("Programmer");
console.log(itemset);
console.log(itemset.size); //5
console.log(itemset.has(2)); //true
itemset.add(9);
console.log(itemset);
itemset.delete(9);
// console.log(itemset[0]); //Not allowed

for (let item of itemset) {
  console.log(item);
}
