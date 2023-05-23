//Bubbling: When an event occurs on an element, such as a click event, the event is first triggered on the innermost element and then propagated or "bubbled" up through its parent elements.

//add Element
const ul = document.querySelector("ul");
ul.addEventListener("click", () => {
  console.log("Inside UL");
});
let button = document.querySelector(".clickMe");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "SOmething new";
  ul.append(li); //add at end
  //   ul.prepend(li); //add at starting
});

// removing element
let elements = document.querySelectorAll("li");

elements.forEach(function (element) {
  element.addEventListener("click", (e) => {
    console.log("Inside LI");
    e.target.remove();
  });
});

//delegation
let button = document.querySelector(".clickMe");

button.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "SOmething new";
  ul.append(li); //add at end
  //   ul.prepend(li); //add at starting
});

const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  //   console.log("Inside UL");
  if (e.target.nodeName == "LI") {
    e.target.remove();
  }
});
