function applychange(){
    let input=document.getElementById("inputstr").value;
    let selectmethod=document.getElementById("selectmethod");
    let change=selectmethod.options[selectmethod.selectedIndex].value;
    let result=changecase(input,change);
    document.getElementById("hi").textContent=`Result:${result}`;
}
function changecase(input,changetype)
{
    switch (changetype)
    {
    case "toUpperCase":
        return input.toUpperCase();
        break;
    case "toLowerCase":
        return input.toLowerCase();
        break;
    case "length":
        return input.length;
        break;
    case "padStart":
        return input.padStart(10,0);
        break;
    case "padEnd":
        return input.padEnd(10,0);
        break;
    case "split":
        return input.split("");
        break;
    default:
        return input;
        break;
    }
}