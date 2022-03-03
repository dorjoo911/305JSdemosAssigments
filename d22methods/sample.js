const bank = {
  transactionsDB: [],
};
bank.transactionsDB = [
  { customerId: 1, customerTransactions: [10, 50, -40] }, // 20
  { customerId: 2, customerTransactions: [10, 10, -10] }, // 10
  { customerId: 3, customerTransactions: [5, -5, 55] }, // 55
];

// console.log(bank.transactionsDB[0].customerId); // 1
// console.log(bank.transactionsDB[0].customerTransactions); // [10, 50, -40]

bank.bankBalance = function (arg) {
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
