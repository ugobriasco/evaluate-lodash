const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "/../../data/");

const fetchResults = ({ file, data, isCumulative = false }) => {
  if (!isCumulative) {
    forceWriteResultData({ file, data });
  } else {
    console.log("to be implemented");
  }
};

const getFilePath = (file) => baseDir + "raw/" + file + ".json";

const forceWriteResultData = ({ file, data }) => {
  return fs.writeFile(getFilePath(file), JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log(`${file} saved under ./data/raw`)
  );
};

const createNewResultData = ({ file, data }) => {
  fs.open(getFilePath(file));
};

module.exports = fetchResults;
