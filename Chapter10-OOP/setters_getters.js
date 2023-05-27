//setters and getters
//Introduced in ES5 2009
//Getters and Setters allow you to define object accessors(computed properties)

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("Engine Started");
  }

  get _startEngine() {
    console.log("start enginer using getter");
  }

  get description() {
    return `color of Bike is ${this.color} and its model is ${this.model}`;
  }

  set changeColor(color) {
    console.log((this.color = color));
  }
}

//static method start here
Car.breakMethod = function () {
  console.log("This is break method of car");
};
//end here

Car.prototype.breakMethod = function () {
  console.log("Break method");
};

let honda = new Car("Red", 2022);
honda.startEngine(); //accessing as function
honda._startEngine; //accessing as properties
honda.changeColor = "blue"; //set as property
console.log(honda);
console.log(honda.description);
Car.breakMethod(); //static method called using class name not isntance of class
