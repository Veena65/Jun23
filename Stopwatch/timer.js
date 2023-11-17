let m = document.getElementById('m');
let s = document.getElementById('s');
let ms = document.getElementById('ms');

let min = 0, sec = 0 , milsec = 0;

let Interval;

function start()
{
    // clearInterval(Interval);
    Interval = setInterval(startTimer , 10);
}

function pause()
{
    clearInterval(Interval);
}

function reset()
{
    // clearInterval(Interval);
    min = '00';
    sec = '00';
    milsec = '00';
    m.innerHTML = min;
    s.innerHTML = sec;
    ms.innerHTML = milsec;
}

 function startTimer()
{
    milsec++;
    if(milsec < 9)
        ms.innerHTML = '0' + milsec;
    if(milsec > 9)
        ms.innerHTML = milsec;
    if(milsec == 99)
    {
        sec++;
        s.innerHTML = '0' + sec;
        milsec = 0;
        ms.innerHTML = '0' + milsec;
    }
    if(sec>9)
        s.innerHTML = sec;
    if(sec === 59)
    {
        min++;
        m.innerHTML = '0' + min;
        sec = 0;
        s.innerHTML = '0' + sec;
    }
    if(min > 9)
        m.innerHTML = min;    

}

// function startTimer()
// {
//     sec++;
//     if(sec < 10)
//         s.innerHTML = '0' + sec;
//     if(sec >= 10)
//         s.innerHTML = sec;
//     if(sec === 60)
//     {
//         min++;
//         m.innerHTML = '0' + min;
//         sec = 0;
//         s.innerHTML = '0' + sec;
//     }
//     if(min >= 10)
//         m.innerHTML = min;
// }