//Passing function as an argument(HOF)/Callbacks

let upperCase = function (str) {
  return str.toUpperCase();
};

let lowerCase = function (str) {
  return str.toLowerCase();
};

let transformer = function (str, fun) {
  return fun(str);
};

console.log(transformer("pawan", upperCase));
console.log(transformer("Pawan", lowerCase));

// Function returning another function(HOF)/Returning Functions

let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
};

compliment("You are a good coder")("Pawan");

//2nd method-> Advantage is that in above method we have to again and again invoke both msg and name but in the below method msg value will be stored and fixed once and we can invoke name multiple times

let complimented = compliment("You are a good coder");
complimented("Vivek");

//Immediately Invoked Function Expression
//Executed only once

//Now this expression
(function (name) {
  console.log("This function will never execute again", name);
})("Jack");
