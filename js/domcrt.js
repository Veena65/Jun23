// let divobj=document.getElementsByClassName("divcls");
// console.log(divobj);
// for(let i=0;i<divobj.length;i++)
// {
//     divobj[i].style.fontSize="20px";
//     divobj[i].style.color="red";
// }

let divobj2=document.getElementsByTagName("div");
for(let i=0;i<divobj2.length;i++)
 {
     divobj2[i].style.fontSize="20px";
     divobj2[i].style.color="green";
 }
let h2obj=document.querySelectorAll("h2");
console.log(h2obj);
for(let x of h2obj)
{
    x.style.backgroundColor="yellow";
    x.style.width="100px";
    x.style.color="purple";
}

let imgobj=document.querySelector('img')
console.log(imgobj);
imgobj.setAttribute("width","30%");
imgobj.setAttribute("height","25%");

let nobj=document.createElement('li');
nobj.textContent="List item 4";
let lisobj=document.getElementById("unodlist");
console.log(lisobj);
console.log(nobj);
lisobj.appendChild(nobj); 

document.getElementById("btn").addEventListener('click',()=>{alert("Clicked")})
// function fn1()
// {
//     alert("CLicked");
// }

let robj=document.getElementsByTagName('h3');
console.log(robj);//returns array
robj[0].remove();

let h4obj=document.getElementsByTagName("h4");
//h4obj.textContent="Hello";
h4obj.innerHTML="Hello";//css properties are excluded
//h4obj.innerText="Hello";//css properties are included
console.log(h4obj);
