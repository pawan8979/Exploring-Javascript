//Each object created by constructor function have an access to all methods present inside that constructor prototype

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
console.log(Car.prototype);
let instanceOfCar = new Car("Black", 2023);
let instance = new Car("Yellow", 2012);
console.log(instanceOfCar, instance);
console.log(instance instanceof Car); //true
instanceOfCar.startEngine();
console.log(instanceOfCar.__proto__);
