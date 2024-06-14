# How to use modules in jest scripts ?

Install jest, ts-jest and babel-jest:
```
npm i jest ts-jest babel-jest --save-dev
```

Add babel.config.js (only used by jest)
```
module.exports = {presets: ['@babel/preset-env']}
```

In jest.config.js update to:
```
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
```

To run a specific test,
```
npm test -- -t Widget
```
