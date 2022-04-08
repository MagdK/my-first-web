/* const numbers = [4, 9, 16, 25];

console.log(
    numbers.map(Math.sqrt)
)

const identity = (element) => element
console.log(
    numbers.map(identity)
) */

/* 

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr) */

// Divide
/* const myNumbers = [12, 67, 89, 34]
const newArr = myNumbers.map(divide)

function divide(szam) {
    return szam / 2
}

console.log(newArr) */


// Get full name

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

  const fullName = persons.map(fullNameFunction)

  function fullNameFunction(person) {
      return[person.firstname, person.lastname].join(" ")
  }

  console.log(fullName);