//服务

//引入服务器模块
var http=require('http');

//创建服务器
var oHttp=http.createServer(function(req,res){
	//req.url 访问路径
	console.log('哈哈哈哈'+req.url);
	
	//返回一个值
	res.write('this is a test');
	//说完了
	res.end();
});

//监听服务器端口 
oHttp.listen(8081);