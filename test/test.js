var expect = require('expect.js');

describe('less-import-loader', function() {

    it('import global denpendency', function() {
        var result1 = require('raw-loader!../!./cases/a.less');
        expect(result1).to.contain('@import "../less/base";');

        var result2 = require('raw-loader!../!./cases/b/b.less');
        expect(result2).to.contain('@import "../../less/base";');
    });

});
