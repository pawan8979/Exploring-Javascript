// Nullish coalescing operator (??)

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

// falsey values are 0, null, false, undefined, ''(empty string)
// for || operator

let numGuests = 0;
let result = numGuests || 10;
console.log(result); //10

// For nullish coalesing operator (??) only null and undefined are falsy value

let result2 = numGuests ?? 10;
console.log(result2); //0
//0 is not nullish value
//It returns first non-nullish value
