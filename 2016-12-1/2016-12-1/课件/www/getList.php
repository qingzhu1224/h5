<?php
	//解决老旧语法报错问题
		error_reporting(E_ALL ^ E_DEPRECATED);
	//连接数据库
	mysql_connect("localhost","cris","admin123");
	
	//找到对应的数据库
	mysql_select_db("2016-12-1");
	
	//定义sql语句
	$sql="SELECT * FROM list";
	
	//执行sql语句
	$result=mysql_query($sql);
	
	//获取一条数据
	while($row=mysql_fetch_row($result)){
		
		echo var_dump($row);
	};
	   
?>









