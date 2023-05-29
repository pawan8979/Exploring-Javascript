//Importing and Exporting ES6 modules

//------------IMPORTING FILE--------

import {
  order,
  laptopPrice,
  quant as q,
} from "./Chapter_13-Modern Tooling/Exporting.js";

//import * as singleVariable from "./Chapter_13-Modern Tooling/Exporting.js";

//default import
// import ordeeerr from "./Chapter_13-Modern Tooling/Exporting.js";

console.log("Importing module");
order("Jack", "Laptop");
console.log("Laptop Price= ", laptopPrice);
console.log("Quantity= ", q);
console.log(singleVariable.laptopPrice);

// ----------EXPORTING FILE-------

console.log("Exporting module");

export let order = function (buyer, item) {
  console.log(`${buyer} ordered this ${item}`);
};

let laptopPrice = 5000;
let quantity = 25;

export { laptopPrice, quantity as quant };

export default order; //default export
