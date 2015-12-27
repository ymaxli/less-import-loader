/**
 * @fileOverview index.js
 * @author Max
 **/

var path = require('path');
var assign = require('object-assign');
var utils = require('loader-utils');

module.exports = function(source) {
    this.cacheable();

    var options = getLoaderConfig(this);

    var result = source;

    if(options && options.base) {
        result = '@import "' + path.relative(path.dirname(this.resourcePath), options.base) + '";\n' + result;
    }

    return result;
};

/**
 * Check the loader query and webpack config for loader options. If an option is defined in both places,
 * the loader query takes precedence.
 *
 * @param {Loader} loaderContext
 * @returns {Object}
 */
function getLoaderConfig(loaderContext) {
    var query = utils.parseQuery(loaderContext.query);
    var configKey = query.config || 'lessImportLoader';
    var config = loaderContext.options[configKey] || {};

    delete query.config;

    return assign({}, config, query);
}