//导入模块
module.exports=function(grunt){
	
	//引入插件 js压缩
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//引入css压缩插件
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	//定义任务
	grunt.initConfig({
		uglify:{
			a:{
			  src:'a/index.js',	//源文件地址
			  dest:'dest/index.js' //目标文件地址
			}	
		},
		cssmin:{
			a:{
				src:'src/css/base.css',
				dest:'dest/css/base.min.css'	
			},
			b:{
				src:'src/css/index.css',
				dest:'dest/css/index.min.css'
			}	
		}
	})
	
	//注册默认任务
	grunt.registerTask('default',['cssmin']);
	
};










