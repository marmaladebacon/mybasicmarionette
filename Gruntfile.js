module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: {
                src: [ 'Gruntfile.js' ]
            },
            src: {
                src: [
                    'src/**/*.js',
                    'require_config.js'
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    // Default task(s).
    grunt.registerTask('default', ['jshint','uglify']);

};

/* Addendum */

/*
 "The double asterisk (**) is not a git thing per say, it’s really a linux / Mac shell thing.

 It would match on everything including any sub folders that had been created.

 You can see the effect in the shell like so:

 # ls ./tmp/* = should show you the contents of ./tmp (files and folders)
 # ls ./tmp/** = same as above, but it would also go into each sub-folder and show the contents there as well."
 */