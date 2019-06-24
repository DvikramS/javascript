
function sort(a){
	for(var i=0;i<a.length;i++){
		for(var j=0;j<a.length-1;j++){
			if(a[j].age>a[j+1].age){
				swap(a[j],a[j+1]);
			}else if(a[j].age==a[j+1].age){
				if(a[j].name>a[j+1].name){
					swap(a[j],a[j+1]);
				}
			}
		}
	}
	return a;
}

function swap(v, b){
	var temp={
		"name":"",
		"age":""
	};
	temp.name=v.name;
	temp.age=v.age;
	v.name=b.name;
	v.age=b.age;
	b.name=temp.name;
	b.age=temp.age;
	
}


var c=[{'name':'a','age':12},{'name':'c','age':14},{'name':'b','age':10},{'name':'d','age':10}]
var b=sort(c)
for(var k=0;k<b.length;k++){
	console.log(b[k]);
}