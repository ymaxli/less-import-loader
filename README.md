# less-import-loader

add global dependencies to less file for webpack

## Installation

```
$ npm install less-import-loader --save-dev
```

## How to use

add less-import-loader before less-loader

```js
{
    test: /\.less$/,
    loader: "style!css!less!less-import-loader"
},
```

add less-import-loader option in webpack.config.js

```js
lessImportLoader: {
    base: process.cwd() + '/src/less/base'
}
```

Before:

```less
a {
    color: white;
}
```

After:

```less
@import "/src/less/base";
a {
    color: white
}
```
