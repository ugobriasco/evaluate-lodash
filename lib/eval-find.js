const { find } = require("lodash");
const fs = require("fs");

const { generateUsers, generateRandomInt } = require("./helpers");

const runBenchmark = async () => {
  const users = await generateUsers(100);

  let lodashTimes = [];
  let nativeTimes = [];

  for (let i = 0; i < 20; i++) {
    const users = await generateUsers(100);
    const { loDashTimeInMs, nativeTimeInMs } = evaluateFind(users);
    lodashTimes.push(loDashTimeInMs);
    nativeTimes.push(nativeTimeInMs);
  }

  const data = {
    lodash: lodashTimes,
    native: nativeTimes,
  };

  fs.writeFile("./data/raw/evaluate-find.json", JSON.stringify(data), (err) =>
    err
      ? console.log(err)
      : console.log("_.find: performance results saved under ./data/raw")
  );

  return;
};

// https://docs-lodash.com/v4/find/
const evaluateFind = (users) => {
  const ageMax = generateRandomInt(18, 80);
  const timerDateFindLodash = new Date();
  console.log(
    "lodash find",
    find(users, ({ age }) => age < ageMax)
  );
  const loDashTimeInMs = new Date() - timerDateFindLodash;

  const timerDateFindJS = new Date();
  console.log(
    "native find",
    users.find(({ age }) => age < ageMax)
  );
  const nativeTimeInMs = new Date() - timerDateFindJS;

  return { loDashTimeInMs, nativeTimeInMs };
};

module.exports = runBenchmark;
