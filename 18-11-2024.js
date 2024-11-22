let number = 5;

// console.log(number++); //postfix
// console.log(number); // 6

console.log(++number); //prefix

// Comparison operators
// Comparison operators are different from the operators we have seen so far. The
// outcome of the comparison operators is always a Boolean, true, or false.

// let x = 5;
// let y = "5";

// console.log(x == y); // true  == don't check type
// console.log(x === y); // false ===  check type

// console.log(x !== y); // not equal

// console.log(x < y); // less than
// console.log(x > y); // greater than
// console.log(x <= y); // less than equal to
// console.log(x >= y); // greater than

// Logical operators => Whenever we need to check two conditions in one or we need negate(opposite)
//of a condition, the logical operators come in handy.

let x = 1;
let y = 2;
let z = 3;

// AND => This can be done with the && operator. It will only return true if both expressions are
// true:

console.log(x < y && z > y);

// Or
// If you want to get true if either one of the expressions is true, you use or. The
// operator for this is ||. These pipes are used to see if either one of these two is true,
// in which case the whole expression evaluates to true.

console.log(x > y || y < z);

// In some cases you will have to negate a Boolean. This will make it the opposite value.
// It can be done with the exclamation mark, which reads as not:
let bool = true;
console.log(!bool); // NOT
