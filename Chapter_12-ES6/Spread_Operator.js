//Spread Operator(Unpacking of array elements)

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

let nums = [2, 3, 5, 7];
console.log(...nums);

//Usecase
let newArray = [9, 10, ...nums];
console.log(newArray);

let updatedMainMenu = [...hotel.mainMenu, "FoodD", "FoodE"];
console.log(updatedMainMenu);

// Join 2 Arrays

let joinedArray = [...nums, ...newArray];
console.log(joinedArray);

//Create shallow copy using spread operator--change in one does not impace other
let copyArray = [...updatedMainMenu];
copyArray[1] = "UpdatedFood";
console.log(copyArray);
console.log(updatedMainMenu);

// We cam also use spread operator on strings

let passion = "Programming";
console.log(...passion);
