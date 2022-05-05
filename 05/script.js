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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    adress,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will bre dellivered to ${adress} at ${time}`
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {},

  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is ur delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  // },
};

// --- REST OPERATOR - COLLECTING MULTIPLE ELEMENTS TO ONE ARRAY ---
//  WE ARE USING REST OPERATOR ON RIGHT SIDE OF EQUAL SIGN
const [a, b, ...others] = [1, 2, 3, 4, 5];
//if we console log this we will see that first two elements of the array are stored in individual variables a=1 b=2 and the REST will take all the rest elements and stored them in new array 'others'

//USING SPREAD AND REST PATTERNS IN SAME TIME
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

//REST IN OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;

//PASS MULTIPLE ARGUMENTS INTO A FUNCTION ALL AT THE SAME TIME
//this is a working function wich can accept any parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += number[i];
};
add(2, 3);
add(5, 4, 3, 6, 6);
add(8, 2, 3, 6, 87, 9);

//PRACTICAL WORKING WITH SPREAD OPERATOR
//1) WE DEFINED ARRAY
//2) THEN WE CALL THE ADD FUNCTION IN WHICH WE UNPACKED X ARRAY WITH SPREAD OPERATOR WHICH THEN IS AGAIN COLLECTED WITH REST OPERATOR
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
restaurant.orderPizza("mushrooms");

/*
--- SPREAD OERATOR - ADDING NEW ELEMENTS TO ARRAY ---
// WE ARE USING SPREAD OPERATOR ON LEFT SIDE OF EQUAL SIGN
// const arr = [3, 4, 5];
// const newArr = [1, 2, ...arr];

//we are here creating new array(not manipulating with mainMenu array from restaurant object)
const newMenu = [...restaurant.mainMenu, "Gnocci"];

//COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

//JOIN 2 ARRAYS
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

//ITERABLES ARE ARRAYS, STRINGS, MAPS, SETS. BUT NOT OBJECTS
//WE CAN ONLY USE THE SPREAD OPERATOR WHEN BUILDING AN ARRAY OR WHEN WE PASS VALUES TO THE FUNCTION
const str = "Jonas";
const letters = [...str, " ", "S."];

const ingridients = [
  prompt("Let's make pasta! Ingridient1?"),
  prompt("Ingridient2?"),
  prompt("Ingridient3?"),
];

//TWO WAYS OF CALLING FUNCTION
//1.OLD ONE
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
//2.NEW ONE ES6 SYNTAX
restaurant.orderPasta(...ingridients);

//SINCE 2018 SPREAD OPERATOR WORKS ALSO ON OBJECTS EVEN THOU OBJECTS ARE NOT ITERABLES
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guseppe" };
//THE SPREAD OPERATOR COPIED ALL THE PROPERTIES FROM TI "restaurant" OBJECT AND THEN WE ASSIGNED SOME NEW PROPERTIES TO OUR "newRestaurant" OBJECT
//(ORDER DOESN'T MATTER)!!!

//METHOD OF CHANGING PROPERTIES INSIDE OBJECTS
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Restaurante Roma";

//////////////////////////////////////////
//DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//   time: "22:30",
//   adress: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   adress: "Via Del Sole, 21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// const { menu = [], starterMenu: starters = [] } = restaurant;

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;
// // console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// //Swtiching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// //recieve 2 return values from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// //nested destructuring
// // const nested = [2, 4, [5, 6]];
// // // const [i, ,j] = nested;
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);

// //default values
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r);
*/
