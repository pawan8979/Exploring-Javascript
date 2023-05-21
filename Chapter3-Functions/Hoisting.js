//variable "declaration" are "hoisted" towards "top" of their scope
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

//Arrow function do not have hoisting

test();
let test = () => {
  console.log("Hoisting is fun");
};
