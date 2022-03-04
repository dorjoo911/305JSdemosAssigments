/* write a function, sumPoints, to get the total points across all players */

function sumPoints(players) {
  let sum = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].points.length; j++) {
      sum += players[i].points[j];
    }
  }
  return sum;
}

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];

console.log("expect 10: ", sumPoints(players));

/* write a function findProps to return an array of all the properties in any given object */

function findProps(obj) {
  let txt = [];
  for (let x in obj) {
    txt += obj[x];
  }
  return txt;
}
console.log("expect [a, b, c]: ", findProps({ a: 1, b: 2, c: 3 }));
let arr;
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item);
console.log(lengths); // 5, 7, 6
