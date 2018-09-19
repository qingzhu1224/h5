<?php
	//解决老旧语法报错问题
	error_reporting(E_ALL ^ E_DEPRECATED);
	
	//连接数据库
	mysql_connect("localhost","cris","admin123");
	
	//找到对应的数据库
	mysql_select_db("2016-12-1");
	
	//定义sql语句
	$sql="SELECT * FROM list";
	
	//转码
	mysql_query("set names utf8");
	
	//执行sql语句
	$result=mysql_query($sql);
	
	//获取一条数据
	echo '[';
	while($row=mysql_fetch_row($result)){
		
		echo '{"name":"'.$row[0].'","title":"'.$row[1].'"},';
		
	};
	
	echo ']';
	   
?>









