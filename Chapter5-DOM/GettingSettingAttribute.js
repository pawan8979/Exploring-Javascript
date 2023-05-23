let youtubeLink = document.querySelector("a");
//getting/reading the data inside href
console.log(youtubeLink.getAttribute("href"));
//set the attribute
youtubeLink.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=lGmRnu--iU8&t=228s"
);
youtubeLink.innerText = "Master class of JS";
