import React, { useMemo, useState } from "react";

export default function Memohook()
{
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    let i=0;
    // const Even=(count1) =>
    // {
    //     while(i<1000000000)
    //         i++;
    //     return ( count1 %2 === 0)
    // } it takes time for both count1 and count2.To avoid it use useMemo

    const Even = useMemo(() => (count1)=>
    {
        while(i<1000000000)
            i++;
        return (count1 % 2 === 0)
    },[count1]) ;

    const incre1= () => { setCount1(count1+1)}
    const incre2= () => { setCount2(count2+1)}
    return (
        <div>
            Count1:{count1}
            <button onClick={incre1}>+</button>

            {Even(count1)?"Even":"Odd"}
            
            Count2:{count2}
            <button onClick={incre2}>+</button>
        </div>
    )
}