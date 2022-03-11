//"use strict";
// function a() {
//   console.log(this);
// }
// const b = {
//   dog: "fido",
//   log: function () {
//     console.log(this);
//   },
// };
// console.log(this);
// a();
// b.log();
// let mylog = b.log;
// mylog();

// function area() {
//   console.log("this :>> ", this);
//   return this.side * this.side;
// }
// const square1 = { side: 5, area: area };
// console.log("area(square1) :>> ", area(square1));
//"use strict";
/*"use strict";
// Fix the code below using an arrow function and then using bind
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms

function spy(func) {
  function wrapper(...args) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
("use strict");
// Fix the code below using an arrow function and then using bind
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
    this.students.forEach(function (student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ": " + student);
    });
  },
};
group.showList();

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(alert, 1000);

f1000("test"); // shows "test" after 1000ms

function spy(func) {
  function wrapper(...args) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
*/

// const me = {
//   first: "Tina",
//   last: "Xing",
//   getFullName: function () {
//     return this.first + " " + this.last;
//   },
// };
// const log = function (height, weight) {
//   // ‘this’ refers to the invoker
//   console.log(this.getFullName() + height + " " + weight);
// };
// const logMe = log.bind(me);
// logMe("180cm", "70kg"); // Tina Xing 180cm 70kg
// log.call(me, "180cm", "70kg"); // Tina Xing 180cm 70kg
// log.apply(me, ["180cm", "70kg"]); // Tina Xing 180cm 70kg
// log.bind(me, "180cm", "70kg")(); // Tina Xing 180cm 70kg <-------WRAPPER

// const abc = {
//   salute: "",
//   greet: function() {
//   this.salute = "Hello";
//   console.log(this.salute); //Hello
//   const setFrench = function(newSalute) {  //inner function
//   this.salute = newSalute;
//   };
//   setFrench("Bonjour");
//   console.log(this.salute); //Bonjour??
//   }
//   }
//   abc.greet();  //Hello  Hello ???
//demos\d36callContext\salute.js
// • JavaScript functions (versus methods) use ‘window’ as ‘this’
// • even inner functions in methods
// • Unless in strict mode, then ‘this’ = undefined

// let group = {
//   title: "Our Group",

//   students: ["John", "Pete", "Alice"],

//   showList() {
//     // this.students.forEach(function (student) {
//     //   console.log(this.title + ": " + student);
//     // });
//     // this.students.forEach((student) =>
//     //   console.log(this.title + ": " + student)
//     // );
//     this.students.forEach(
//       function (student) {
//         console.log(this.title + ": " + student);
//       }.bind(this)
//     );
//   },
// };
// // group.showList();

// function makeCounter() {
//   let count = 0;
//   const innerFunc = function () {
//     count = count + 1;
//     return count;
//   };
//   return innerFunc;
// }
// // console.log(makeCounter()); // once called it will disappier
// const counter1 = makeCounter(); // have to assing (keep) into variable
// counter1(); //makeCounter(); //2
// counter1(); //makeCounter(); //3
// const counter2 = makeCounter(); //1

// console.log("counter1() :>> ", counter1());
// console.log("counter2() :>> ", counter2());

// let arr = [15, 2, 3, 4, 5];
// arr.reverse();

// console.log("arr :>> ", arr);

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert(counter.up()); // ?
// alert(counter.up()); // ?
// alert(counter.down()); // ?

let names = "Bilbo, Gandalf, Nazgul"; // string

let arr = names.split(", ");

for (let name of arr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}
