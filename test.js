function process(){
	console.log("start")
	setTimeout(()=>{
		console.log("inside setTimeout")
	},1000)
	for(var i =0;i<100;i++){
		//some task
		console.log("for")
	}
	console.log("end")
}
process()
