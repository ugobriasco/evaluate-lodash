const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "/../../.results/");

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
  if (fs.existsSync(getFilePath(file))) {
    // In case the file exists then fetch new data
    const rawOldData = fs.readFileSync(getFilePath(file));
    const oldData = JSON.parse(rawOldData);
    const fetchingData = {
      native: oldData.native.concat(data.native),
      lodash: oldData.lodash.concat(data.lodash),
    };
    forceWriteResult({ file, data: fetchingData });
  } else {
    //In case there is no such a file, just create one.
    forceWriteResult({ file, data });
  }
};

module.exports = fetchResults;
