"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
 */
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

function myMap(arr, func) {
  const newArr = [];
  for (const element of arr) {
    newArr.push(func(element));
  }
  return newArr;
}

function myFilter(arr, func) {
  //   return arr.filter((number) => number % 2 === 0);
  //   return arr.filter((number) => number > 1);
  // filter modify the array
  return arr.filter((element) => func(element));
}

function myReduce(arr, func, initialValue) {
  //myReduce([1, 2, 3, 4], sum, 0), 10)
  let sum = 0;
  sum = arr.reduce((element, current) => func(element, current), initialValue);
  return sum;
}
