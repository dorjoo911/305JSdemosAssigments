"use strict";
/* global Account require  */
const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/* global exports */
class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this.interest = interest;
  }

  setInterest(interest) {
    this.interest = interest;
  }

  getInterest() {
    return this.interest;
  }

  /**
     *  deposits the interest amount into the
     account. The calculation for the amount is balance * interest / 100
     */
  addInterest() {
    const depAmount = (this.getBalance() * this.interest) / 100;
    this.deposit(depAmount);
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    const acctString = super.toString();
    return acctString + " Interest rate is: " + this.interest;
  }

  /**
   * Performs needed actions at the end of the month
   *
   * @returns {undefined}
   */
  endOfMonth() {
    return ""; // does nothing
  }
}
exports.SavingsAccount = SavingsAccount;
