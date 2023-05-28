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

todos("data.json")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//Promise General example
// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Some data"); //completed
//     reject("some error"); //Error occurred
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
