// Built in methods => These are already defined in js for our convinence.

// Globalmethods =>  global methods are those methods that are availalble without referring
// to its built in object that they are part of.

// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }

//   info() {
//     return `The car name is ${this.name} & it's model is ${this.model}`;
//   }
// }

// const nano = new Car("Tata Nano", 2000);
// console.log(nano.info()); // local method

// let x = "qqppddd";
// console.log(isNaN(x)); // Global method

let x = "7.0009";
console.log(typeof x);
let xNum = parseInt(x); // for integer conversion
let yNum = parseFloat(x); // floating pt.number
console.log(typeof xNum);
console.log(typeof yNum);

console.log(xNum);
console.log(yNum);

// array methods

// filter()=> this method is used to filter out some data

// When w
let friends = ["ram", "sham", "titu", "rohan", "sohan"];
friends
  .filter((friend) => {
    return friend === "sham";
  })
  .forEach((friend) => console.log(friend));
