let outputdata=document.getElementById("cartdetail");
let tit=document.getElementsByClassName("title");
let pri=document.getElementsByClassName("price");
let quant=document.getElementsByClassName("quantity");
let tit2=document.querySelectorAll(".title");
console.log(tit2);
// console.log(tit[0].textContent);
let data="";

function cartdetails()
{
    outputdata.innerHTML=" Your Purchase details:"+" <table>"+data+"</table>";//innerHTML allows html tags

}
// function fn2()
// {
//     let title=document.getElementsByClassName("title");
//     outputdata.innerHTML+=title+"<br>";
// }
let btn=document.getElementsByClassName("btn");
//console.log(btn);
for(let i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",function(){
        if(quant[i].value=="")
            alert("Please Enter Quantity Required.");
        else{
            data+="<tr><td>"+tit[i].textContent+"</td><td>"+pri[i].textContent+"each </td><td>"+quant[i].value+"</td></tr>";
            // console.log(quant[i].textContent);
            quant[i].value="";
        }
    });
}
let desc=document.getElementsByClassName("describe");
let hsbtn=document.getElementsByClassName("hsbtn")
for(let i=0;i<desc.length;i++)
{
    hsbtn[i].addEventListener("click",function()
    {
        if(desc[i].style.display==="none")
        {
            desc[i].style.display="block";
            // desc[i].style.color="blue";
        }
        else
        {
            desc[i].style.display="none";

        }
    })
}
