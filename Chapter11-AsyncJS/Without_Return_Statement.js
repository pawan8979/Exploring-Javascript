// async and await (without return statement)
let getTodos = async () => {
  let response = await fetch("data.json");

  //custom errors
  if (response.status !== 200) {
    throw new Error("Custom: Error in fetching the data");
  }

  let data = await response.json();
  let response2 = await fetch("mario.json");
  let data2 = await response2.json();

  //Returning the data from async await function
  console.log(data, data2);
};

//We dont need to chain anything as previously
getTodos();
