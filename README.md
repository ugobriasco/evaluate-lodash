# Evaluate Lodash library

This project aims to benchmark lodash performance, compared to native implementation.

## Getting started

### Installation

```
// Installing node dependancies
npm i
mkdir ./data/plots
mkdir ./data/raw

// Install python dependancies (to plot results)
python -m venv ./venv
source ./venv/bin/activate
pip install --upgrade setuptools
pip install --upgrade pip
pip install matplotlib
pip install pandas

```

### Usage

Run the benchamark

```
npm start
```

Plot results

```
. ./venv/bin/activate
python3 ./bin/plot.py
```

## References

- [Lodash](https://www.npmjs.com/package/lodash?activeTab=versions) versions published in npm
- An old article [claiming lodash performance issues](https://codeburst.io/why-you-shouldnt-use-lodash-anymore-and-use-pure-javascript-instead-c397df51a66)

## License

MIT
