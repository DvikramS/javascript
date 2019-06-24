function computeTime(callback){
	var d=new Date()
	callback();
	var d1=new Date()

	return d1-d;
}

 function callBackFunction(){
	 wait(7000);
};


console.log(computeTime(callBackFunction));

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}