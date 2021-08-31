const { find } = require("lodash");
const fs = require("fs");

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

let lodashTimes = [];
let nativeTimes = [];

const evaluateFind = () => {
  const timerDateFindLodash = new Date();
  console.log(
    "lodash find",
    find(users, ({ age }) => age < 40)
  );
  const loDashTimeInMs = new Date() - timerDateFindLodash;

  const timerDateFindJS = new Date();
  console.log(
    "native find",
    users.find(({ age }) => age < 40)
  );
  const nativeTimeInMs = new Date() - timerDateFindJS;

  lodashTimes.push(loDashTimeInMs);
  nativeTimes.push(nativeTimeInMs);
};

for (let i = 0; i < 100; i++) {
  evaluateFind();
}

const data = {
  lodash: lodashTimes,
  native: nativeTimes,
};

fs.writeFile("./data/raw/evaluate-find.json", JSON.stringify(data), (err) =>
  err ? console.log(err) : console.log("Done")
);

module.exports = evaluateFind;
