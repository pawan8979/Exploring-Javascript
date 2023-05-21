//Note: Does not mutate original array
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(lastName.indexOf("g")); //returns first index

//common string Methods

let hobbies = "          coding exercising         ";
//trim method
let result = hobbies.trim();
console.log(hobbies);
console.log(result);
//indexOf
console.log(result.lastIndexOf("i")); //14
console.log(result.lastIndexOf("p")); // -1
//includes method
console.log(result.includes("reading")); //exist or not //case sensitive
//slice method
let fullName = "PawanNegi";
console.log(fullName.slice(0, 5)); //excluding 5
console.log(fullName); //PawanNegi
//split method
let colors = "Brown Red Green Violet";
let arr = colors.split(" ");
console.log(arr);
//Javascript strings are immutable
let str = "Pawan";
str[0] = "N";
str[1] = "o";
console.log(str); //There will be no change
str = str + "Negi";
console.log(str);