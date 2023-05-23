let ageCalculate = function (birthyear) {
  let age = 2023 - birthyear;
  console.log(`Current age is = ${age}`);
};

ageCalculate(2003);

//Methods
//Some functions which are declared inside object
//object property(key) holding function as value

let person = {
  ageCalculate: function (birthyear = 2000) {
    let age = 2023 - birthyear;
    return age;
  },
};
console.log(`Current age is ${person.ageCalculate(2003)}`);
