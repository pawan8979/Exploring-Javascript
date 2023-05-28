// async and await (Throwing Custom Errors)

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
