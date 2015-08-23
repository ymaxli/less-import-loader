/**
 * @fileOverview index.js
 * @author Max
 **/

module.exports = function(source) {
    this.cacheable();

    var options = this.options.lessImportLoader;

    var result = source;

    if(options && options.base) {
        result = '@import "' + options.base + '";\n' + result;
    }

    return result;
};
