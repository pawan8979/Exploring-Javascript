//Rest pattern and parameter

let hotel = {
  name: "EatIt",
  address: "Basant Vihar Delhi",
  categories: ["chinese", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
    Tuesday: { open: "08:00AM", close: "12:00PM" },
  },
};

// Spread(...) operator. It is present in the RHS of =
let nums = [2, 3, 4, 5];
let newArray = [1, ...nums];
console.log(newArray);

// Syntax of REST(...) Get elements and packed them into array
// Use in LHS

let [a, b, ...others] = nums;
console.log(others);

//Objects

let { sunday, ...weekDays } = hotel.openingHours;
console.log(sunday, weekDays);
