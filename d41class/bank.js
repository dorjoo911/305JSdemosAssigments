"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */

const acc = require("./account.js"); //with node need the name of your file with your functions here
const Account = acc.Account; //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount;

class Bank {
  constructor() {
    this.bank = bank;
  }
  static nextNumber = 101; // number for the next account w

  addAccount() {
    const newAcct = new Account(Bank.nextNumber);
    Bank.nextNumber++;
    this.accounts.push(newAcct);
    return Bank.nextNumber - 1;
  }

  addSavingsAccount(interest) {
    const newAcct = new SavingsAccount(Bank.nextNumber, interest);
    Bank.nextNumber++;
    this.accounts.push(newAcct);
    return Bank.nextNumber - 1;
  }

  /**
     *  @returns {*|string} returns a String
     with each account on its own line
     *
     */
  accountReport() {
    const report = this.accounts.reduce(
      (report, account) => report + "\n" + account.toString()
    );
    return report;
  }
}
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
exports.Bank = Bank;

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
exports.Bank = Bank;
