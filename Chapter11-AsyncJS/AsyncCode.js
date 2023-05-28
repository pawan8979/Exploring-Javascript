//Async code example

console.log(1);
console.log(2);

//Async code
setTimeout(() => {
  console.log("Call back function called after 3 seconds");
}, 3000);

console.log(3);
console.log(4);
console.log(5);
