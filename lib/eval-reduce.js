const { reduce } = require("lodash");
const fs = require("fs");

const { generateArrayOfRandomInt } = require("./helpers");

const runBenchmark = () => {
  const numbers = generateArrayOfRandomInt(100);

  let lodashTimes = [];
  let nativeTimes = [];

  for (let i = 0; i < 20; i++) {
    const numbers = generateArrayOfRandomInt(100);
    const { loDashTimeInMs, nativeTimeInMs } = evaluateReduce(numbers);
    lodashTimes.push(loDashTimeInMs);
    nativeTimes.push(nativeTimeInMs);
  }

  const data = {
    lodash: lodashTimes,
    native: nativeTimes,
  };

  fs.writeFile("./data/raw/evaluate-reduce.json", JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log("Done")
  );

  return;
};

// https://docs-lodash.com/v4/reduce/
const evaluateReduce = (numbers) => {
  const timerDateReduceLodash = new Date();
  console.log(
    "lodash reduce",
    reduce(numbers, (sum, n) => sum + n, 0)
  );
  const loDashTimeInMs = ("lodash time", new Date() - timerDateReduceLodash);

  const timerDateReduceJS = new Date();
  console.log(
    "native reduce",
    numbers.reduce((sum, n) => sum + n, 0)
  );
  const nativeTimeInMs = ("native time", new Date() - timerDateReduceJS);

  return { loDashTimeInMs, nativeTimeInMs };
};

module.exports = runBenchmark;
