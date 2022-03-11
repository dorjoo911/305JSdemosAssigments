//IIFE, closure, scope chaining, callback function
"use strict";
let a = [];

a.push(34);
a.push("hello");

a.push(function () {
  console.log("calling from function A...");

  return function () {
    console.log("Calling from inside function in function A....");
    return function () {
      console.log("... Inception!!!! ...");
    };
  };
});

// a[2]()()();

function prepare() {
  let arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  console.log("index i: " + i);

  return arr;
}

const massive = prepare();

// massive[0]();
// massive[1]();
// massive[2]();

let x = 1;

function func() {
  let x = 2;
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
}

func();
