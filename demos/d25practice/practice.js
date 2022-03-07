// let finalPrice = new GetFinalPrice();

// function Item() {
//   this.id,
//     this.name,
//     this.price,
//     (this.discount = price * 0.1),
//     (this.freeShipping = function () {
//       return false;
//     });
// }

// let getFinalPrice = (pri) => pri - (10 / 100) * 500;
// let getCheckOutPrice = (shoppingCart) =>
//   price -
//   (price * 10) / 100 +
//   3 +
//   // constructor function
//   function Person(person_name, person_age, person_gender) {
//     // assigning  parameter values to the calling object
//     (this.name = person_name),
//       (this.age = person_age),
//       (this.gender = person_gender),
//       (this.greet = function () {
//         return "Hi" + " " + this.name;
//       });
//   };

// // creating objects
// const person1 = new Person("John", 23, "male");
// const person2 = new Person("Sam", 25, "female");

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item, index, arr) =>
  arr.pop(index + 1)
);
console.log("object :>> ", lengths); // 5,7,6 5,8,8

let anotherObject = { color: "green" };
let color = "red";
let myObject = {
  anotherObject: { color: "blue" },
  printColor: function () {
    console.log(this.anotherObject.color);
  },
};
myObject.printColor();

// Get average age, round the result to keep only two decimals.
let array = [
  { name: "ram", age: 29 },
  { name: "syam", age: 40 },
  { name: "ganga", age: 19 },
];
console.log("expect 75.33", getAverageAge(array));
function getAverageAge(arr) {}
