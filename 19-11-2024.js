// Array => Arrays are lists of values. These values can be of all data types and one array can
// even contain different data types. It is often very useful to store multiple values
// inside one variable; for example, a list of students, groceries, or test scores.

// let array1 = new Array("Chetan", "Prince", "Ram");
// let array2 = ["Rohan", "Mohan", "Sohan"];

// console.log(array1);
// console.log(array2);

// let array3 = new Array(10); //Wrong way
// let array4 = [10]; // Right way

// console.log(array3);
// console.log(array4);

// let arr = ["hi there", 5, true]; // In array counting elements starts from 0.
// console.log(typeof arr[0]); // reading value & getting type of value.
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// arr[1] = 55;  // Changing & modifying array values.
// console.log(arr);

let myFriends = [
  "Rohan",
  "Mohan",
  "Sohan",
  "Ram",
  "Sham",
  "Rohan",
  "Mohan",
  "Sohan",
];

// console.log(myFriends[4]);

// console.log(myFriends[-1]);

console.log(myFriends[-1]); // undefined

// Built in properties of array
// The length of the array is only counting the integer numbers starting from 0 up to
// the highest filled index. If there are elements in the middle of the sequence that do
// not have a value, they will still get counted

console.log(myFriends.length); // used to get length of an array.

console.log(myFriends[myFriends.length - 1]); // Used to get last element from an array.

let numbers = [12, 33, 44, 39];
numbers[7] = 108;

console.log(numbers.length);
console.log(numbers);

// Methods in array

// We have just seen the built-in length property. We also have a few built-in methods.
// Methods are functions on a certain object. Instead of holding a value, like properties,
// they perform actions

numbers.push(20); //The value gets added to the end of the array using push method.
console.log(numbers);

let arr1 = [1, 3, , 4, 5, 5];
let arr2 = [4, 56, 77, 32, 3];

// let array3 = arr1 + arr2; // wrong way to concat array instead we use concat
let array3 = arr1.concat(arr2);
console.log(array3);
console.log(typeof array3);

array3.pop(); // used to remove last element of array.
console.log(array3);
