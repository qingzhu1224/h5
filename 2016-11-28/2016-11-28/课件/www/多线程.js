this.onmessage=function(ev){
	//ev.data
	console.log(ev.data);
	this.postMessage(feibo(ev.data));
};

function feibo(n){
	if(n==1||n==2){
		return 1;
	}else{
		return feibo(n-1)+feibo(n-2);
	}
}