# Evaluate Lodash library

This project aims to benchmark lodash performance, compared to native implementation.

## Getting started

```
npm i
npm start
```

The test results (including plots) will be available under `./.results`.

Following a list of methods under test:

- \_.find
- \_.reduce

## Configuration

#### Lodash version

The default Loadash version under test is _4.17.21_. In order to select a different one, upodate `./package.json`, then:

```
    rm -rf node_modules
    npm i
```

#### Test intensity

Change `./lib/settings.js` to modify the test intensity as following:

- Sizing the dataset, which will be then raversed by each target method.
- Increasing the repetitions during a single batch
- Cumulate results form subsequent batches

## References

- [Lodash](https://www.npmjs.com/package/lodash?activeTab=versions) versions published in npm
- An old article [claiming lodash performance issues](https://codeburst.io/why-you-shouldnt-use-lodash-anymore-and-use-pure-javascript-instead-c397df51a66)

## License

MIT
