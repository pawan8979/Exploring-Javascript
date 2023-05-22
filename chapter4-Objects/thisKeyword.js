//"this" keyword represent the object "Calling" the "method" in which "this" is "present"

let person = {
  firstName: "Pawan",
  lastName: "Negi",
  city: "Delhi",
  Job: "SDE",
  birthYear: 1998,
  getSummary: function () {
    return `${this.firstName} ${this.lastName} lives in ${this.city}. His birthyear is ${this.birthYear} `;
  },
};

console.log(person.getSummary());
