let openingHours = {
  sunday: { open: "09:00AM", close: "11:00PM" },
  monday: { open: "10:00AM", close: "10:00PM" },
  Tuesday: { open: "08:00AM", close: "12:00PM" },
};

let menuType = "platinumMenu";

let hotel = {
  name: "EatIt",
  address: "Basant Vihar Delhi",
  categories: ["chinese", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  starterMenu: ["SpecialFoodA", "SpecialFoodB"],
  //   openingHours:openingHours //before es6
  openingHours, //after es6
  order() {}, //after es6
  [menuType]: ["Different Food Items.."], //After es6
};

console.log(hotel);
