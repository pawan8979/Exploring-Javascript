//slice method(non mutable)
//used to extract part of the array
//Array.slice(startIndex, lastIndex(excluded))
//Return new Array of extracted elements

let num = [3, 5, 7, 9, 2];
let extracted = num.slice(1, 4);
console.log(extracted);

// splice method(mutable)
//used to add new elements into the array
//Array.splice(index, deleteValue, valueToBeAdded)
//Return deleted items in the form of array

let numbers = [3, 5, 7, 9, 2];
let updated = numbers.splice(1, 2, 1);
console.log(numbers);
console.log(updated); //5

//at Method
let no = [23, 45, 3, 4, 5];
console.log(no[0]);
console.log(no.at(0));
//getting last element of array
console.log(no[no.length - 1]);
console.log(no.slice(-3)[2]);
console.log(no.at(-1));
//at method can work on strings
let name = "john";
console.log(name.at(-3));
