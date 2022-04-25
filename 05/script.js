// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {};
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {},
// };
// jonas.calcAge();

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before merriage:", jessica);
console.log("After merriage:", marriedJessica);

// marriedJessica = {};

// Copying objects

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before merriage:", jessica2);
console.log("After merriage:", jessicaCopy);
