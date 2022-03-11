"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 */
let arr = [1, 2, 3, 4, 5, 6, 7];
function inArray(arr) {
  return function filter1To7(elem) {
    if (elem > 0 && elem < 8) return true;
    else return false;
  };
}

/**
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 */
function inBetween(low, high) {
  return function (x) {
    return x >= low && x <= high;
  };
  // return function filter3to6(num) {
  //   if (num > low && num < high) return true;
  //   return false;
  // };
}

/**
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      return i;
    };
    shooters.push(shooter);
  }

  return shooters;
}

// let army = makeArmy();

// army[0](); // 0
// army[5](); // 5
