'use strict';
var grunt = require('grunt');

exports.labjs_template = {
    get_js: function (test) {
        test.expect(1);

        var actual = '';
        var original = '';
        test.ok(actual = original, 'should return a downloaded file');

        test.done();
    }
};
