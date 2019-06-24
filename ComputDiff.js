function diff(date){
	
	var current =new Date();
	if(date==null){
		var pdate=new Date().getFullYear();
		var firstday= new Date(pdate+'-01-01');
		var h=new Date()-firstday;
		var hh=24*60*60*1000;
		console.log("Diffrence in Days--"+h/hh);
		console.log("Diffrence in Milliseconds--"+h);
	}else{
		var h=new Date()-date;
		var hh=24*60*60*1000;
		console.log("Diffrence in Days--"+h/hh);
		console.log("Diffrence in Milliseconds--"+h);	
	}
}
diff(new Date('2018-01-01'));
