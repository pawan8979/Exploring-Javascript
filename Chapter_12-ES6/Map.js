//Map is used to map values into keys
// In map the data type of keys can be of any

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

let restaurantMap = new Map();

//Adding values into the Map

restaurantMap.set("name", "Starbucks");
restaurantMap.set(1, "Address1");
restaurantMap
  .set(2, "Address2")
  .set(true, "WE are open today")
  .set(false, "We are close today");
console.log(restaurantMap);

//Getting the value
console.log(restaurantMap.get(2));
console.log(restaurantMap.get(false));
console.log(restaurantMap.size);
