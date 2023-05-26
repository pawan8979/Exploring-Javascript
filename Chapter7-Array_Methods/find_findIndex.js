//find method
// It return the "first" element we are looking for..

let students = [
  { id: 1, name: "alex" },
  { id: 2, name: "john" },
];
let result = students.find((student) => {
  return student.id === 1;
});

console.log(result); //if not matched then undefined

//findIndex method
//Execute function for each array element
//It return index of that array element who first pass the test otherwise -1

let ages = [10, 18, 19, 17, 23];
let ans = ages.findIndex((age) => {
  return age > 15;
});
console.log(ans);

let student = [
  { id: 1, name: "alex" },
  { id: 2, name: "john" },
];

let stu = student.findIndex((st) => {
  return st.name === "alex";
});
console.log(stu);
