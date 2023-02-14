module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less/"]
                },
                files: {
                    "dist/css/style.css": "less/style.less"
                }
            }
        },
        cssmin: {
            build: {
              src: 'dist/css/style.css',
              dest: 'dist/css/style.min.css'
            },
        },
        concat: {
            options: {
                separator: '\n/*next file*/\n\n'  //this will be put between conc. files
            },
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'js/q.js', 'js/code.js', 'js/q-evaluation.js', 'js/main.js'
                ],
                dest: 'dist/js/main.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/js/main.min.js': ['dist/js/main.js']
                }
            }
        },
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
        },
        clean: {
            build: {
                src: ['dist/css/style.css', 'dist/js/main.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('build', ['less', 'cssmin', 'concat', 'uglify', 'clean']);
};
