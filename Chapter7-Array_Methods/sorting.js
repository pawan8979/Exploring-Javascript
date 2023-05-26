//By default sort methods are used to sort strings
//It firstly convert eveerything into string and then..

let letters = ["d", "e", "f", "a", "b"];
console.log(letters.sort());

let nums = [2, 5, -7, 2, -89, -1];
// console.log(nums.sort()); Unexpected wrong values

console.log("Unsorted Values : ", nums);

// if a-b < 0 => a < b => A,B (Keep Order Same)
// if a-b > 0 => a > b => B,A (Switch the order)

// nums.sort((a, b) => {
//   if (a < b) return -1; //Any number less than 0
//   if (a > b) return 1; //Any number greater than 0
// });
nums.sort((a, b) => {
  return a - b; //ascending sort
  return b - a; //descending sort
});

console.log("Sorted Values : ", nums);
