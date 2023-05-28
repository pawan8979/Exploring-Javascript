//Destructuring of objects

let hotel = {
  name: "EatIt",
  address: "Basant Vihar Delhi",
  categories: ["chinese", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
  },
};

// let { name, address, mainMenu } = hotel;
// console.log(name, address, mainMenu);

//set customize name to object property

let { name: hotelName, address: hotelLocation, mainMenu: hotelMenu } = hotel;
console.log(hotelName, hotelLocation, hotelMenu);

//setting default values

// let { name, Menu = [], categories = [] } = hotel;
// console.log(name, Menu, categories);

//Destructuring of nested objects

let { name, openingHours } = hotel;
console.log(name, openingHours);

let {
  monday: { open, close },
} = openingHours;
// console.log(monday);
console.log(open, close);
