let hotel = {
  name: "EatIt",
  address: "Basant Vihar Delhi",
  categories: ["chinese", "Italian", "English"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  starterMenu: ["SpecialFoodA", "SpecialFoodB"],
  openingHours: {
    sunday: { open: "09:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
    Tuesday: { open: "08:00AM", close: "12:00PM" },
  },
};

let menu = [...hotel.mainMenu, ...hotel.starterMenu];
console.log(menu);

for (let element of menu) console.log(element);

for (let item of menu.entries()) {
  //   console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`);
}
for (let [i, item] of menu.entries()) {
  //   console.log(item);
  console.log(`${i + 1}: ${item}`);
}
