let num = [1, 2, 3, 4, 5, 6];

let result = num.slice(0, 3).splice(2, 1, 7);
console.log(result, num);
// original array didnt changed because slikce created copy of array and then splice(mutating) is applied on it

let results = num.slice(0, 3).splice(2, 1, 7).push(8, 9);
console.log(results, num);
//push method return new length of the array
