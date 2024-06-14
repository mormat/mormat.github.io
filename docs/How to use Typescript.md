

Install typescript with : 
```
npm install --save-dev @babel/preset-typescript
```

in babel.config.js, add @babel/preset-typescript :
```
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
```

Using rest parameters:
```

```

Using spread syntax:
```
const numbers = [1, 2, 3];
sum(...numbers)
```
