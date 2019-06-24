function fibb(n){
	if(n<1){
		return
	}else if(n==1){
		console.log(n);
	}else{
		var n1=1; var n2=1; var i=1; var sum=0;
		console.log(n1);
		console.log(n2);
		while(i<=n-2){
			sum=n1+n2;
			console.log(sum);
			n1=n2;
			n2=sum;
			i++;
		}
	}
}

fibb(7);