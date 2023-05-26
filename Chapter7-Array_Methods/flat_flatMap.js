//flat method(Non Mutating)
//It creates a new array with the elements of the subarrays concatenated into it

let arrFlat = [1, 2, 3, [4, 5, [6, 8, 9]]];
console.log("Before flatting ", arrFlat);
let resFlat = arrFlat.flat(2); //by default 1 is passed inside the paranthesis that demonstrates that it will flat the array to 1 level
console.log("After flatting ", resFlat);

//flatMap method
//It is the combination of the map() method followed by the flat() method of depth 1

let cart = [
  {
    name: "Mobile",
    qty: 2,
    price: 500,
  },
  {
    name: "Tablet",
    qty: 1,
    price: 1000,
  },
];

let newCart = cart.flatMap((item) => {
  if (item.name === "Mobile") {
    return [
      item,
      {
        name: "Screen Guard",
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});

console.log(newCart);
//using map how to achieve flatMap
let newCartMap = cart.map((item) => {
  if (item.name === "Mobile") {
    return [
      item,
      {
        name: "Screen Guard",
        qty: 1,
        price: 0,
      },
    ];
  } else {
    return [item];
  }
});

console.log(newCartMap.flat());
