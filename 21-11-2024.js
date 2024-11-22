// let friends = ["Ram", "Sham", "Rohan"];

// console.log(`My friend name is ${friends[1]}.`);

// friends[1] = "Teetu";
// console.log(friends);

// console.log(friends[friends.length - 1]); // To get last element from an array!

// friends.push("Kalu");
// console.log(friends);

// friends.pop();
// friends.push("Prince");
// console.log(friends);

// // splice()=> This method is used to add elements at certain(any) postition.The splice() method takes multiple parameters. The
// // first parameter, 2 in our case, is the index of the array on which we want to start
// // inserting. The second parameter, 0 in our case, is the number of elements we want to
// // delete starting at our previously defined starting index
// //argument => The thing(value) we passed inside an method or fn is known as argument.

// console.log(friends);

// friends.splice(2, 2, "Aman", "Chetan");

// console.log(friends);

// friends.shift(); // This method is used to delete the first element from an array.

// console.log(friends);

// delete friends[2]; // Don't use.It doesn't delete element's reserved space.
// console.log(friends);

//find() => // If you want to check whether a value is present in an array, you can use the find()
// method. What will go in the find() method is somewhat different. It is actually a
// function. This function will be executed on every element in the array until it finds
// a match, and if it does not, then it will return undefined.
// let array = [2, 4, 6, 8, 10];

// let value = array.find((e) => {
//   console.log("I am e", e);

//   return e === 10;
// });

// console.log(value);

// let idxOfSix = array.indexOf(6);
// console.log(idxOfSix);

// let idxOfSixStatringFromSecondIdx = array.indexOf(6, 2);
// console.log(idxOfSixStatringFromSecondIdx);

// There is also a built-in method for sorting arrays. It sorts numbers from small to
// high and strings A-Z. You can call sort() on an array and the order of the values of
// the array will change to a sorted order:
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
console.log(names);
names.sort();
console.log(names);

let ages = [18, 72, 33, 56, 40];
console.log(ages);

ages.sort();
console.log(ages);
