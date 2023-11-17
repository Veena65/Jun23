//String datatype

let fn='Welcome';
let ln='All';
console.log(fn.concat(" ",ln));//concatenates with a space
console.log(fn+ln);//concatenates without space
console.log(fn+=ln);//fn will become WelcomeAll
console.log(fn,"",ln);//WelcomeAll All
console.log(fn.length);//10
console.log(fn.toUpperCase());
console.log(fn.toLowerCase());
console.log(fn.indexOf('l'));//location of FIRST apperance of 'l' Index value starts from 0
console.log(fn.lastIndexOf('l'));//location of last appearance of l
console.log(fn.charAt(3));//char at the index 3
console.log(fn.charCodeAt(3));//ASCII value of the char at the index location 3
console.log(fn.substring(0,3));//char from 0 to 3-1;i.e.;from 0 to 2
console.log(fn.substring(20,23));//returns nothing
console.log(fn.substring(-5,2));////considers -5 as 0
console.log(fn.substring(6));//from 6 to end
console.log(fn.substring(-3));//considers -3 as 0
console.log(fn.substr(0,3))//from 0 to 3-1
//console.log(fn.substr(20,23));returns nothing
console.log(fn.substr(-5));//form -5th index to end
console.log(fn.substr(-4,3));//starts from index-4 to 3 counts
console.log(fn.substr(6,5));//start from index 6 to 3 counts
console.log(fn.slice(7,10));//from 7th index to 10-1
console.log(fn.slice(-6));//from -6th index to end
console.log(fn.slice(-4,-3));//form -4 index to -3-1 index
console.log(fn.slice(4,-2));//from 4th index to -2-1 index
let a=fn.replace("All"," Everybody  ");
console.log(a.length);
console.log(fn.includes("All"));//true -All exist
console.log(fn.includes("Everybody"));//false
console.log(a.split(""));//splits each char
console.log(a.split(" "));//splits by white space
console.log(a.split("e"))//splits by e char
var text="     Hello     A   "
console.log(text.length);
console.log(text.trim());//removes space before and after text
var txt=text.trim();
console.log(txt.length);
console.log(a.length);
console.log(a.padStart(25,0));//pads start with 0 if stringlength<25
console.log(a.padEnd(25,'#'));//pads end with
console.log(String.fromCharCode(65,78,62,98));
let b="Hello All"+"Good Morning";
console.log(b);
let c=["Hello Everybody","Good Afternoon"].join('/');
console.log(c);
let d=["Hello Everybody","Good Afternoon"].join(' ');
console.log(d);
let string=`It's amazing`//using back-tics for string
console.log(string);




