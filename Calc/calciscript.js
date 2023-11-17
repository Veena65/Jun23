let screen=document.getElementById('view');

function display(text)
{
    screen.value += text;
}
function calc()
{
    try{
        screen.value = eval(screen.value);
    }
    catch(err)
    {
        alert("Invalid Expression")
        screen.value=''
    }
}
function deletebtn()
{
    console.log(screen.value);

    screen.value = screen.value.slice(0,-1);
}
function clear()
{
    screen.value = ''
}
function floor()
{
    screen.value = Math.floor(screen.value)
}
function ceil()
{
    screen.value = Math.ceil(screen.value)
}
function round()
{
    screen.value = Math.round(screen.value)
}
function sqroot()
{
    screen.value = Math.sqrt(screen.value)
}
function cbroot()
{
    screen.value = Math.cbrt(screen.value)
}