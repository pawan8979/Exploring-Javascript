//variable "declaration" are "hoisted" towards "top" of their scope
//Js interpreter reads function definition before executing code
//only with var

value = 10;
console.log(value);
var value;

/*Function declaration hoisting
Function hoisting is a JavaScript behavior where function declarations are moved to the top of their scope during the compilation phase, allowing them to be called before their actual declaration in the code. This means that you can call a function before it appears in the code, and it will still execute correctly.
*/

test();
function test() {
  console.log("Hoisting is fun");
}

//function expression do not support hoisting
test();
var test = function(){
  console.log("Hoisting is fun");
};

//Arrow function do not support hoisting

test();
let test = () => {
  console.log("Hoisting is fun");
};
