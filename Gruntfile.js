module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
      useminPrepare: 'grunt-usemin'
  })
  grunt.initConfig({
      imagemin: {
          dynamic: {
              files: [{
                  expand: true,
                  cwd: './',
                  src: 'img/*.{png,jpg}',
                  dest: 'dist/'
              }]
          }
      },
      copy: {
          html: {
              files: [{
                  expand: true,
                  dot: true,
                  cwd: './', //current working directory
                  src: ['*.html'],
                  dest: 'dist'
              }]
          },
      },
      clean: {
          build: {
              src: ['dist/'] //clean the distribution folder
          }
      },
      filerev: {
          options: {
              encoding: 'utf8',
              algorithm: 'md5',
              length: 15
          },
          files: {
              src: ['dist/Css/*.css', 'dist/Js/*.js']
          }
      },
      concat: {
          options: {
              separator: ';'
          },
          dist: {}
      },
      useminPrepare: {
          foo: {
              dest: 'dist',
              src: ['index.html']
          },
          options: {
              flow: {
                  steps: {
                      css: ['cssmin'],
                      js: ['uglify']
                  },
                  post: {
                      css: [{
                          name: 'cssmin',
                          createConfig: function (context, block) {
                              var generated = context.options.generated;
                              generated.options = {
                                  keepSpecialComments: 0,
                                  rebase: false
                              }

                          }
                      }]
                  }
              }

          }
      },
      usemin: {
          html: ['dist/index.html'],
          options: {
              assetsDir: ['dist', './Css', './Js']
          }
      },
  })
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.registerTask('img:compress', ['imagemin']);
  grunt.registerTask('build', [
      'clean', //Borramos el contenido de dist
      'copy', //Copiamos los archivos html a dist
      'imagemin', //Optimizamos imagenes y las copiamos a dist
      'useminPrepare', //Preparamos la configuracion de usemin
      'concat',
      'cssmin',
      'uglify',
      'usemin' //Reemplazamos las referencias por los archivos generados por filerev
  ]);
}
