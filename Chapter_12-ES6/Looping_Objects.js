//Looping Objects(Object_keys, values, entries)

// Objects are non-iterables but indirectly we can

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

// keys(Properties)

let properties = Object.keys(openingHours);
console.log(properties);

for (let key of properties) console.log(key);

//Values
let values = Object.values(openingHours);
console.log(values);

for (let key of values) console.log(key);

//complete object

let entries = Object.entries(openingHours);
console.log(entries);

for (let [key, { open, close }] of entries) console.log(key, open, close);
