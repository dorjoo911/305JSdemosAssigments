"use strict";

/**
 * 

 * @returns {Accumulator} constructor function
 */
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += values;
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
  this.value1 = 0;
  this.value2 = 0;
  (this.sum = function () {
    return this.value1 + this.value2;
  }),
    (this.mul = function () {
      return this.value1 * this.value2;
    }),
    (this.setValues = function (v1, v2) {
      this.value1 = v1;
      this.value2 = v2;
    });
}

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests
