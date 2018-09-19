
//导入模块
var gulp=require('gulp');


//导入模块js压缩
var uglify_js=require('gulp-uglify');

//配置任务
gulp.task('abc',function(){
	
	gulp.src('src/js/*.js').
	pipe(uglify_js()).
	pipe(gulp.dest('dest/js/'));	
});


//注册默认任务
gulp.task('default',['uglify']);
