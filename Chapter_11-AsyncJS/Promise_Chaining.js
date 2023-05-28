// A way to avoid callbacks

let todos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    //   console.log(request);

    request.addEventListener("readystatechange", () => {
      //   console.log(request, request.readyState);
      if (request.readyState === 4 && request.status == 200) {
        //   console.log(request.responseText);
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        //   console.log("Data not fetched");
        reject("Error in Fetching");
      }
    });

    //set up request
    request.open("Get", resource);

    //sending the request
    request.send();
  });
};

//Promises chaining

todos("data.json")
  .then((data) => {
    console.log("Promise 1 resolved", data);
    return todos("lurie.json");
  })
  .then((data) => {
    console.log("Promise 2 resolved", data);
    return todos("mario.json");
  })
  .then((data) => {
    console.log("Promise 3 resolved", data);
  })
  .catch((error) => {
    //only one catch method is enough to catch any
    console.log(error);
  });
