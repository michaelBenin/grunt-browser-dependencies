'use strict';
var grunt = require('grunt');

module.exports = {
    get_js: function (test) {
        test.expect(1);

        var actual = '';
        var original = '';
        test.ok(actual = original, 'should return a downloaded file');

        test.done();
    }
};
