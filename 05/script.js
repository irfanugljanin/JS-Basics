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

//////////////////////////////
//----STRINGS-----
const airLine = "TAP Air Portugal";
const plane1 = "A320";

//IF WE WANT TO SEE LETTERS BASED ON INDEX
console.log(plane1[0]);
console.log(plane1[1]);
console.log(plane1[2]);

//IF WE WANT TO SEE LETTER BASED ON INDEX BUT DIRECTLY
console.log("B737"[0]);

//IF WE WANT TO SEE LENGTH
console.log(airLine.length);
console.log("B737".length);

//
console.log(airLine.indexOf("r"));
console.log(airLine.lastIndexOf("r"));
console.log(airLine.indexOf("portugal"));

//SLICE METHOD ALWAYS RETURN NEW STRING
console.log(airLine.slice(4));
//LENGTH OF THE EXTRACTED STRING IS ALWAYSS GONNA BE END - BEGINING
console.log(airLine.slice(4, 7));

console.log(airLine.slice(0, airLine.indexOf(" ")));
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

//START EXTRACTING FROM THE END
console.log(airLine.slice(-2));
console.log(airLine.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

//FIX CAPITALIZATION IN NAME
const passenger = "jOnaAS"; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

//Comparing emis
const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";

//INSTEAD OF THIS
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

//WE CAN USE THIS
const normalizedEmail = loginEmail.toLowerCase().trim();

//REPLACING PART OF STRINGS
const priceGB = "288,97$";
const priceEU = priceGB.replace("$", "e").replace(",", ".");
const annoucement = "All passengers come to boarding door 23. Boarding door23!";
console.log(annoucement.replace("door", "gate"));
console.log(annoucement.replaceAll("door", "gate"));
//REGULAR EXPRESSIONS
console.log(annoucement.replace(/door/g, "gate"));

//BOOLEANS
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("Air"));

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
  console.log("Part of NEW Airbus family");
}

//PRACTICE EXERCISE
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//SPLIT AND JOIN
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
["Mr.", firstName, lastName.toUpperCase()].join(" ");

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessice ann smith davis");
capitalizeName("jonas schmedtmann");

//PADDING
//padStart WILL ADD SOMETHING AT START OF YOUR STRING
//FIRST U NEED TO WRITE HOW MANY CHARACTERS WILL AT TOTAL WILL YOUR STRING HAVE AND THEN WHAT YOU WANT TO ADD
const message = "Go to gate 23";
console.log(message.padStart(25, "+"));

//BESIDES padStart WE HAVE padEnd PROPERTIE WHICH WILL ADD SOMETHING AT THE END OF YOUR STRING
console.log(message.padStart(25, "+").padEnd(35, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(433784555324745));

//REPEAT
//REPEAT STRING MULTIPLE TIMES
const message2 = "Bad Weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"plane".repeat(n)}`);
};

planesInLine(5);
/*
//////////////////////////////
//------MAPS-------
const question = new Map([
  ["qustion", "Favorite color?"],
  [1, "blue"],
  [2, "red"],
  [3, "green"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(question);

//CONVERTING OBJECT TO MAP
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//QUIZ
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

//CONVERT MAP TO ARRAY
console.log([...question]);
console.log(question.keys());
console.log(question.values());

///////////////////
//CHALLENGE
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"][(47, "GOAL")],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [67, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow Card"],
]);

//1.
const events = [...new Set(gameEvents.values())];

//2.
gameEvents.delete(64);

//3.
const time = [...gameEvents.keys().pop()];
console.log(`An event happend, on average, every ${90 / gameEvents.size} size`);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//ARRAYS VS SETS & OBJECTS VS MAPS
//YOU SOULD USE ARRAYS WHENEVER YOU WANT TO STORE VALUES IN ORDER AND WHEN THESE VALUES CONTAIN DUPLICATES
//USE ARRAYS WHEN YOU NEED MANIPULATE DATA
//USE SETS WHEN YOU NEED UNIQUE VALUES

//MAP KEY DCAN HAVE ANY DATA TYPE AND THERE EASY TO ITERATE
//USE MAPS WHEN YOU NEED KEYS THAT ARE NOT STRINGS
//USE OBJECT WHEN YOU NEED FUNCTION AS VALUE
*/

/*
///////////////////
//MAPS
//MAP IS DATASTRUCTURE THAT WE CAN USE TO MAP VALUES TO KEYS
//DIFFERENCE BETWEEEN OBJECTS AND MAPS - IN MAPS KEYS CAN HAVE ANY TYPE

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firence,Italy");
rest.set(2, "Lisbon,Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

const time = 21;
rest.get(time > rest.get("open") && time < rest.get("close"));

rest.delete(2);
console.log(rest);
// rest.clear - REMOVING ELEMENTS
// rest.size - TO SEE HOW MANY ELEMENTS

rest.set([1, 2], "Test");
*/

/*
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
*/

/*
////////////
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
