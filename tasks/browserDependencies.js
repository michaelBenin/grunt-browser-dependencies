/*
 * grunt-browser-dependencies
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 Michael Benin, contributors
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
    "use strict";
    grunt.registerMultiTask('browserDependencies', 'Get js files and rename them', function () {

        var http = require('http-get');

        var options = this.options({});

        var dir = this.data.dir,
            files = this.data.files,
            done = this.async(),
            path = dir +'/',
            total = 0;
        grunt.file.mkdir(dir);

        for(var i=0; i<files.length; i++){
            for(var j in files[i]){
                http.get({url: files[i][j]}, path+j, function (error, result) {
                    if (error) {
                        grunt.log.write(error);
                        done(false);
                    } else {
                        grunt.log.write('✔ '.green + 'File downloaded at: ' + result.file + '\n');
                        total++;
                        if(total === files.length){
                            done(true);
                        }
                    }
                });
            }
        }
    });
};
