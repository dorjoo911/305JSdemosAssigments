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
