
function doMove(obj,json,options){
	var options=options||{};
	options.duration=options.duration||700;
	options.easing=options.easing||'ease-out';
	
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseInt(obj.getAttribute(name));
		dis[name]=parseInt(json[name])-start[name];
	}
	
	var count=Math.floor(options.duration/30);
	clearInterval(obj.timer);
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			
			switch(options.easing){
				case 'linear':
					var cur=n/count*dis[name]+start[name];
				break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+Math.pow(a,3)*dis[name];
				break;
				case 'ease-out':
					var a=1-n/count;
					var cur=(1-Math.pow(a,3))*dis[name]+start[name];
				break;
					
			}
			
			obj.setAttribute(name,cur);	
		}
		
		if(n==count){
			//停止运动
			clearInterval(obj.timer);
		}
			
	},30);
	
	
	
		
}