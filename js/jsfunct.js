function positive(number)//normal function
{
	return number>0;
}
console.log(positive(10));
console.log(positive(-3));
function factorial(n)//requcive function - function calls itself
{
	if(n==1)
		return 1;
	return n*factorial(n-1);
}
console.log(factorial(3));
console.log(factorial);
let a=100;
let even=function even(num)//function as expression,variable and fn.name are same
{
	return (num%2)==0;
}
console.log(even(50));
let odd=function odd(num)
{
	return  (num%2)==1;
}
console.log(odd(a));

let l=2,b=5,h=3;
let volume=(l,b,h)=>l*b*h;//arrow function=>
console.log(volume(l,b,h));
let a1=16
let sqrta=(a1)=>Math.sqrt(a1);
console.log(sqrta(a1));

const arr=[2,6,7,1];//arrow fn.
let sumarr=(arr)=>{
	let sum=0;
	for(let x of arr)
		 sum+=x
	return sum;
}
console.log(sumarr(arr));

function sum(...args) {//function rest parameter(...)
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);

let product=arrg(1,2,3,4,5);
function arrg(...args)
{
	let result=1;
	for(let arg of args)   result*=arg;
	return result;
}
console.log(product);

let ar=[11,20,43,24,5];//let sum1=0;
ar.forEach(print);//forEach function
function print(value,index){
//	sum1+=value;
	console.log("Index",index,"Value",value);
	//console.log(sum1);
}
let hi=[76,43,16],sum2=0;
hi.forEach(add);//automatically calls each arguments
function add(item)
{
	sum2+=item;
}
console.log(sum2);

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element.charCodeAt()));

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)
console.log(numbers);
function myFunction(val, index, arr) {
  arr[index] = val * 10;
}

function* indexgen(){//generating index using yield
	let index=1;
	while(index)
		yield index++;
}
const gen=indexgen();
console.log(gen.next().value,"start index");
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);

// console.log(doubles);
// console.log(numbers);

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray);// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

//map function
const emp=[{Name:"Priya",Age:25},{Name:"Hari",Age:20}];
const emp1=emp.map(({Name,Age})=>({[Name]:Age}));
console.log(emp1);
console.log(emp);