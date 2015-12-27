var path = require('path');

module.exports = {
    target:  'node',
    context: __dirname,
    entry: './test.js',
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'test.js',
    },
    lessImportLoader: {
        base: path.join(process.cwd(), 'test/less/base')
    },
    anotherConfig: {
        base: path.join(process.cwd(), 'test/less/base-another')
    }
};
