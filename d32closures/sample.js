let arr = [1, 2, 3, 5, 4, 5, 6, 7];

// function inArray(arr) {
//   return arr.filter(function (item) {
//     if (item > 0 && item < 8) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// let filter1To7 = inArray(arr);

// console.log(filter1To7(5));

// function inBetween(low, high) {
//   return function filter3to6(num) {
//     if (num > low && num < high) return console.log(num);
//     return false;
//   };
// }
// let filter3to6 = inBetween(3, 6);
// console.log(filter3to6(5));

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
function byField(fieldName) {
  function nameSortedAnswer(arr) {
    return fieldName;
  }
  return nameSortedAnswer;
}

let nameSortedAnswer = users.sort(byField("name"));
assert.deepEqual(nameSortedAnswer, nameSortedKey);
