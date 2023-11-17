const form=document.querySelector("#form");
const username=document.querySelector("#username");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const cpassword=document.querySelector("#cpassword");
console.log("hello")

form.addEventListener('submit',(e)=>{
    console.log("Validate")
    if(!validateInput()){
        e.preventDefault();

    }
})

function validateInput()
{
    const usrnamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passval=password.value.trim();
    const cpassval=cpassword.value.trim();
    let success=true;

    if(usrnamevalue==="")
    {
        success=false;
        seterror(username,"Username is required");
    }
    else
    {
        setsuccess(username);
    }
    if(emailvalue==="")
    {
        success=false;
        seterror(email,"Email is required");
    }
    else if(!validateemail(emailvalue))
    {
        seterror(email,"Enter a valid email");
    }
    else
    {
        setsuccess(email);
    }
    if(passval==="")
    {
        success=false;
        seterror(password,"Password is required");
    }
    else if(passval.length<8)
    {
        seterror(password,"Password length should not be less than 8 charactor");
    }
    else
    {
        setsuccess(password);
    }
    if(cpassval==="")
    {
        success=false;
        seterror(cpassword,"Conform password is required");
    }
    else if(cpassval!==passval)
    {
        success=false;
        seterror(cpassword,"Please check your conform password");
    }
    else
    {
        setsuccess(cpassword);
    }
    return success;
}

function seterror(element,message)
{
    const inputparent=element.parentElement;
    const errelement=inputparent.querySelector(".errormsg");
    errelement.innerText=message;
    inputparent.classList.add("error");
    inputparent.classList.remove("success");
}

function setsuccess(element)
{
    const inputparent=element.parentElement;
    const errelement=inputparent.querySelector(".errormsg");
    errelement.innerText="";
    inputparent.classList.add("success");
    inputparent.classList.remove("error");
}


const validateemail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
