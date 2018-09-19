
//导入模块
var gulp=require('gulp');


//导入模块js压缩
var uglify_js=require('gulp-uglify');

//导入css模块压缩
var cssMin=require('gulp-minify-css');

//配置任务
gulp.task('uglify',function(){
	
	gulp.src('src/js/*.js').
	pipe(uglify_js()).
	pipe(gulp.dest('dest/js/'));
});

gulp.task('cssmin',function(){
	gulp.src('src/css/*.css').
	pipe(cssMin()).
	pipe(gulp.dest('dest/css/'));
})


//注册默认任务
gulp.task('default',['uglify','cssmin']);
