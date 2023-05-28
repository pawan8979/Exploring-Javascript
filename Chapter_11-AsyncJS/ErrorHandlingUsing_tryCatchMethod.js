//Error handling using try catch method
//doesn't have a specific .catch method to catch errors. Instead, you can use a try/catch block

let getTodos = async () => {
  try {
    let response = await fetch("data.json");
    let data = await response.json();

    let response2 = await fetch("mario.json");
    let data2 = await response2.json();

    //Returning the data from async await function
    console.log(data, data2);
  } catch (error) {
    console.log(error.message);
  }
};

//We dont need to chain anything as previously
getTodos();

// try {
//   let x = 4;
//   const y = 6;
//   y = x;
// } catch (error) {
//   console.log(error.message);
// }
