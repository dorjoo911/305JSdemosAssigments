// Primitives:  Can I add a string property?
let str = "Hello";
str.test = 5; // (*)
console.log(str.test);

//Sum numbers from the visitor!
// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// alert(a + b);

// Repeat until the input is a number !!!
// function readNumber() {
//   let num;

//   do {
//     num = prompt("Enter a number please?", 0);
//   } while (!isFinite(num));

//   if (num === null || num === "") return null;

//   return +num;
// }
// alert(`Read: ${readNumber()}`);

// An occasional infinite loop
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log(i);
}

// A random number from min to max
// (write a Mocha test with several different tests)
function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

// Is array copied?
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

console.log(fruits.length); // 4

// Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");

// Calling in an array context
let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
});

arr[2](); // a,b,function(){...}

// Sum Imput
// function sumInput() {
//   let numbers = [];

//   while (true) {
//     let value = prompt("A number please?", 0);

//     // should we cancel?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(sumInput());

// A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
