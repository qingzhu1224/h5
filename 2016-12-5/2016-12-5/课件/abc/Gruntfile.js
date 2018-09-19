//导入模块
module.exports=function(grunt){
	
	//引入插件 js压缩
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//引入css压缩插件
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	//引入html压缩插件
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	
	//引入img压缩
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	//引入监听插件
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//定义任务
	grunt.initConfig({
		uglify:{
			a:{
			  src:'src/js/*.js',	//源文件地址
			  dest:'dest/js/index.min.js' //目标文件地址
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
		},
		htmlmin:{
			options:{
				removeComments:true,//删除注释
				collapseWhitespace:true,//压缩空白区域	
			},
			a:{
				expand:true,
				cwd:'src/',
				src:'*.html',
				dest:'dest/',	
			}
		},
		imagemin:{
			a:{
				expand:true,
				cwd:'src/img/',
				src:'*.{jpg,png,gif}',
				dest:'dest/img/',		
			}		
		},
		watch:{
			a:{
				files:['src/js/*.js','src/css/*.css'],
				tasks:['uglify','cssmin']	
			}	
		}
		
	})
	
	//注册默认任务
	grunt.registerTask('default',['uglify','htmlmin','cssmin','imagemin','watch']);
	
};










