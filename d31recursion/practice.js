/**
 *
 * @returns {number} product of even arguments
 */
function multiplyEvens() {
  let prod = 1;
  for (const arg of arguments) {
    if (arg % 2 === 0) {
      prod *= arg;
    }
  }
  return prod;
}
console.log("expect: 48 --> " + multiplyEvens(1, 6, 3, 4, 17, 2));
