module.exports = function (grunt) {
    
    // Automatization processes
    grunt.initConfig ({
        // Compiles Sass files
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        // Takes the compiled CSS file givin back the min version
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        // Watch task, when is running compiles the Sass and then creates the min version
        watch: {
            css: {
                files: ['css/*.scss'],
                tasks: ['sass','cssmin'],
            },
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','cssmin','watch']);
};