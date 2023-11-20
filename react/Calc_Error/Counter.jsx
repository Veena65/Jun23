import React, { useState } from 'react'
import {useErrorBoundary} from 'react-error-boundary'

const Counter = () => {
    const [count,setCount] = useState(0);
    const {showBoundary} = useErrorBoundary();

    let handleChange = () =>{
        try
        {
            if(count<5) setCount(count+1);
            else
                throw new Error("Count Exceeds 5");
        }
        catch(error)
        {
            showBoundary(error);
        }
    };
  return (
    <div>
        <h1>Count value:{count}</h1>
        <button onClick={handleChange}>Click me</button>
    </div>
  )
}

export default Counter