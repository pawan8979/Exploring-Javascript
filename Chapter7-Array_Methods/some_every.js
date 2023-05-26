//some and every method(true/false)
//some method return true if any array element pass the test
//every method return true if all elements pass the test

let scores = [25, 34, 67, 65, 80, 92];
let resultSome = scores.some((score) => {
  return score > 90;
});
console.log("Some result = ", resultSome);

let resultEvery = scores.every((score) => {
  return score > 50;
});
console.log("Every result = ", resultEvery);
