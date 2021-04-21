module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-keys.json'),
		aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>'
      },
      dist: {
        options: {
          bucket: '<%= aws.AWSBucketName %>'
        },
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: [ 'portfolioBundle.js' ],
            dest: '/'
          }
        ]
      }
    },
		uglify: {
      my_target: {
        files: {
          'public/portfolioBundle.js': ['public/portfolioBundle.js']
        }
      }
    },
		browserify: {
			dev: {
				files: {
					'public/portfolioBundle.js': ['client/index.jsx']
				},
				options: {
					transform: [
						'babelify', 'reactify'
					]
				},
			}
		},
		watch: {
			src: {
				files: ['client/**/*.js', 'client/**/*.jsx'],
				tasks: ['browserify:dev'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-aws-s3');

	grunt.registerTask('default', 'browserify');
	grunt.registerTask('start:dev', ['browserify', 'watch']);
	
	grunt.registerTask('uglifyCompressTheCode', 'uglify');
  grunt.registerTask('bucketDeploy', 'aws_s3:dist' );

	grunt.registerTask('deploy', ['browserify', 'uglifyCompressTheCode', 'bucketDeploy'] );
};
