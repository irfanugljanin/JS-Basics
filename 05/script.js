"use strict";

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
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// //Reference types
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before merriage:", jessica);
// console.log("After merriage:", marriedJessica);

// // marriedJessica = {};

// // Copying objects

// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";
// console.log("Before merriage:", jessica2);
// console.log("After merriage:", jessicaCopy);

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Swtiching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieve 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
