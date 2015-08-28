# less-import-loader [![Build Status](https://travis-ci.org/MaxLee1994/less-import-loader.svg?branch=master)](https://travis-ci.org/MaxLee1994/less-import-loader)

add global dependencies to less file for webpack, this loader would resolve absolute global file path to relative path.

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
    base: process.cwd() + '/src/less/base' // must be absolute path
}
```

Before:

src/test/a.less
```less
a {
    color: white;
}
```

After:

```less
@import "../less/base";
a {
    color: white
}
```
