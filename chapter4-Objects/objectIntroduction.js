// Objects in JavaScript do not guarantee property order, so the iteration order may vary
let car = {
  color: "black",
  model: 2016,
  company: "Honda",
  2: "check",
};

console.log(car);

//Accessing the Javascript object properties

console.log(car["color"]);
console.log(car.model);
console.log(car[2]);

let propertyName = "color";
console.log(car[propertyName]); //black
console.log(car.propertyName); //undefined

//Modify the object
car.color = "brown";
car.model = 2020;
car["company"] = "Hero";
console.log(car);

//Delete properties of object

let obj = {
  prop1: "value1",
  prop2: "value2",
};
delete obj.prop1;
let returnValue = delete obj["prop2"];
//It always return true
console.log(obj, returnValue);
