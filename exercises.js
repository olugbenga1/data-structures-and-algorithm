// STRING

/* Write a function that takes in two parameters 
firstName and lastName, and outputs the person's 
full name in uppercase */

function fullName(firstName, lastName) {
  const name = `${firstName} ${lastName}`;
  return name.toUpperCase();
}

console.log(fullName("doe", "john"));

// Refactor to object parameter

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

console.log(fullName({ lastName: "Simon", firstName: "Toby" }));

// ARRAY

// This uses arrays and for loops

/* iterate through an array of first names of siblings in a family, 
and add their last name "Baker" to each siblings name in a new array */

const names = ["susy", "john", "bob"];
const lastName = "Baker";
let eachName = [];

for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
  const newFullName = `${names[i]} ${lastName}`;
  eachName.push(newFullName);
}

console.log(eachName);

/* Write a function to add all numbers in an array */

const gas = [20, 40, 100, 60];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log("whoa, you are spending too much");
    return total;
  }
  console.log("You are good, total is less than 100");
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
