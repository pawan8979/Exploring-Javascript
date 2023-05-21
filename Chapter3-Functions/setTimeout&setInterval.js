//setTimeout -> Run function "once" after "interval" of time

/*Syntax:
setTimeout(func|code, delay, arg1, arg2,...)
*/
function greeting() {
  console.log("Welcome to family");
}

setTimeout(greeting, 5000); //5sec

setTimeout(
  (name) => {
    console.log(`Welcome ${name} to family`);
  },
  5000,
  "john"
);

//setInterval -> Run function repeatedly, starting after the interval of time, then repeating....

/*Syntax:
setInterval(func|code, delay, arg1, arg2,...)
*/
setInterval(greeting, 5000);
setInterval(
  (name) => {
    console.log(`Hi ${name} whats up!`);
  },
  5000,
  "Patrick"
);
