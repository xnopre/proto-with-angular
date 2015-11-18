'use strict';


module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        config: {
            app: 'app',
            temp: 'temp',
            dist: 'www',
            bowerDir: 'lib'
        },

        watch: {

            bower: {
                files: ['bower.json'],
                tasks: ['injector']
            },

            js: {
                files: ['<%= config.app %>/js/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },

            styles: {
                files: ['<%= config.app %>/css/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },

            gruntfile: {
                files: ['Gruntfile.js']
            },

            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/**/*.html',
                    '.tmp/css/{,*/}*.css',
                    '<%= config.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },

        connect: {
            options: {
                port: 9100,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                //'Gruntfile.js'
                '<%= config.app %>/js/*/*.js'
            ],
            unitTest: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['<%= config.app %>/modules/*/tests/unit/*.js']
            }
        },

        clean: {
            server: '.tmp'
        },

        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        //Injects all the scripts into the index html file
        injector: {
            options: {
                addRootSlash: false,
                ignorePath: 'app/',
                bowerPrefix: 'bower',
            },
            localDependencies: {
                files: {
                    'app/index.html': [
                        'app/js/**/*.js',
                        'app/css/{,*/}*.css'
                    ]
                }
            },
            bowerDependencies: {
                files: {
                    'app/index.html': ['bower.json'],
                }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            styles: {
                expand: true,
                cwd: '<%= config.app %>/css',
                dest: '.tmp/css/',
                src: '**/*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ]
        },

    });


    grunt.registerTask('serve', [
        'clean:server',
        'injector',
        'concurrent:server',
        'autoprefixer',
        'connect:livereload',
        'watch'
    ]);

};
