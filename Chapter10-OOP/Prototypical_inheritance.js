//Prototypal inheritance on built in objects(arrays)

let Car = function (color, model) {
  //properties
  this.color = color;
  this.model = model;
};
//method
Car.prototype.startEngine = function () {
  console.log("Engine started");
};
//we can also set properties to prototype
Car.prototype.company = "Honda";

let instanceOfCar = new Car("Black", 2023);
let instance = new Car("Yellow", 2012);
console.log(instanceOfCar, instance);

console.log(instance.__proto__.isPrototypeOf(instance)); //true
console.log(Car.prototype.isPrototypeOf(Car)); //false
console.log(instance.__proto__); //same
console.log(Car.prototype); //same

//Car.prototype is "prototype of all" objects created through the Car constructor

let arr = [2, 3, 4, 5, 7, 8]; //[] is same as new Array([])
console.log(arr.__proto__, Array.prototype);
console.log(arr.__proto__.__proto__); //chaining of prototype
