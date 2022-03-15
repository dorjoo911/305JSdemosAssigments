"use strict";
/* global Account require  */
// const acc = require("./account.js"); //with node need the name of your file with your functions here
// const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/* global exports */
class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }
  getInterest() {
    return this._interest;
  }
  setInterest(rate) {
    this._interest = rate;
  }
  addInterest() {
    const balAmount = this.getBalance();
    const interestAmount = (balAmount * this._interest) / 100;
    this.deposit(interestAmount);
  }
  toString() {
    return (
      "SavingsAccount " +
      this._number +
      ": balance: " +
      this._balance +
      " interest: " +
      this._interest
    );
  }
  endOfMonth() {
    this.addInterest();
    return "Interest added " + this.toString();
  }
}
// exports.SavingsAccount = SavingsAccount;
