/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function generateRandomInt(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateArrayOfRandomInt(length) {
  let n = length;
  let arr = [];
  while (n > 0) {
    const number = generateRandomInt();
    arr.push(number);
    n--;
  }
  return arr;
}

module.exports = { generateRandomInt, generateArrayOfRandomInt };
