//HTTP response status codes

//Informational response (100-199)
//Successful response (200-299)
//Redirectional messages (300-399)
//Client error responses (400-499)
//Server error responses (500-599)

let request = new XMLHttpRequest();
console.log(request);

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status == 200) {
    console.log(request.responseText);
  }
});

//set up request
request.open("Get", "https://jsonplaceholder.typicode.com/todos");

//sending the request
request.send();
