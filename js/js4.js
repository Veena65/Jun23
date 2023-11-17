let a=5;
let b='10',c='Hai';
let d=new Date();
console.log("Type of a=",typeof a);
console.log("Type of b=",typeof b);
console.log("Type of d=",typeof d);
console.log("Type conversion to string",a.toString());
let a1=a.toString();
console.log("Type of a1=",typeof a1,a1);
let b1=Number(b);
console.log("Type of b1=",typeof b1,b1);
let c1=Number(c);
console.log("Type of c1=",typeof c1,c1);//value of c1 is NaN - Not a Number
let b2=parseInt(b);
console.log("Type of b2=",typeof b2,b2);
let b3=parseFloat(b);
console.log("Type of b3=",typeof b3,b3);
let d1=Number(d);
console.log("Type of d1=",typeof d1,d1);
let d2=String(Date());
console.log("Type of d2=",typeof d2,d2);
console.log("Boolean true to number",Number(true));
console.log("Boolean false to number",Number(false));




