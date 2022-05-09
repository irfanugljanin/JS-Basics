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

//ES6 ENHANCED OBJECT LITERALS
//WE CAN PUT ANY VARIABLE INSIDE ANY OBJECT WE JUST NEED TO WRITE EXACT VARIABLE NAME INTO OBJECT AND
//IT WILL IMMEDIATLEY PUT IT AS PROPERTY
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    //instead of writing 'thu' we can do this
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //object literals(putting variable into object as property)
  openingHours,

  //es6 feature - you can remove 'function' keyword and semicolon(:)
  order(starterIndex, mainIndex) {
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

/////////////////////////
//SETS
//WE ARE USING SETS FOR EXAMPLE TO DELETE DUPLICATES FROM ARRAYS

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Usecase
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnigue = [...new Set(staff)];

/*
//PROPERTIE NAMES
const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day},`;
}

//PROPERTIE VALUE
const values = Object.values(openingHours);

//LOOPING THROUGH ENTIRE OBJECT
const entries = Object.entries(openingHours);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close ${close}`);
}


*/
/*
//////////////////////////////
//---OPTIONAL CHAINING ---

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//USING THE QUESTION MARK
restaurant.openingHours.mon?.open;
//IF PROPERTY BEFORE QUESTION MARK EXIST THEN THE 'open' PROPERTY WILL BE READ (ELSE UNDEFINED)

//EXAMPLE
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
}

//OPTIONAL CHAINING ALSO WORKS WITH METHODS
restaurant.order?.(0, 1) ?? "Method does not exist";
restaurant.orderRisotto?.(0, 1) ?? "Method does not exist";


//OPTIONAL CHANING WITH ARRAYS
const users = [{ name: "Jonas", email: "jonas@gmail.com" }];
users[0]?.name ?? "Users array empty";
*/

/////////////////////////////////////////////
/*
//----FOR OF LOOP ----
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

//INSTEAD OF THIS
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}. ${item[1]}`);
}


//USE THIS
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}. ${el}`);
}
*/

//---OR ASSIGNMENT LOGICAL OPERATOR
//WORKS IF VALUES IN OBJECT ARE NOT FALSY VALUES

/*
const rest1 = {
  name: "Caprri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni",
};

//INSTEAD OF THIS
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

//USE THIS
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
*/

//IF WE HAVE FALSY VALUE IN OBJECT WE USE THEN
//---- NULLISH ASSIGNMENT LOGICAL OPERATOR
/*
const rest1 = {
  name: "Caprri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni",
};

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
*/

/*
//----AND ASSIGNMENT OPERATOR -----
// USING IF WE WANNA REPLACE STRINGS

const rest1 = {
  name: "Caprri",
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni",
};

//INSTEAD OF THIS
rest1.owner = rest1.owner && "Anonymous";
rest2.owner = rest2.owner && "Anonymous";

//USE THIS
rest1.owner &&= "Anonymous";
rest2.owner &&= "Anonymous";
*/

/*
//---- OR OPERATOR ----
//OR OPERATOR ALWAYS RETURNS FIRST TRUTHY VALUE
//IN CASE WERE EVERY VALUE IS FALSIE OR OPERATOR USE LAST VALUE

//PRACTICAL EXAMPLE
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

//---- AND OPERATOR ----
//WORKS OPOSITE OF OR OPERATOR

//PRACTICAL EXPAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

//----NULLISH OPERATOR-----
//


restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;

const guestCorrect = restaurant.numGuests ?? 10;

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
