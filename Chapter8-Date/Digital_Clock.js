let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let ticking = function () {
  let currentDate = new Date();
  let getHour = currentDate.getHours();
  let getMin = currentDate.getMinutes();
  let getSec = currentDate.getSeconds();
  hourHand.textContent = getHour;
  minHand.textContent = getMin;
  secHand.textContent = getSec;
};

setInterval(ticking, 1000); //1000 = 1sec
