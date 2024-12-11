// let sayMyName = function (name = "User", age) {
// anonymous(no name)fn
//   console.log(`I am ${name} & age is ${age}`);
//   console.log(`I am ${name} & age is ${age}`);
// };
// sayMyName();
// sayMyName("Dhruv", 13); // The order of arguments must be match with the order of parameters.

// let sayMyName = function (name = "User", age) {
//   // anonymous(no name)fn
//   console.log(`I am ${name} & age is ${age}`); // no return
//   return `I am ${name} & age is ${age}`;
// };

function addNumbers(x, y) {
  return x + y;
}

let sum = addNumbers(10, 10);
console.log(sum);

// arrow fns => Arrow functions are a special way of writing functions. This is because they are a shorthand notation for writing functions. They are most often used for functions that
// consist of only one statement.

// => fat arrow

// Whenever we have single line arrow fn we don't need to use return statement
// let multiplyTwoNumbers = (x, y) => x * y;
// let divideTwoNumbers = (x, y) => console.log(x / y);
// console.log(multiplyTwoNumbers(3, 5));
// divideTwoNumbers(2, 2);
// let divisionValue = divideTwoNumbers(3, 6); // divison value is undefined because the fn divideTwoNumbers is not returning the value.
// console.log(divisionValue);
// let testing = () => {
//   return "Testing return of the arrow fn";
// };
// console.log(testing());

// Spread operator = The spread operator is a special operator. It consists of three dots used before a
// referenced expression or string, and it spreads out the arguments or elements of an
// array.

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
// console.log(message);

let message = ["I am", "Bunty"];
let mySelf = [message];
console.log(mySelf); // nested array bcoz not using spread operator
console.log(...mySelf); // values are copied using spread operator

let sumOfTwo = (x, y) => {
  console.log(x + y);
};

let nums = [5, 12];
sumOfTwo(nums[0], nums[1]); // without sperad
sumOfTwo(...nums); // using spread

let sumOfAnyNumbers = (...params) => {
  // fn's rest parameter
  let result = 0;
  for (let num of params) {
    result += num;
  }
  return result;
};
let numbers = Array.from({ length: 20 }, (_, idx) => idx + 1);
let result = sumOfAnyNumbers(...numbers); // spread operator
console.log(result);
