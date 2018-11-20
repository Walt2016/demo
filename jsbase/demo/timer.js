var startTime=+new Date();
var timer;
var fn=function(){
	var endTime=+new Date()
	var interval=endTime-startTime
	if( interval>5000){
		console.log("clearTimeout")
		timer&&clearTimeout(timer)
		return
	}
	console.log(interval)
	timer=setTimeout(fn,1000)
}

fn()

