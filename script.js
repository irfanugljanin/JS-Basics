"use strict";

/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log ("Jonas");
console.log (23);

let firstName = "Jonas";
console.log(firstName);
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Schmedtmann";
// console.log(lasName);

/*
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2**3 means 2 to the powe of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + "" + lastName);

// Assigment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25-10-5);

let x,
  y: x = (y = 25 - 10 - 5); //x=y=10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string..`);

console.log("String with \n\
multiple \n\
lines\n\
");

console.log(`String
multiple
lines
`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// Chalenge 2
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("Marks BMI is higher than John's");
} else {
  console.log("Johns BMI is higher than Marks");
}
*/

/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
*/

//truthy and falsy values
//falsy values: 0, 1, '', undefined,null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Joans"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
//equality operators
const age = 18;
if (age === 18) console.log("You just became an an adult");

if (age == 18) console.log("You just became an an adult");

const favourite = Number(prompt("Whtats your favourite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("23 is amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number ");
} else {
  console.log("number is not 23 or 7");
}

if (favourite !== 23) console.log("why not 23");
*/

/*
//logical operations
const hasDriversLicence = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (hasDriversLicence && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Somone else should drive..");
}


const isTired = true; //C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Somone else should drive..");
}
*/

//coding challenge #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(`Dolphins:${scoreDolphins}`);
// console.log(`Koalas:${scoreKoalas}`);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins are the winners");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas are the winners!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Nobody wins trophy");
// }

// pt2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins are the winners");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas are the winners!");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Nobody wins trophy");
// }

//pt3
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins are the winners");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas are the winners!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both wins!");
// }

//switch statement
// const day = "monday";

// switch (day) {
//   case "monday": //if (day === 'monday')
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tueseday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// //if-else
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tueseday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not valid day!");
// }

//conditional operator

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// //challege
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value is ${
//     bill + tip
//   }`
// );

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

//functions

// function logger() {
//   console.log("my name is jonas");
// }

// //calling/runing/invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} aplpes and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //function expression
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//arrow functions
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));

//functions calling another funtions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "JOnas"));

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));

//challenge
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

//array
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Shchmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const year = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

//array operations
// const friends = ["Michael", "Steven", "Peter"];

// //add elements
// const newLenght = friends.push("Jay");
// console.log(friends);
// console.log(newLenght);

// friends.unshift("John");
// console.log(friends);

// //remove elements
// friends.pop(); //last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //first element
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); //not in there

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends(23));

// if (friends.includes("Steven")) {
//   console.log("You have aa friend called Steven");
// }

//challenge
// function calcTip(bill) {
//   const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

//objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschedtmann";
console.log(jonas);

//challenge
//'Jonas has 3 friends, and his best friend is called Michael'

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
