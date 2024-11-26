// #Logical statements allow us to make multiple paths in our code.
// Depending on the outcome of a certain expression, we will follow one code path or
// another.

let rain = false;

if (rain) {
  // if takes expression that will evaluate.
  console.log("It's raining outside.");
} else {
  console.log("Its' sunny day & not raining.");
}

// If else

// let age = 17;
// if (age === 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("Not eligible.");
// }

// let age = 19;

// if (age >= 18) {
//   console.log("Eligible for vote.");
// } else if (age === 17) {
//   console.log("You have to for one year.");
// } else {
//   console.log("Not eligible");
// }

//Using Ternary conditions

// operand1 is the expression that is to be evaluated. If the value of the expression is
// true, operand2 gets executed. If the value of the expression is false, operand3 gets
// executed. You can read the question mark as "then" and the colon as "else" here:

// expression ? statement for true : statement associated with false;

let name = "Bunty";

name === "Bunty" ? `Hello ,${name}` : "Hello, Ji";

let activity = "Get up";
activity = "Break";

if (activity === "Get up") {
  console.log("It is 6:30AM");
} else if (activity === "Breakfast") {
  console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
  console.log("It is 8:00AM");
} else if (activity === "Lunch") {
  console.log("It is 12.00PM");
} else if (activity === "Drive home") {
  console.log("It is 5:00PM");
} else if (activity === "Dinner") {
  console.log("It is 6:30PM");
} else {
  console.log("This is not your activity.");
}

// Switch case syntax

// switch(expression) {
//     case value1:
//     // code to be executed
//     break;
//     case value2:
//     // code to be executed
//     break;
//     case value-n:
//     // code to be executed
//     break;
//     }

switch (activity) {
  case "Get up":
  case "Break": // Using two cases together.
    console.log("It's 6 am.");
    break;
  case "Breakfast":
    console.log("It's 7 am.");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default: // It runs when any the of the case doesn't match.
    console.log("It's not your activity boy.");
    break;
}
