//Closures

//Closure means inner function has an access to the variables and parameter of outer function even after outer function has returned

let outerFunction = function (outerParameter) {
  let outerVariable = "Outer Variable";
  let innerFunction = function () {
    console.log(outerVariable, outerParameter);
  };
  return innerFunction;
};

let innerFunc = outerFunction("outerParameter");
console.log(innerFunc);
innerFunc();

//Closure does not make separate copy of outer variable
//It just reference them

let counter = function () {
  let count = 0;
  let innerCounter = function () {
    return (count = count + 1);
  };
  return innerCounter;
};

let innerCount = counter();
console.log(innerCount);
console.log(innerCount()); //1
console.log(innerCount()); //2
