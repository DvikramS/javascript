function removeDuplicate(a){
	a.sort();
	var newArray =new Array();
	var j=0;
	for(var i=0;i<a.length-1;i++){
		if(a[i]!=a[i+1]){
			newArray[j++]=a[i];
		}
	}
	newArray[j++]=a[a.length-1];
	
	for(var i=0;i<j;i++){
		a[i]=newArray[i];
	}
	return j;
}

var a=['hello','test','abc','ABC','test'];
var l=removeDuplicate(a);
for(var i=0;i<l;i++){
	console.log(a[i]);
}