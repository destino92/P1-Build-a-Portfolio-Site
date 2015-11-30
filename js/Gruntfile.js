module.exports = function(grunt) {

grunt.initConfig({
  responsive_images: {
  	myTask: {
    	options: {
    	  engine: 'im',
      	  sizes: [{
      	  	name: "small",
          	width: 284,
          	height: 168,
          	suffix: "_x1",
          	quality: 60
      	  },{
      	  	name: "medium",
          	width: 284,
          	height: 168,
          	suffix: "_x1",
          	quality: 60
      	  },{
      	  	name: "large",
          	width: 710,
          	height: 472,
          	suffix: "_x2",
          	quality: 60
      	  }]
    	},
    	files: [{
        	expand: true,
        	src: ['img/**.{jpg,gif,png}'],
        	cwd: 'img/',
        	dest: 'images/'
      }]
    }
  },
});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);
};