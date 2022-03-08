// let [firstName, , title] = [
//   "Julius", //firstName take first element
//   "Caesar",
//   "Consul", //title will take 3rd element only
//   "of the Roman Republic",
// ];
// console.log(firstName);

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(" ");
// // user obj gets elemnts name & surname, these elements sets values
// // "Ilya Kantor".split(" "); ==> user.name="Ilya", user.surname="Kantor"
// console.log(user.name); //calling obj user's name==> user.name it has "Ilya"

// const team = ["Bob", "Fred", "Jim"];
// /* destructure the team array onto variables with the same names
// as the elements, but all lower case */
// let [bob, fred, jim] = team;
// // What just happened here ???
// console.log("expect Bob", bob);
// console.log("expect Jim", jim);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };
// let { title, width, height } = options;
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200
// ➢Properties are assigned to the corresponding variables.
// ➢order does not matter
// let {height, width, title} = { title: "Menu", height: 200, width: 100 }
// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };
// function showMenu({
//   title = "Untitled",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   console.log(`${title} ${width} ${height}`); // My Menu 200 100
//   console.log(items); // Item1, Item2
// }
// showMenu(options);

// const team = {
//   point: "Bob",
//   shooting: "Fred",
//   power: "Jim",
//   small: "Al",
//   center: "Big Sleep",
// };
// 1. destructure the team object onto variables with the same names as the properties
// const{point, shooting, power, small, center} =team;
// console.log("expect Big Sleep", center);
// console.log("expect Jim", power);
// 2. destructure the team onto variables:  one (point guard), two (shooting guard), three (small
// forward), four (power forward) and five (center)
// const { one, shooting, four, small, center } = team;
// console.log("expect Jim: ", four);
// console.log("expect Bob: ", one);

// const object1 = {
//   a: "somestring",
//   b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }
// let divisor = 2;
// function largestPrimeFactor(n) {
//   while (n > 1) {
//     if (n % divisor === 0) {
//       n /= divisor;
//     } else {
//       divisor++;
//     }
//   }
//   return divisor;
// }

// let result = largestPrimeFactor(6936);
// console.log(result); //5

// let [name1, name2, ...other] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];
// console.log(name1); // Julius
// console.log(name2); // Caesar
// // Note that type of `rest` is Array.
// console.log(other[0]); // Consul
// console.log(other[1]); // of the Roman Republic
// console.log(other.length); // 2
// let user2 = [{ x: 1 }, { y: 6 }, { z: 8 }];
// function foo3() {
//   const arr = [];
//   for (const el in user2) {
//     arr.push(el);
//   }
//   return arr;
// }
// console.log(foo3());

// let options = {
//   title: "Menu"
//   };
//   let {width = 100, height = 200, title} = options;
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"],
// };
// function showMenu({
//   title = "Untitled",
//   width = 200,
//   height = 100,
//   items = [],
// }) {
//   // title, items – taken from options,
//   // width, height – defaults used
//   // console.log(`${title} ${width} ${height}`); // My Menu 200 100
//   // console.log(items); // Item1, Item2
//   // return this;
// }
// console.log(showMenu(options));

// let user = {
//   name: "John",
//   age: 30,
//   toString: function () {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   },
// };
// console.log(user); // {name: "John", age: 30}

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it
// // clone.age = 110;

// console.log(clone.age); // still John in the original object

// let user = {
//   name: "John",
//   age: 30,
// };

// let clone = Object.assign({}, user);

// clone.name = "Bat";
// console.log(clone.name);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };

// // let clone = Object.assign({}, user);
// let clone = _.cloneDeep(user);
// alert(user.sizes === clone.sizes); // true, same object

// // user and clone share sizes
// user.sizes.width++; // change a property from one place
// console.log(clone.sizes.width); // 51, see the result from the other one

// console.log(clone[0] === user[0]);

const arr1234 = [1, 2, 3, 4, 5];
console.log(arr1234[0]);
const [a, b, c, ...d] = arr1234;

console.log(d); //4,5
/*Write your own version of Array.map. Write a function, myMap(arr, fun) 
that takes an array and a function as arguments and returns a new array 
that is formed by applying the function to each element of the array and 
saving 
the result in the new array. Do not use the Array.map method in your code.
*/
const bar = [
  { x: 1, y: 2 },
  { x: 10, y: 4 },
];
function smash() {
  let res = 0;
  for (let { x, y } of bar) {
    res += { x, y };
  }
  return res;
  //   return bar.map(({ x, y }) => x + y);
}
console.log("expect [3, 14]:", smash(bar));
