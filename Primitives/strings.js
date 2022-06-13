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
