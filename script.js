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

const day = "monday";

switch (day) {
  case "monday": //if (day === 'monday')
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tueseday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

//if-else
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tueseday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not valid day!");
}
