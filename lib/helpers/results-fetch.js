const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "/../../data/");

const fetchResults = ({ file, data, isCumulative }) => {
  if (isCumulative) {
    updateResult({ file, data });
  } else {
    forceWriteResult({ file, data });
  }
};

const getFilePath = (file) => baseDir + "raw/" + file + ".json";

const forceWriteResult = ({ file, data }) => {
  return fs.writeFile(getFilePath(file), JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log(`${file} saved under ./data/raw`)
  );
};

const updateResult = ({ file, data }) => {
  const rawOldData = fs.readFileSync(getFilePath(file));
  const oldData = JSON.parse(rawOldData);
  const updatedData = {
    native: oldData.native.concat(data.native),
    lodash: oldData.lodash.concat(data.lodash),
  };
  forceWriteResult({ file, data: updatedData });
};

module.exports = fetchResults;
