let hotel = {
  name: "hotel",
  location: "Street No xyz Delhi",
  categories: ["Chinese", "Italian", "English"],
};

// Simple Example
// without destructuring

let items = [2, 3, 5, 6];
// let x = items[0];
// let y = items[1];
// let z = items[2];
// let p = item[3];
// console.log(x,y,z,p)

//with destructuring
let [x, y, z, p] = items;
console.log(x, y, z, p);

//Example2
let [first, , third] = hotel.categories;
console.log(first, third);

//Switch the category(Usecase)
// Without destructuring
let temp = first;
first = third;
third = temp;
console.log(first, third);

//with destructuring
[first, third] = [third, first];
console.log(first, third);

//Destructuring of nested arrays
let nums = [2, 3, [6, 9]];
// let [a,b]= nums;
let [a, , [b, c]] = nums;
console.log(a, b, c);
