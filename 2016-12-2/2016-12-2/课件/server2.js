//服务

//引入服务器模块
var http=require('http');

//创建服务器
var oHttp=http.createServer(function(req,res){
	//req.url 访问路径
	console.log('哈哈哈哈'+req.url);
	
	if(req.url=='/1.html'){
		res.write('this is a one page');
		res.end();
	}else if(req.url=='/2.html'){
		res.write('this is a two page');
		res.end();
	};
	
});

//监听服务器端口 
oHttp.listen(8081);