//

let test = "Tejinder Singh";

let count = 0;
const vowels = "aeiouAEIOU";
for (let char of test) {
  if (vowels.includes(char)) {
    count++;
  }
}

console.log(count);
