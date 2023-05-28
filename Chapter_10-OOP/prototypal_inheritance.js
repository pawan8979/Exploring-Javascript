//prototypal inheritance (using cinstructor function)

//parent class

let Car = function (color, model) {
  //properties
  this.color = color;
  this.model = model;
};
//method
Car.prototype.startEngine = function () {
  console.log("Engine started");
};

let honda = new Car("blue", 2021);
console.log(honda);

//child class
let Bike = function (color, model, engineCapacity) {
  Car.call(this, color, model);
  this.engineCapacity = engineCapacity;
};

Bike.prototype = Object.create(Car.prototype);

let bike1 = new Bike("Green", 2019, "200CC");
console.log(bike1);
