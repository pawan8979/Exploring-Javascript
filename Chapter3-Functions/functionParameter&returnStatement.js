let invitation = function (name = "defaultName") {
  console.log(`Welcome! ${name} You are invited on our event`);
};
invitation("Pawan");
invitation(); //if value not passed then undefined is taken as value

//return value from the function

let ageCalculaion = function (birthYear) {
  let age = 2023 - birthYear;
  return age;
};
console.log("Your current age is ", ageCalculaion(2000));
