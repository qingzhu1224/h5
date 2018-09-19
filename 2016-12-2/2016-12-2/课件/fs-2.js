
//引入读取文件模块
var fs=require('fs');

//读取
fs.readFile('demo.html','utf-8',function(err,data){
	if(err){
		console.log('404');
	}else{
		console.log(data);	
	}
});