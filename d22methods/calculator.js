"use strict";

const calculator = {
  value1: 0,
  value2: 0,
  getValues: function (operand1, operand2) {
    this.value1 = operand1;
    this.value2 = operand2;
  },
  sum: function () {
    const tot = this.value1 + this.value2;
    return tot;
  },
  mul: function () {},
};
calculator.getValues(5, 10);
console.log("expect 15 : ", calculator.sum());
console.log("expect 50 : ", calculator.mul());

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { calculator }; //add all of your object names here that you need for the node mocha tests

/*      ****************** */

/* Create an object calculator with three methods:
    getValues(operand1, operand2) takes two values and saves them as object properties.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
*/
