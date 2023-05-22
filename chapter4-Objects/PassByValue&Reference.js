let arr = [1, 2, 3, 4, 5];

//Pass By Reference
let getRef = arr;
console.log(arr);

getRef[1] = 10;
getRef.shift(); //removes first element
console.log(arr); //value of original array is changed because array is passed as reference

//Pass By Value(ES6 spread Operator)
let getValue = [...arr];
getValue[1] = 20;
getValue.shift(); //removes first element
console.log(getValue);
console.log(arr); //value of original array is not changed because array is passed as value
