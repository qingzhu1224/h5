<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
	<?php
		//解决老旧语法报错问题
		error_reporting(E_ALL ^ E_DEPRECATED);
		
		//开启数据库权限(密码不能为空)
		mysql_connect("localhost","cris","admin123");
		
		//连接数据库
		mysql_select_db("2016-12-1");
				
		//sql 语句
		$sql="SELECT * FROM list";
		
		//执行sql语句
		$result=mysql_query($sql);
		
		//获取一条数据
		$row=mysql_fetch_row($result);
		
		$row2=mysql_fetch_row($result);
	
		echo var_dump($row).'<br />'.var_dump($row2);
		
		
    ?>
</body>
</html>









