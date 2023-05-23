//Its another type of loop which we used to traverse over the array

let dishes = ["Biryani", "Golgappe", "Chicken"];

dishes.forEach(function (element) {
  console.log(element);
});

const person = {
  name: "John",
  age: 30,
  profession: "Developer",
};

Object.keys(person).forEach((key) => {
  console.log(key + ": " + person[key]);
});
