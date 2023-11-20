import React, { useState } from 'react'

const Usestateeg = () => {
    let [count,setCount] = useState(0);
    console.log('rendering');
  return (
    <div>
        <h1>Count : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={()=>setCount(0)}>Set 0</button>


    </div>
  )
}

export default Usestateeg