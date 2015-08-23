/**
 * @fileOverview index.js
 * @author Max
 **/

var path = require('path');

module.exports = function(source) {
    this.cacheable();

    var options = this.options.lessImportLoader;

    var result = source;

    if(options && options.base) {
        result = '@import "' + path.relative(path.dirname(this.resourcePath), options.base) + '";\n' + result;
    }

    return result;
};
