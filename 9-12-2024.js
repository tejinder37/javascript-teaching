let mySelf = {
  name: "Test",
  age: 22,
  address: "32 new street, Rajpura",
};

// Object.keys() => to get all the keys of object in an array.

// let objKeys = Object.keys(mySelf);
// console.log(objKeys);

// for (let keys of Object.keys(mySelf)) {
//   console.log(keys);
// }

// Object.values() => to get values from an object in an array.

// let objValues = Object.values(mySelf);
// console.log(objValues);

// for (let value of objValues) {
//   console.log(value);
// }

// Object.entries() => It gives us array of both keys & values in an array.Return value
//An array of the given object's own enumerable string-keyed property key-value pairs.
// Each key-value pair is an array with two elements: the first element is the property key (which is always a string),
// and the second element is the property value.

// let objKeysAndValues = Object.entries(mySelf);
// console.log(objKeysAndValues);

// for (let [key, value] of objKeysAndValues) {
//   console.log(`Key : ${key} & it's value is ${value}`);
// }

let friends = ["ram", "sham", "rohan", "mohan", "sohan"];
// for (let friend of friends) {
//   console.log(friend);

//   if (friend === "sham") {
//     break; // Break keyword is used to stop/break to loop at a certain point.
//   }
// }

// for (let friend of friends) {
//   if (friend === "sham") {
//     continue;
//   }
//   console.log(friend);
// }

// let cars = [
//   {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//   },
//   {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//   },
//   {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//   },
//   {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//   },
// ];

// for (let car of cars) {
//   if (car.color !== "black") {
//     continue;
//   }
//   console.log(car);
// }

// Functions are a great building block that
// will reduce the amount of code you will need in your app. You can call a function
// whenever you need it, and you can write it as a kind of template with variables. So,
// depending on how you've written it, you can reuse it in many situations.

// fn definition
// function sayHello(paramter) {
//   // fn body
//   console.log(paramter);
// }

// sayHello(argument); // fn call or fn invocation

// function hello() {
//   console.log("Hello ji");
// }

// hello();
function hello(name = "User") {
  console.log(`Hello,${name}!`);
}

hello(); // using default value.
hello("Dhruv");
