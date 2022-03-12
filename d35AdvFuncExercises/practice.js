let x = 10;
function max() {
  return (x = x + 1);
}
console.log(max());
console.log(max());
x = 0;
console.log("max() :>> ", max());
