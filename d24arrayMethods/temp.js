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
