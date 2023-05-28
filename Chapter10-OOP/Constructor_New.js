// Constructor function and the new Operator
// we can not use arrow function as constructor
//call constructor function using new keyword

//1 new {object} created empty initially
//2 "this" = {object}
//3 object linked to prototype
//4 functional automatically return {object}

let Car = function (color, model) {
  //properties
  this.color = color;
  this.model = model;
  //Not a good practice below hence we use prototype
  this.login = function () {
    console.log("login method");
  };
};
let instanceOfCar = new Car("Black", 2023);
let instance = new Car("Yellow", 2012);
console.log(instanceOfCar, instance);
console.log(instance instanceof Car); //true
