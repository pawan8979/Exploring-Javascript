// Date object always carry both Date and Time

//Using Date method
let currentDate = new Date(2021, 12, 24); //0 to 11(month)
console.log(currentDate);

//Using timeStamp(integer number represent in "ms" from 1-1-1970)
let currentDate = new Date(86400000); //0 is time in ms (1 Jan 1970)
//1day = 24 * 60 * 60 = 86400000ms
console.log(currentDate);

//To get time in "ms"
let currentDate = new Date().getTime();
console.log(currentDate);
//1679046933275 = total time in ms
//new Date(Year, Month, Day, Hour, Minute, Second)
