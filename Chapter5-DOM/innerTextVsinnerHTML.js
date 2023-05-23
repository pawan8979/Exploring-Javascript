//Updating and changing content

//innerText
//Ignore spaces
let content = document.querySelector(".content");
content.innerText = "<p>Great Coders</p>";
console.log(content.innerText);

//innerHTML
//It does not ignore spaces
content.innerHTML += "<p>Great Minds</p>";
console.log(content.innerHTML);
