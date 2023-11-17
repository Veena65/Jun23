let hour = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');
let days = document.getElementById('day');
let wdays = ['Sunday' , 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday' ];
let date = document.getElementById('dd');
let month = document.getElementById('mm');
let year = document.getElementById('yy');

setInterval( timeDisplay , 1000);

function timeDisplay()
{
    let time = new Date();
    let hr = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let day = wdays[time.getDay()];
    let d = time.getDate();
    let m = time.getMonth()+1;//+1 because it returns value from 0 to 11
    let y = time.getFullYear();
    if(hr>12)
    {
        hr = hr-12;
        ampm.innerHTML = 'PM';
    }
    else
    {
        ampm.innerHTML = 'AM';
    }
    hour.innerHTML = paddingZero(hr);
    min.innerHTML = paddingZero(mins);
    sec.innerHTML = paddingZero(secs);
    date.innerHTML = paddingZero(d);
    month.innerHTML = paddingZero(m);
    
    year.innerHTML = y;
    days.innerHTML = day;
}

function paddingZero(num)
{
    return num<10 ? '0'+num : num;
}