"use strict";

const calculator = {
  value1: 0,
  value2: 0,
  getValues: function (a, b) {
    this.value1 = a;
    this.value2 = b;
  },

  sum: function () {
    const res = this.value1 + this.value2;
    return res;
  },
  mul: function () {
    const res = this.value1 * this.value2;
    return res;
  },
};
// calculator.getValues(2, 3);
// console.log("expect 15 : ", calculator.sum());
// console.log("expect 50 : ", calculator.mul());

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
//add all of your object names here that you need for the node mocha tests
module.exports = { calculator };
