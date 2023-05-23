//Javascript DOM(Document Object Model)

//created by browser as the HTML load into the browser

//Browser create object of HTML called "document object"

//In Document object there is model of complete HTML in tree like structure

console.log(document);
console.log(document.url);

// Getting HTML elements using querySelector/All

//querySelector returns "first element" that match Css Selector

//To get all matched elements we use querySelectorAll

let resultedElement = document.querySelector("p");
console.log(resultedElement);

let resultedElement2 = document.querySelectorAll("p");
console.log(resultedElement2);

resultedElement2.forEach((element) => {
  console.log(element);
});

//Access element with class
let classElement = document.querySelector(".className");
console.log(classElement);

//Access Element with ID
let idElement = document.querySelector("#coders");
console.log(idElement);

// ----------Not preferred anymore-----
//Get Elements by tagName
let tagNameElements = document.getElementsByTagName("p");
console.log(tagNameElements);

//Get Elements by className
let classElements = document.getElementsByClassName("className");
console.log(classElements);

//Get Element by ID
let elementById = document.getElementById("className");
console.log(elementById);
