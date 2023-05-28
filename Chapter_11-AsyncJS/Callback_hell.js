//Callback hell(chain of callback function inside one another)

let todos = (resource, callback) => {
  let request = new XMLHttpRequest();
  //   console.log(request);

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) {
      //   console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //   console.log("Data not fetched");
      callback("Data not fetched", undefined);
    }
  });

  //set up request
  request.open("Get", resource);

  //sending the request
  request.send();
};

todos("data.json", (error, data) => {
  if (error) console.log(error);
  else console.log(data);
  todos("mario.json", (error, data) => {
    if (error) console.log(error);
    else console.log(data);
    todos("lurie.json", (error, data) => {
      if (error) console.log(error);
      else console.log(data);
    });
  });
});

//we have to give callback inside to make sure that previous callback is executed because if we keep it outside then we cant know if previous code executed or not
