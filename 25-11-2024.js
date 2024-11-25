let test = {
  name: "Test",
  age: 33,
  color: "Red",
  friends: ["Ram", "Sham", "Rohan"], // array in object
  address: {
    // object in object
    street: "101 new street",
    houseNo: 303,
  },
};

console.log(test["name"]); // using array notation
console.log(test.age); // using dot notation

test["name"] = "Bunty"; // Modifying/assigning new value to the object.
test["height"] = "6.2"; // adding new property to an object.

console.log(test.address.houseNo);
console.log(test["address"]["street"]);
console.log(test["address"].houseNo);
console.log(test["address"]);

console.log(test["friends"][0]);

let addresses = [
  {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];

console.log(addresses[0].state);
console.log(addresses[0]);
