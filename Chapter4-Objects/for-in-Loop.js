let car = {
  model: 2022,
  color: "black",
  company: "Toyota",
};

console.log(car);

for (let key in car) {
  console.log(key); //print key names
  console.log(car[key]); //print value
}

let arr = ["mango", "banana", "cherry"];
for (let index in arr) {
  console.log(index); //print indexes
  console.log(arr[index]); //print values
}
