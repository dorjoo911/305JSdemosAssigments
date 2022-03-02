"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/

const bank = { transactionsDB: [] };
bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] },
  { customerId: 2, customerTransactions: [10, 10, -10] },
  { customerId: 3, customerTransactions: [5, -5, 55] },
];

bank.saveTransaction = function (id, amount) {
  const customer = bank.transactionsDB.find(
    (customer) => customer.customerId === id
  );
  customer.customerTransactions.push(amount);
};

bank.debit = function (id, amount) {
  /* make sure current balance is > amount */
};
// console.log(debit(1), [10, 50, -40]);

bank.credit = function (id, amount) {
  this.saveTransaction(id, amount);
};

bank.getBalance = function (id) {
  let newbalance = [];
  let dataBase = bank.transactionsDB;

  for (let i = 0; i < dataBase.length; i++) {
    if (bank.transactionsDB[i].customerId === id) {
      let balance = 0;

      for (let j = 0; j < dataBase[i].customerTransactions.length; j++) {
        balance = balance + dataBase[i].customerTransactions[j];
      }

      newbalance.push(balance);
    }
  }

  return newbalance;
};
console.log("from getBalance " + bank.getBalance(3));

/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function (id, amount) {
  let bank_Balance = 0;
  let dataBase = bank.transactionsDB;

  for (let i = 0; i < dataBase.length; i++) {
    for (let j = 0; j < dataBase[i].customerTransactions.length; j++) {
      bank_Balance += dataBase[i].customerTransactions[j];
    }
  }

  return bank_Balance;
};

console.log("from bankBalance " + bank.bankBalance());

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = { bank }; //add all of your object names here that you need for the node mocha tests
