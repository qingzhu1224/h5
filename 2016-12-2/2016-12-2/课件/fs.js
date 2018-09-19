//服务

//引入服务器模块
var http=require('http');
//引入读文件取模块
var fs=require('fs');

//创建服务器
var oHttp=http.createServer(function(req,res){
	//req.url 访问路径
	console.log('哈哈哈哈'+req.url);
	
	//去掉(/)斜杠
	fs.readFile(req.url.substring(1),'utf-8',function(err,data){
		if(err){
			res.write('404');
			res.end();	
		}else{
			res.write(data);
			res.end();	
		}
	})
});

//监听服务器端口 
oHttp.listen(8081);