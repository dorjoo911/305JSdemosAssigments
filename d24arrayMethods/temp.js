// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(
//   (item, index) => `${index}: ${item.length}`
// );
// //modify so that it logs array with index: item.length instead of just item.length
// // console.log("expect 0: 5, 1: 7, 2: 6", lengths);

// function compareNumeric(a, b) {
//   //  -1 means a comes before b -- semantics of modify this function
//   //   1 means a comes after b
//   //   a = String(a); // a is string now
//   //   b = "" + b;

//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// }

// let arr = [2, 1, 15];
// // arr.sort(compareNumeric); // sort with function declaration descending order

// // arr.sort(function (a, b) {
// //   return a - b;
// // });                      // sort with function experation accsending order

// arr.sort((a, b) => a - b); // sort with arrow function accsending order
// // console.log(arr); // [15, 2, 1] descending order

// /* ********************************************** */
// // reduce the array to the product of the numbers (“expect 120”)
// // reduce the array to the max of the numbers (“expect 5”)
// // let arr1 = [1, 2, 3, 4, 5];
// // let result = arr1.reduce(function (product, numbers) {
// //   return sum + current;
// // }, 0);
// // let result2 = arr1.reduce((sum, current) => sum + current, 0);

// // console.log(result);
// // console.log(result2);
// const bank = [
//   { customerId: 1, customerTransactions: [10, 50, -40] },
//   { customerId: 2, customerTransactions: [10, 10, -10] },
//   { customerId: 3, customerTransactions: [5, -5, 55] },
// ];

// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter((item) => a <= item && item <= b);
// }
/* write a function, maxPoints, to find and return the maximum points of any single player.  */
let start = 0;
function someFun(num) {
  //   100;
  let jordan = 23;
  if (num >= 0) {
    num = Math.sqrt(num); //10
  }
  start = jordan + num; //33;
  console.log(num + " " + jordan + " " + start); //_______10 23 33______________
  return num; //10;
}
// console.log(start); //__________0____________
// console.log(someFun(100)); // _______10_______________
// console.log(start); //_________33_____________
// console.log(jordan); //_____Reference Error: "jordan is not defined"
let myObj = {
  myArray: [1, 2, 3],
  anotherArray: [1, 2, 3],
  equals: function () {
    return this.myArray === this.anotherArray;
  },
};
// console.log(myObj.equals()); // false

let color = "red";
let myObject = {
  color: "blue",
  printColor: function () {
    console.log(color); //looking for global color /*if this here return "blue"/
  },
};
// myObject.printColor(); //_______red

const x = { a: 10, b: 20, c: 30 };
const y = x;
y.c = 300;
y.d = 400;
// console.log(x.c); //____300________________
// console.log(x.d); //_______400_____________
// console.log(y === x); //_________true

const x1 = 10;
const y1 = x1;
// y = 100;
// console.log(x1); // x==10 but error! y was const

// let myArray = [1, 2, 3, 4];
// let anotherArray = [10, 11, 12, 13];
// console.log(myArray[0]); //_________1__________________
// myArray = anotherArray;
// console.log(myArray[0]); //_________10__________________
// console.log(myArray.length); //_________4__________________

// function hi(name){return 'Hi ' + name;}
// let goodBye= function(){return 'Good Bye';}
// console.log(hi('Developer','Welcome')); //_____Hi Developer____________________
// console.log(goodBye('Developer')); //_______Goodbye__________________
// console.log(goodBye); //__________fn itself_______________
// console.log(goodBye()); //________Goodbye_________________
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     console.log("Age is less than 18");
//   }
// }
// const z = checkAge(19);
// const w = checkAge(18);
// console.log(z); //true
// console.log(w); //undefined
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i of matrix) {
//   console.log(i);
//   for (let j in i) {
//     console.log(i[j]);
//   }
// }
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

function getAverageAge(players) {
  let avePoints = [];
  for (let player of players) {
    let temp = 0;
    for (let point in player.points) {
      temp += player.points[point];
    }
    avePoints.push((temp /= player.points.length));
  }
  return avePoints;
}
// console.log("expect [1.33, 1, 1 ]: ", getAverageAge(players));
// console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints(players));

// let array = [10, 20, 30, 40];
// let returnVal = array.map(helper);
// console.log(returnVal);
// // [0, 20, 60, 120] console.log(array);
// //[10,20,30,40] function helper(value,index){ return value*index; }
// let result = arr.map(function (item, index, array) {
//   // returns the new value instead of item
// });
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// console.log(lengths); // 5,7,6

// const array123 = [1, 2, 3];
// let sqrt = array123.map((i) => i * i);
// console.log("sqrt :>> ", sqrt);
