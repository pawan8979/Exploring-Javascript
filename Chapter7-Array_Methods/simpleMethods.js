//Simple Methods

let letters = ["a", "b", "C", "d"];

//Reverse(Mutate the original array)
letters.reverse();

//concat(non mutable)
let nums = [1, 2, 3, 4];
let concated = nums.concat(letters);
console.log([...nums, ...letters]);
console.log(concated);

//join (non mutable)
let joined = letters.join("-");
console.log(joined);


