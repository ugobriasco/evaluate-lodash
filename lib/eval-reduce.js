const { reduce } = require("lodash");
const fs = require("fs");

const { generateArrayOfRandomInt } = require("./helpers");
const { datasetSize, repetitions } = require("./settings");

const runBenchmark = () => {
  const numbers = generateArrayOfRandomInt(datasetSize);

  let lodashTimes = [];
  let nativeTimes = [];

  for (let i = 0; i < repetitions; i++) {
    const { loDashTimeInMs, nativeTimeInMs } = evaluateReduce(numbers);
    lodashTimes.push(loDashTimeInMs);
    nativeTimes.push(nativeTimeInMs);
  }

  const data = {
    lodash: lodashTimes,
    native: nativeTimes,
  };

  fs.writeFile("./data/raw/evaluate-reduce.json", JSON.stringify(data), (err) =>
    err
      ? console.log(err)
      : console.log("_.reduce: performance results saved under ./data/raw")
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
