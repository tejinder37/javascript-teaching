// array methods

// filter()=> this method is used to filter out some data

// When we use two methods together that is known as method chaining.
// let friends = ["ram", "sham", "titu", "rohan", "sohan"];
// friends
//   .filter((friend) => friend === "sham")
//   .forEach((friend) => console.log(friend));

//The copyWithin() method can be used to replace a part of the array with another
//part of the array.

// friends.copyWithin(0, 3, 4);
// console.log(friends);

// map() => map method is used to transform values of an array & also used to loop through an array.
// let nums = Array.from({ length: 20 }, (_, idx) => idx);
// nums.map((num) => console.log(num + 1));

// split() => split() is used to convert string into an array by providing a
// seperator as agrument inside the method.
// let result = "Hello JavaScript";
// let arrResult = result.split(" ");
// console.log(arrResult);

// join() => join method is used to convert array into string by providing a
// seperator as agrument inside the method.

// let favFruits = ["strawberry", "watermelon", "grapefruit"];
// let favFruitsString = favFruits.join("-    ");

// console.log(favFruitsString);

// console.log(favFruits.indexOf("strawberry")); // returns -1 if don't match

// let str = "Create a substring";
// let substr1 = str.slice(5); // when it has one argument it starts from that argument & take string all the way to end.
// let substr2 = str.slice(0, 3); // when two args are provided then it will take substring from starting to ending.
// console.log(substr1);
// console.log(substr2);

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

// let balance = 330.9838338;

// We can tell JavaScript how many decimals to use with the toFixed() method

// console.log(balance.toFixed(2)); // range b/w 0 to 20

// let x = 1.23456;
// let newX = x.toPrecision(2);
// console.log(newX);

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// let lowest = Math.min(2, 56, 12, 1, 233, 4,0);
// console.log(highest);
// console.log(lowest);

// There are different ways to turn decimals into integers. Sometimes you will want to
// round a number. This you can do with the round() method:

// let x = 6.78;
// let y = 20.6;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// ceil() => Always gives the next number after the pt.
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let today = new Date();
// console.log(today); // timestamp utc (universal coordinated time)

// IST => Indian Standard Time. (+5.30 hours)
// console.log(today.toLocaleString()); // to convert according to local time zone that area.
// console.log(today.toLocaleDateString()); // to get date only

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

// console.log(
//   new Intl.DateTimeFormat("en-GB", {
//     dateStyle: "full",
//     timeStyle: "long",
//     timeZone: "Asia/Kolkata",
//   }).format(d)
// );
