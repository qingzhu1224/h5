
var http=require('http');
var fs=require('fs');
var mysql=require('mysql');

var db=mysql.createConnection({
	host:'localhost',
	user:'cris',
	password:'admin123',
	database:'2016-12-2'
});

var oHttp=http.createServer(function(req,res){
	//req 请求
	//res 响应
	//req.url 请求路径
	
	//访问路径
	//1.网址 2.接口 
	//判断
	
	switch(req.url){
		case '/news':
			
			db.query('SELECT * FROM news',function(err,data){
				if(err){
					res.write('404');
					res.end();	
				}else{
					res.write(JSON.stringify(data));
					res.end();		
				}
			});
			
		break;
		default:
			console.log(2);
			fs.readFile(req.url.substring(1),'utf-8',function(err,data){
				if(err){
					res.write('404');
					res.end();	
				}else{
					res.write(data);
					res.end();	
				}
			})
		break;
	}	
});

oHttp.listen(8090);
