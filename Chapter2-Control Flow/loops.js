// for loop

let arr = [1, 23, 2, 4, 6, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

//while loop

let i = 0;
while (i < arr.length) {
  console.log(i, arr[i]);
  i++;
}

//Do While loop

let j = 1;
do {
  console.log("At least run time= ", j);
  j++;
} while (j <= 1); //condition false already but execute once
