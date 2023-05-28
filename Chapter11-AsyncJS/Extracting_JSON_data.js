//CallBack Function -> Part of status code so that we can show erroe as well that which error/exception occured

let todos = (callback) => {
  let request = new XMLHttpRequest();
  console.log(request);

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) {
      //   console.log(request.responseText);
      let data = JSON.parse(request.responseText);
      console.log(undefined, data);
    } else if (request.readyState === 4) {
      //   console.log("Data not fetched");
      callback("Data not fetched", undefined);
    }
  });

  //set up request
  request.open("Get", "https://jsonplaceholder.typicode.com/todos");

  //sending the request
  request.send();
};

todos((error, data) => {
  if (error) console.log(error);
  else console.log(data);
});
