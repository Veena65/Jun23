let arr1=new Array(87,'st',26);//1D array
console.log(arr1);
let arr2=new Array(5,3,'rf',['ij',18,35]);//2D array
console.table(arr2);
console.log(arr2[3][1]);
let a=new Array(10,20,30,40,50);
a.push(60);
console.log(a);
a.push(70,80,90);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift(10);
console.log(a);
a.unshift(0,4,8);
console.log(a);
let b1=a.slice(2);
console.log(b1);
let flower=["Rose","Jasmin","Hibiscus","Lotus","Marigold"];
console.log(flower);
console.log(flower.slice(2));
console.log(flower.slice(2,3));//from index 2 to 3-1
console.log(flower.slice(1,4));//from index 1 to 4-1
console.log(flower);
console.log(flower.splice(2,0,"Dhalia"));
console.log(flower);
console.log(flower.splice(3,1,"Daisy","Moorg"));
console.log(flower);
let col1=["red","green","blue","yellow"];
let col2=["white","gray","black"];
console.log(col1.concat(col2));
console.log(col1);
console.log(col2);
let flora=["Plant","Tree","Shrub","Grass","Creeper"];
let f1=flora.join();
console.log(f1);
let f2=flora.join(" and ");
console.log(f2);
let f3=f2.split(" and ");
console.log(f3);
let f4=f1.split(',');
console.log(f4);