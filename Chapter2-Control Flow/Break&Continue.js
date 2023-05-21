//break ->used to exit or terminate the loop prematurely

let fruits = ["Berry", "Apple", "Banana", "Avacado"];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Banana") break;
  console.log(fruits[i]);
}
// O/P: Berry Apple

//continue->used to skip the current iteration of a loop and continue with the next iteration.
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Banana") continue;
  console.log(fruits[i]);
}
// O/P: Berry Apple Avacado
