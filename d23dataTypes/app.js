"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = {
//   ucFirst,
//   getMaxSubSum,
//   truncate,
//   camelize,
//   checkSpam,
//   extractCurrencyValue,
// }; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return (
    lowerStr.includes("viagra") ||
    lowerStr.includes("xxxxx") ||
    lowerStr.includes("rabbit")
  );
}

function truncate(str, maxlength) {
  if (str.length <= maxlength) return str;

  return str.slice(0, maxlength) + "...";
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

function camelize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
function extractCurrencyValue(str) {
  return +str.slice(1);
}
