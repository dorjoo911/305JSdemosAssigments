"use strict";
const birthYears = [1981, 2005, 1950, 1978, 1986, 2010, 1948];
let ages = processArray(birthYears, findOutAges);
console.log(birthYears);
console.log(ages);
console.log(processArray(ages, isFullAge));
console.log(processArray(ages, findOutMaxHeartRate));
console.log(processArray([2016, 1965, 1945], findOutAges));

console.log(
  processArray(ages, function (age) {
    return age >= 65;
  })
);

function processArray(myArr, fn) {
  let arr = [];
  for (let i in myArr) {
    // <--- === for(let i=0; i<myArr.length; i++){}
    arr.push(fn(myArr[i]));
  }
  return arr;
}

function findOutAges(el) {
  return new Date().getFullYear() - el;
}

function isFullAge(el) {
  return el >= 18;
}

function findOutMaxHeartRate(el) {
  return Math.round(206.9 - 0.67 * el);
}
// Closure
function showPost(content) {
  var editedContent =
    "Shine medee : " +
    content +
    "\n\nTa nemelt medee avahiig huswel 1234.mn zochlooroi";

  console.log(editedContent);

  return function () {
    var email = prompt(
      editedContent + "\n\nemail haygaa ugwul shine medeelel yawuulna"
    );

    document.write("Thanks, I got your email : " + email);
  };
}

var medee = "hicheelee sain suraarai !";
var askEmailFunction = showPost(medee);
setTimeout(askEmailFunction, 5000);

let animal = { eats: true }; //using [ ] for curly brackets due to Sakai issue
function Dog(name) {
  this.name = name;
} //using [ ] for curly brackets due to Sakai issue
Dog.prototype = DOG(animal);
let snoopy = new Dog("Snoopy");
alert(snoopy.eats); // true
