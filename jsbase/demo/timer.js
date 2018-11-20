var startTime=+new Date();
var timer;
var fn=function(){
	var endTime=+new Date()
	var offset=endTime-startTime
	if( offset>10000){
		console.log("clearTimeout")
		timer&&clearTimeout(timer)
		return
	}
	console.log(offset)
	timer=setTimeout(fn,1000)
}

fn()