var a=5;
console.log("Value of var a is ",a);
//let a=6;error since a has already been declared-syntax error
var a=10;//var allows redeclaration 
console.log("Value of var a is ",a);
console.log(typeof a);//number datatype
let b='6';//string datatype
console.log("Value of let b is ",b);
console.log(typeof b);
//let b=12;error since a has already been declared-syntax error
b=12.78;
console.log("Value of let b is ",b);
console.log(typeof b);//number datatype
const pi=3.14;//number datatype
console.log("Value of const pi is ",pi);
console.log(typeof pi);
//console.log("Value of var c is ",c); specifies it is undefined
/*pi=3;
console.log("Value of const pi is ",pi);Error-Can't reassign since it holds only fixed values*/
if(45<100)
{
	var c=10;
	let d=20,g=35,h;
	h=d+g;
	console.log("Value of let h is ",h);
	h=c+d;
	console.log("Value of let h is ",h);
	const e=2.71828;//Euler's number
	var a=10;
	let b=20;
	const pi=3.141;
	console.log("Value of var c is ",c);
	console.log("Value of let d is ",d);
	console.log("Value of const e is ",e);
	console.log("Value of var a is ",a);
	console.log("Value of let b is ",b);
	console.log("Value of const pi is ",pi);
}
console.log("Value of var c is ",c);//has global scope
//console.log("Value of let d is ",d); let has only block-level scope
//console.log("Value of const e is ",e); const has only block-level scope
var f=[25,7.04,36.21,91];//defines as an array
console.log("Value of var f is ",f);
console.log(typeof f);//object datatype-array
let emp1={Name:"Hari",Id:1,Age:20};//emp-object name; Name,ID,Age-object's index Hari,1,20 are its values.
console.log(typeof emp1);//object datatype
console.table(emp1);
emp1.Name="Priya";
console.table(emp1);
emp1.Id=54;
console.table(emp1);
