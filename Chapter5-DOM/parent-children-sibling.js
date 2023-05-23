//Get Child Element from Parent Element
let parentElement = document.querySelector(".parentClass");
console.log(parentElement.children);

//We cannot run forEach method on HTMLCollection so first convert it into array

console.log(Array.from(parentElement.children));

Array.from(parentElement.children).forEach(function (element) {
  element.classList.add("newClass");
});

//Get Parent Element from Child Element
let childElement= document.querySelector("h2");

//find the parent of specific child
console.log(childElement.parentElement);

//find the next sibling of child
console.log(childElement.nextElementSibling);

//find the previous element sibling
console.log(childElement.previousElementSibling);

