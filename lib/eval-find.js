const { find } = require("lodash");
const fs = require("fs");
const summonUser = require("white-summoner");

const runBenchmark = async () => {
  const users = await generateUsers(100);

  let lodashTimes = [];
  let nativeTimes = [];

  for (let i = 0; i < 20; i++) {
    const { loDashTimeInMs, nativeTimeInMs } = evaluateFind(users);
    lodashTimes.push(loDashTimeInMs);
    nativeTimes.push(nativeTimeInMs);
  }

  const data = {
    lodash: lodashTimes,
    native: nativeTimes,
  };

  fs.writeFile("./data/raw/evaluate-find.json", JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log("Done")
  );

  return;
};

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

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateUsers = async (number) => {
  let n = number;
  let users = [];

  while (n > 0) {
    const _user = await summonUser("DE");
    let user = {
      user: _user.personal_profile.first_name,
      age:
        new Date().getFullYear() -
        new Date(_user.personal_profile.date_of_birth).getFullYear(),
    };
    users.push(user);
    n--;
  }
  return users;
};

module.exports = runBenchmark;
