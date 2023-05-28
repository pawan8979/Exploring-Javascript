// async and await

let getTodos = async () => {
  let response = await fetch("data.json");

  //custom errors
  if (response.status !== 200) {
    throw new Error("Custom: Error in fetching the data");
  }

  let data = await response.json();
  return data;
};

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// fetch("data.json")
//   .then((response) => {
//     console.log("Promise resolved", response);
//     return response.json(); //returning promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
