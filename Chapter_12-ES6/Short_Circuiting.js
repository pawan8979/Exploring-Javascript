//Short-Circuiting (&& ||)

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

//  AND (&&) operator (Output true if all input true)
let result = 5000 && "coders";
console.log(result); // last value comes

let result2 = null && "coders";
console.log(result2); // first value comes

let result3 = 5 && 0 && "coders";
console.log(result3); // middle value comes
// OR(||) operator (Output true if any given input true)

let ans = 5000 || "coders";
console.log(ans); // first value comes

let ans2 = null || "coders";
console.log(ans2); // last value comes

let ans3 = "" || 8 || null;
console.log(ans3); // middle value comes
