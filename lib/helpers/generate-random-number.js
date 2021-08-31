/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = generateRandomInt;
