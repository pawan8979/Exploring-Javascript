//ES6 Classes(They still implement prototypal inheritance behind the scene)

//Classes are not hoisted
//Classes are also first class citizens(Pass as an argument or return)
//classes are executed in strict mode

//class declaration

class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("Engine Started");
  }
}

Car.prototype.breakMethod = function () {
  console.log("Break method");
};

let honda = new Car("Red", 2022);
console.log(honda.__proto__.isPrototypeOf(honda));
console.log(honda);
honda.startEngine();
honda.breakMethod();
