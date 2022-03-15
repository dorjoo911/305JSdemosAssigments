// // Super class
// class Transaction {
//   constructor(desc, value) {
//     this.desc = desc;
//     this.value = value;
//   }

//   info() {
//     let typeText = this instanceof Income ? "Income" : "Cost";
//     return `( ${typeText} ) ${this.value}₮ ==> ${this.desc}`;
//   }
// }

// // Sub class
// class Income extends Transaction {
//   constructor(desc, value) {
//     super(desc, value);
//   }
// }

// // Sub class
// class Expense extends Transaction {
//   constructor(desc, value, nessary = false) {
//     super(desc, -value);
//     this.nessary = nessary;
//   }
// }

// let f = [];
// f.push(new Income("Salary", 2500));
// f.push(new Expense("Food", 200, true));
// f.push(new Expense("Fun activity", 70));
// f.push(new Expense("Movie", 7));
// f.push(new Income("Bigo!", 700));
// f.push(new Expense("Car wash", 19));
// f.push(new Expense("Utility", 150, true));

// f.forEach((e) => console.log(e.info()));
// console.log("-----------------------------------------------");
// console.log("Balance : " + f.reduce((budget, el) => budget + el.value, 0));

// console.log(
//   "Constant cost : " +
//     f.filter((e) => e.nessary).reduce((sum, el) => sum + el.value, 0)
// );
// console.log(
//   "Unnecessary cost : " +
//     f.filter((e) => e.nessary === false).reduce((sum, el) => sum + el.value, 0)
// );

// console.log("-----------------------------------------------");
// class Counter {
//   constructor() {
//     this._count = 0;
//   }
//   up() {
//     return ++this._count;
//   }
//   down() {
//     return --this._count;
//   }
// }

// let counter = new Counter();

// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());

function chooseRandomPerson() {
  let randomPerson = Math.floor(Math.random() * 10);
  if (randomPerson > 4) {
    console.log(randomPerson);
  }
}
chooseRandomPerson();
