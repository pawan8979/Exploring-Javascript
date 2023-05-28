//Class Inheritance(sub class)

//Class declaration

//Parent class
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  startEngine() {
    console.log("Engine Started");
  }
}

//child class
class Bike extends Car {
  //Add some new properties and method as well
  constructor(color, model, engineCapacity) {
    super(color, model);
    this.engineCapacity = engineCapacity;
  }

  bikeMethod() {
    console.log("This is Method of Bike class");
  }
}

let newBike = new Bike("Black", 2023, "125CC");
console.log(newBike);
newBike.bikeMethod();
newBike.startEngine();
