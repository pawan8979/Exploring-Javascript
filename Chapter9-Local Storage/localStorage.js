//Local Storage

//In Previous todo list task when we refresh the browser we lose our current state data

//store and retrive data from database

//store and retrieve data from local storage

//Is an api provided by browser to store data inside browser

// console.log(window.localStorage);

//set items
localStorage.setItem("passion", "programming");
localStorage.setItem("age", "24");
console.log(localStorage);

// Get item from local Storage
console.log(localStorage.getItem("passion"));

//Update
localStorage.setItem("age", 26); //Overwrite the previous value
console.log(localStorage);

//Remove Item
localStorage.removeItem("age");

//clear all
localStorage.clear();
