// Objects => Object is collection of key value pairs or It uses named properties.It is created by {}.

let dhruv = {
  name: "Dhruv",
  age: 22,
  village: "Lalru",
};

console.log(typeof dhruv);

// We have two ways to access value of an object.
// 1. using array notation (way) ["nameofproperty"]
// 2. using dot notation

// Array notation
console.log(`My name is ${dhruv["name"]}`);

// Dot notation
console.log(`My name is ${dhruv.name}`);

dhruv["age"] = 35; // updating an object.
dhruv.village = "Tepla";

console.log(dhruv);

dhruv["age"] = "Hello";
console.log(dhruv);

let age = "age"; // Refering key using variable in array notation.

console.log(dhruv[age]);
