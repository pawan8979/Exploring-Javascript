//Arrow Funtion(ES6)

//Special Form of Function expression
/*It allows us to write funtion more fast because:
1. NO need to use function keyword
2. No need to use paranthesis() in case of single parameter
3. No need to use curly{} if single line code in function
4. No need to use return statement if single line code in function
*/

//function expression

//single parameter and statement
let invitation = (name) => `Welcome ${name} to this event`;

console.log(invitation("Coders"));

//multiple parameter and statement
let invitation = (name, age) => {
  console.log(age);
  return `Welcome ${name} to this event`;
};

console.log(invitation("Coders", 23));
