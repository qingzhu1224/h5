<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
<style>
	.bg_ccc{ background:#ccc;}
	.bg_666{ background:pink;}
</style>
</head>

<body>
	<ul>
    	<?php 
			$arr=array('aaa','bbb','ccc','ddd','eee','fff');
			
			for($i=0;$i<count($arr);$i++){
				if($i%2){
					echo '<li class="bg_ccc">'.$arr[$i].'</li>';	
				}else{
					echo '<li class="bg_666">'.$arr[$i].'</li>';		
				}
				
			}
			
		?>
    </ul>
</body>
</html>










