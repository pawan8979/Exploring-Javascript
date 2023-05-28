//Making HTTP Request (Example)

let request = new XMLHttpRequest();
console.log(request);

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

//set up request
request.open("Get", "https://jsonplaceholder.typicode.com/todos");

//sending the request
request.send();

//Use this link for practice to get JSON data in response
// https://jsonplaceholder.typicode.com/

//value     state               Description
// 0        UNSENT              Client has been created. open() not called yet
// 1        OPENED              open() has been called.
// 2        HEADERS_RECEIVED    send() has been called, and headers
// 3        LOADING             Downloading; responseText holds partial data.
// 4        DONE                The operation is complete
