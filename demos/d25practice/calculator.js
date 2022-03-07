"use strict";

/* 6.	Create an object calculator with two methods using an object literal:
    setValues(operand1, operand2) takes two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
    */
// let calc1 = {
//   val1: 0,
//   val2: 0,
//   sum: function () {
//     return this.val1 + this.val2;
//   },
//   mul: function () {
//     return this.val1 * this.val2;
//   },
//   setValues: function (v1, v2) {
//     this.val1 = v1;
//     this.val2 = v2;
//   },
// };

/* 7.	Create an object calculator with two methods using a constructor function: */

const calc2 = new Calculator();
let calc1 = new Calculator();

calc1.setValues(5, 10);
console.log("expect 15 : ", calc1.sum());
console.log("expect 50 : ", calc1.mul());

calc2.setValues(2, 3);
console.log("expect 5 : ", calc2.sum());
console.log("expect 6 : ", calc2.mul());
/**
 *
 * @returns {Object} it is a constructor function
 */
function Calculator() {
  this.val1 = 0;
  this.val2 = 0;
  (this.sum = function () {
    return this.val1 + this.val2;
  }),
    (this.mul = function () {
      return this.val1 * this.val2;
    }),
    (this.setValues = function (v1, v2) {
      this.val1 = v1;
      this.val2 = v2;
    });
}
