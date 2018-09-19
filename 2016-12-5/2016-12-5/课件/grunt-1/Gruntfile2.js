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
				expand:true,//是否分开
				cwd:'src/css', //来源文件目录
				src:'*.css',//来源文件名
				dest:'dest/css',//目标目录
				ext:'.min.css'//文件后缀名称
			}	
		}
	})
	
	//注册默认任务
	grunt.registerTask('default',['cssmin']);
	
};










