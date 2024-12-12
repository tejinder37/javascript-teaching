// we have covered two types of fns simple fns, arrow fns, IFFE(Immediately invoked function expression).

// void return type when fn is not returning any value. for ex. when fn doesn't return & having console.log()
// let p = "test";  // let has block scope.
// let testing = (name) => {
//   console.log(p);

//   console.log(`My name is ${name}`);
// };
// console.log(p);

// let test = testing("kjsdfjk");
// console.log(test); // undefined because return type is void.

// when we have ...(three dots) inside fn declaration/ inside  fn's parameters
//spread operator becomes rest(baki saare) parameter.it gives us an array.
// let greeting = (name, ...params) => {
//   let message = `Hello, ${name}!`;

//   params.forEach((msg) => {
//     message += msg;
//   });
//   return message; // string
// };

// let greet = greeting(
//   "klsjfdalsjdflkasjlkdfjaslkdfjasldkf",
//   "test",
//   44,
//   "jfsdlk",
//   4123412,
//   4234
// );

// console.log(greet);

// IFFE without arrow fn
// (function () {
//   console.log("Hello Harman");
// })();

// IFFE using arrow fn

(() => {
  console.log("Hello Harman");
})();
