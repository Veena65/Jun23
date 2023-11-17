//Operators in javascript
//Arithmetic operators;
const a=15;
const b='7';
let a3=5;
const c=null;
const d1=true;
const d2=false;
console.log("Value of a is ",a," b is ",b);
let sum=a+b;
console.log("a+b",sum);//concatenates converts number to string
console.log("a-b",a-b);//converts string to number
console.log("a*b",a*b);//string to number
console.log("a**3",a**3);//a**3==>a to the power of 3
console.log("a/b",a/b);//quotient
console.log("a%b",a%b);//remainder
console.log("a+c",a+c);//converts c to 0
console.log("a+d1",a+d1);//d1=1
console.log("a+d2",a+d2);//d2=0
let a1;
a1=++a3;//pre increment
console.log("a1",a1,"a3",a3);
let a2=--a3;//pre decrement
console.log("a2",a2,"a3",a3);
let a4=a3++;//post increment
console.log("a4",a4,"a3",a3);
let a5=a3--;//post decrement
console.log("a5",a5,"a3",a3);
//Assignment operators
let e=5;
console.log("Value of e is ",e);
console.log("e+=2 =>",e+=2);
console.log("e-=2 =>",e-=2);
console.log("e*=2 =>",e*=2);
console.log("e/=2 =>",e/=2);
console.log("e%=2 =>",e%=2);
//Relational operators
let x1=23;
let x2=78;
console.log("Is x1>x2",x1>x2);
console.log("Is x1<x2",x1<x2);
console.log("Is x1>=x2",x1>=x2);
console.log("Is x1<=x2",x1<=x2);
//Math operators
const E=Math.E;
console.log("Value of e=",E);
const pi=Math.PI;
console.log("Value of pi=",pi);
console.log(Math.round(2.54));
console.log(Math.floor(5.98));
console.log(Math.ceil(8.23));
console.log(Math.sqrt(25));
console.log(Math.abs(-87));
console.log(Math.trunc(67.32));
console.log(Math.pow(2,4));
console.log(Math.min(4,73,98,1));
console.log(Math.max(4,73,98,1));
console.log(Math.random());
let r1=Math.floor(Math.random()*100);
console.log(Math.sign(34));
console.log(Math.sign(0));
console.log(Math.sign(-34));
console.log(Math.sin(0));
console.log(Math.cos(0));
//Comparison operators
let g1=25;
let g2='25';
console.log(g1==g2);
console.log(g1!=g2);
console.log(g1===g2);
console.log(g1!==g2);
//logical operators
let h1=9,h2=3;
console.log(h1>10&&h2<5);
console.log(h1>5&&h2>1);
console.log(h1>10||h2<5);
console.log(h1>5||h2==1);
console.log(!(h1==h2));


