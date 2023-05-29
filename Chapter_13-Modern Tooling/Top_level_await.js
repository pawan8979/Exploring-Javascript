//Top level await ES2022

//Before ES2022 we can use await only inside async function
//But in ES2022 introduced top level await
//It means now we can use await outside the async function

let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

let data = await response.json();
console.log(data);

console.log("Finish....");

//Top level await block the execution
