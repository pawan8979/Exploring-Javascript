let dishes = ["Biryani", "Egg", "Soup"];
console.log(dishes[2]);
dishes[2] = "Sambar";
console.log(dishes);

//Array Methods

//Join Method
console.log(dishes.join("-")); //default comma

//indexOf
console.log(dishes.indexOf("Egg")); //case sensitive

//concat array

let newDishes = ["Jalebi", "Rasgulla"];
let update = dishes.concat(newDishes);

//length
console.log(update.length); //property

//push method
console.log(update.push("Golgappe")); //return length after pushing
console.log(update); //push updates data in original array

//pop method
console.log(update.pop()); //removes last element
