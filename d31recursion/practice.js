"use strict";
/**
 *
 * @returns {number} product of even arguments
 */
function multiplyEvens() {
  let prod = 1;
  for (const arg of arguments) {
    if (arg % 2 === 0) {
      prod *= arg;
    }
  }
  return prod;
}
// console.log("expect: 48 --> " + multiplyEvens(1, 6, 3, 4, 17, 2));

// let a, b, c, d, e;
// a = [1, 2, 3];
// b = "dog";
// c = [42, "cat"];
// // Using the concat method.
// d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
// // Using the spread operator.
// e = [...a, b, ...c]; // [1, 2, 3, “dog”, 42, “cat”]
// console.log("e :>> ", e);
// copyOfA = [...a]; //[1, 2, 3]
// let str = "Hello";
// console.log([...str]); // H,e,l,l,o

// let a, b;
// a = { x: 1, y: 2, z: 3 };
// b = { ...a };
// console.log(b); // {x:1, y:2, z:3}

// console.log("a==b :>> ", a == b);
// b.x = 100;
// console.log(a); // {x:1, y:2, z:3}
// console.log(b); // {x:100, y:2, z:3} -- clone

// let user = {
//   // ...
// };

// // first, declare
// function sayHi() {
//   console.log("Hi from function sayHi() now in user's sayHi method!");
// }

// // then add as a method
// user.sayHi = sayHi;

// user.sayHi(); // Hello!

// user = {
//   sayHi() {
//     // same as "sayHi: function(){...}"
//     console.log("Hello");
//   },
// };

// console.log(user.sayHi);

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)
// user["f"]();

// function sayHi() {
//   console.log(this);
// }

// sayHi(); // undefined

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya
