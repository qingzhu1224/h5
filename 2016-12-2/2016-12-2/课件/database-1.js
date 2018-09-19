//连接数据库

//引入mysql模块
var mysql=require('mysql');

//创建与数据库的连接
var db=mysql.createConnection({
	host:'localhost',
	user:'cris',
	password:'admin123',
	database:'2016-12-2'
});

//执行sql
db.query('SELECT * FROM news',function(err,data){
	if(err){
		console.log('获取失败');	
	}else{
		console.log(data);	
	}
});






