var expect = require('expect.js');

describe('less-import-loader', function() {

    it('import global denpendency', function() {
        var result = require('raw-loader!../!./cases/a.less');
        expect(result).to.contain('@import "../public/base";');
    });

});
