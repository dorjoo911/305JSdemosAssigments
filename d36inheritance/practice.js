/*
// animal has methods
let animal = {
  walk: function () {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep: function () {
    this.isSleeping = true;
  },
};
let rabbit = {
  name: "White Rabbit",
  __proto__: animal,
};
// modifies rabbit.isSleeping
rabbit.sleep();
console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (no such property in the prototype)

let head = {
  glasses: 1,
};
let table = {
  pen: 3,
  __proto__: head,
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};
let pockets = {
  money: 2000,
  __proto__: bed,
};
console.log("expect 3: ", pockets.pen);
console.log("expect 1: ", bed.glasses);   

*/

/*
let animal = { eats: true };

// function Rabbit(name) {  this.name = name;}
// Rabbit.prototype = animal;
let rabbit = {
  __proto__: animal,
};
console.log(rabbit.eats); // true

//rewrite this to have the same inheritance hierarchy using __proto__ instead of the
// constructor .  I.e., delete the Rabbit prototype and use only object literals and __proto__
*/
/*
function User(firstname, lastname, birthDate) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthDate = birthDate;
}
// User.prototype = {
//   getFullName: getFullName,
//   getAge: getAge,
// };
User.prototype.getFullName = getFullName;
User.prototype.getAge = getAge;
let user1 = new User("John", "Smith", new Date("2000-10-01"));
let user2 = new User("Edward", "Hopkins", new Date("1991-11-14"));

function getFullName() {
  return this.firstname + " " + this.lastname;
}

function getAge() {
  return new Date().getFullYear() - this.birthDate.getFullYear();
}

//complete the code so that the above functions reside in a single object and are inherited by all User //objects that are created using User as a constructor function.
console.log(user1.getFullName()); //John Smith
console.log(user1.getAge()); //21
*/
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User();

// console.log("user.name :>> ", (user.name = "Patrick"));
// console.log("user :>> ", user);

// let user2 = new User();
// console.log("user.name :>> ", (user.name = "George"));
// console.log("user :>> ", user);
// function Person(name) {
//   console.log("Person1 this: ", this);
//   this.name = name;
//   console.log("Person2 this: ", this);
// }
// function Doctor(name, department) {
//   console.log(this);

//   Person.call(this, name, department);
//   console.log(this);

//   this.dept = department;
// }
// Doctor.prototype.report = function () {
//   return "medical report";
// };
// function Surgeon(name, department) {
//   console.log(this);

//   Doctor.call(this, name, department);
//   console.log(this);
// }
// Surgeon.prototype.operate = function () {
//   return "operation performed.";
// };
// Surgeon.prototype.__proto__ = Doctor.prototype;
// surg1 = new Surgeon("Fred", "Cardiology");
// console.log(surg1.dept);

// console.log(surg1.name);

// console.log(surg1.report());

// console.log(surg1);

// console.log(surg1.__proto__);

// console.log(surg1.prototype);

// console.log(Surgeon.__proto__);

// console.log(Surgeon.prototype);

// console.log(Surgeon.prototype.__proto__);
// let arr1 = { a: 1, b: 2, c: 3 };
let arr = [{ a: 1 }, { a: 2 }, { a: 3 }];

function mapping() {
  let res = [];
  for (let e of arr) {
    // for (let i in e) {
    res.push(e.a * e.a); // index of value
  }

  return res;
}
console.log("res :>> ", mapping());
// function mapping1() {
//   let res = [];
//   for (let e of arr) {
//     for (let i in e) {
//       res.push(e[i] * e[i]); // index of value
//     }
//   }
//   return res;
// }
// console.log("res :>> ", mapping1());

// for (let e in arr1) {
//   console.log("e :>> ", e); // index
// }

// for (let e of arr1) {
//   console.log("e :>> ", e); // object
// }
