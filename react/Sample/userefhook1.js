import { useEffect,useRef, useState } from "react";

export default function Component1({ value})
{
    const [initvalue,setinitvalue]=useState('');
    const prev_value=useRef();

    useEffect(() => {
        prev_value.current = initvalue;
    },[initvalue]);

    function handlechange(e)
    {
        setinitvalue(e.target.value);
    }
    
    return (
        <div>
            <input type="text" value={initvalue} onChange={handlechange }></input>
            <p>Current Value: {initvalue}</p>
            <p>Previous value : {prev_value.current}</p>
        </div>
    );
}