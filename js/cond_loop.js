let a=100;
let b=20;
let c=150;
if (a=b) 
{
	console.log("They are not equal");
}
else
{
	console.log("They are equal");
}
if(a<b && b<c){
	console.log("a is small");
}
else if(a>b || b<c){
	console.log("b is small");
}
else{
console.log("c is small");
}
for(var i=0;i<8;i++)
{
	
	if(i==3){
		//continue;skips when i==3;
		break;//exits the loop when i=3
	}
	console.log(i);
}
let d=0;
while(d<4)
{
	console.log(d);
	d++;
}
let e=7;
do
{
	console.log(e);
	e++;
}while(e<5);//do while executes atleast once before checking the condition
let arr=["red","blue","green","yellow"];
for(let color of arr){//for array datatype
	console.log(color);
}
let emp={Name:"Pooja",Age:36,Salary:20000};
for(let person in emp)//for object datatype
{
	console.log(emp[person]);
}

