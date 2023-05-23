//making the button listner
let eventElement = document.querySelector(".clickMe");
eventElement.addEventListener("click", function () {
  console.log("clicked");
});

//making the li elements listner

let elements = document.querySelectorAll("li");
elements.forEach(function (element) {
  element.addEventListener("click", (e) => {
    console.log("clicked me");
    console.log(e); //event object
    console.log(e.target);
    e.target.style.textDecoration = "line-through";
  });
});

//add Element
const ul = document.querySelector("ul");
let button = document.querySelector(".clickMe");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "SOmething new";
  ul.append(li); //add at end
  //   ul.prepend(li); //add at starting
});

//removing element
let elements = document.querySelectorAll("li");
elements.forEach(function (element) {
  element.addEventListener("click", (e) => {
    e.target.remove();
  });
});

//More Events

//copy event
let copyRightElement = document.querySelector(".copy");
copyRightElement.addEventListener("copy", () => {
  console.log("You cannot copy me");
});

//Mouse Move element
let box = document.querySelector(".box");

box.addEventListener("mousemove", (e)=>{
  console.log(e);
})
