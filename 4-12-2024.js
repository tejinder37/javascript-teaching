// While loop => The first loop we will discuss is the while loop. A while loop executes a certain block
// of code as long as an expression evaluates to true. The snippet below demonstrates
// the syntax of the while loop:

// while (condition) {
// code that gets executed as long as the condition is true
// }

let test = 20;

while (test <= 30) {
  console.log(test);
  test++;
}

let friends = ["Ram", "Sham", "Rohan", "Mohan"];
let notFound = true;

while (notFound && friends.length > 0) {
  if (friends[0] === "Rohan") {
    console.log(`Hello, ${friends[0]}`);
    notFound = false;
    console.log(friends);
  } else {
    console.log("Not found removing first element");
    friends.shift();
    console.log(friends);
  }
}

// Do while loop =>

// In some cases, you really need the code block to be executed at least once. For
// example, if you need valid user input, you need to ask at least once. The same goes
// for trying to connect with a database or some other external source: you will have to
// do so at least once in order for it to be successful. And you will probably need to do
// so as long as you did not get the result you needed. In these cases, you can use a do
// while loop.
// Here is what the syntax looks like:
// do {
// code to be executed if the condition is true
// } while (condition);
// It executes what is within the do block, and then after that it evaluates the while. If
// the condition is true, it will execute what is in the do block again. It will continue to
// do so until the condition in the while changes to false.

// for loop =>for loops are special loops.

let numbers = Array.from({ length: 10 }, (_, idx) => idx + 1);

// Initializer expression = let i = 0;
// Conditional expression =  i < numbers.length;
// i++ = Iterator expression
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`I am ${numbers[i]}`);
// }

// If num * num = 25  then log hello ji 25.

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] * numbers[i] === 25) {
    console.log(`Hello ji ${numbers[i]} * ${numbers[i]} = 25`);
  } else {
    console.log("Not 25");
  }
}
