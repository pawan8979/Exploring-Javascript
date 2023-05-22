//We can manually set the value of "this" keyword using "call and apply"
"use strict";
let mainPlane = {
  airline: "Fly India",
  iatacode: "FI",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked flight on ${this.airline} with flightID ${this.iatacode}${flightNum}`
    );

    this.bookings.push({
      flightName: `${this.airline}`,
      name: name,
      flightNum: `${this.iatacode}${flightNum}`,
    });
  },
};
mainPlane.book(555, "Jason");
mainPlane.book(111, "Zack");

console.log(mainPlane);

//New airline launched of same group

let childPlane = {
  airline: "child Plane",
  iatacode: "CP",
  bookings: [],
};

let book = mainPlane.book;
// book(665, "lury"); this value is undefined

//solution using "call" method
book.call(childPlane, 689, "Jam");
book.call(mainPlane, 219, "Lury");
console.log(childPlane);
console.log(mainPlane);

//apply method -> same like call only but values are rather passed inside array
book.apply(childPlane, [785, "Harish"]);
console.log(childPlane);

//bind method

function greet() {
  console.log(`Welcome ${this.firstName} ${this.lastName} on this event`);
}

let user = {
  firstName: "John",
  lastName: "Paul",
};
let greeting = greet.bind(user);
greeting();
