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

//Let suppose we want to check this hotel open on sturday or not
//If open then at what time

console.log(hotel.openingHours.saturday?.open); //optional chaining
