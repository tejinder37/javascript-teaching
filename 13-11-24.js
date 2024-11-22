//Escape character are used to tell js to interpret character as special not as usual.

// string rule => I we have "" then inside the string we can use '' & if we have '' then we can use "" inside the string!
let info = 'Hello, what\'s your name? It is "Mike"';
let info1 = 'Hello, what is your name? \nIt is "Mike"'; // \n for new line
console.log(info);
console.log(info1);

let myName = "Bunty";
let mySecondName = "Bunty";

if (myName === mySecondName) {
  console.log("Both names are same!");
}

//Symbol => It is a special type i.e. used when we don't want the values to equal even if their values
// & types are same.

let name1 = Symbol("Harkirat");
let name2 = Symbol("Harkirat");

if (name1 === name2) {
  console.log("Same Names!");
} else {
  console.log("Names are not same");
}

// coversion /Type casting => It a process in which we change the type of the variable.It
// can be implicit & explicit. we have mainly 3 built in fns/methods for typecasting.

// 1. Number()
// 2. String()
// 3. Boolean()

let num1 = 2;
let num2 = "2";
console.log(num1 + Number(num2));

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

// Whenever we try to convert the value of null & " "(empty string) to number it will fallback to 0.

let nullToNum = null;

nullToNum = Number(nullToNum);
console.log(nullToNum);

let strToNum = "";
strToNr = Number(strToNum);
console.log("empty string", strToNr, typeof strToNum);

// When converting string to boolean

// Any string will return true when converted to a Boolean,
// even the string "false"! Only an empty string, null, and undefined will lead to a
// Boolean value of false.

let str = "false!";

str = Boolean(str);
console.log(str);

// Operators => These are special symbols that
// used to compare values, modify values & performs calculations. We call them operators
// because we use that on variable.

// 1. Arithmatic Operators => These are used to perform calculation with numbers

let sayHello = "Hello";
let me = " Tejinder Singh";

console.log(sayHello + me); // + operator is performing concatination on two string variables.

//2. Unary operators => These are used only on one operand. (++ , --).
// we have two types of unary operators i.e. Postfix ((x++)) & prefix (++x)

let number = 5;

number++;

console.log(number);

//Assignment operators => It is used to assign a value to variable.

// let x = 10;
// // x = x + 20;
// x += 15;

// console.log(x);

//Comparison operators => It's value will always be boolean.

let x = 5;
let y = "5";
console.log(x == y); // We will use that when we don't need to check the type of data.
console.log(x === y); // We will use that when we  need to check the type of data.

let miles = 25;

let milesToKm = 25 * 1.6;

console.log(`The distance of ${milesToKm} km is equal to ${miles} miles`);
