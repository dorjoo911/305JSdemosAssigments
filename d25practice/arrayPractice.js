"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   doubleNums,
//   doubleAges,
//   filterEven,
//   filterOver10,
//   findEvenNum,
//   findEvenAge,
//   includesEvenNum,
// }; //add all of your function names here that you need for the node mocha tests
const numArray = [5, 0, 7, 77, -20, 300, 51, 2];
const peopleArray = [
  { name: "Sam", age: 15 },
  { name: "William", age: 6 },
  { name: "Lucy", age: 13 },
  { name: "Barney", age: 80 },
];
/*
    it("doubles an array of numbers", function () {
        assert.deepEqual(doubleNums(numArray), [10, 0, 14, 154, -40, 600, 102, 4]);
        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
    });
*/
function doubleNums(arr) {
  return arr.map((num) => num * 2);
}

function doubleAges(arr) {
  return arr.map((e) => e.name, e.age * 2);
}
console.log(peopleArray);

function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function filterOver10(arr) {
  return arr.filter((e) => e.age > 10);
}
console.log(filterOver10(peopleArray));

function findEvenNum(arr) {
  return arr.find((num) => num % 2 === 0);
}

function findEvenAge(arr) {
  return arr.find((e) => e.age % 2 === 0);
}
console.log(peopleArray);

function includesEvenNum(arr) {
  return arr.find(includes((e) => e.numArray == e));
}

function includesEvenAge(arr) {}
