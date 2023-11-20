import React, { useState } from 'react'

const Todolist = () => {
    const [list,setList] = useState([]);
    const [li,setLi] = useState('');

    let handleChange = ((event) => {
        setLi(event.target.value)
    })

    let addlist = (()=>{
        if(li)
        {
            setList([...list ,{ li , id:Date.now()}]);
            setLi('');
        }
    })

    let deleteli = ((key)=>{
        const newlist = list.filter((item)=>item.id !== key);
        setList(newlist);
    })
  return (
    <div>
        <input type="text" value={li} onChange={handleChange}/>
        <button onClick={addlist}>Add</button>
        {
            list.map((item)=>{
                return (
                    <li id={item.id}>
                        {item.li}
                        <button onClick={()=>deleteli(item.id)}>Remove</button>
                    </li>
                )

            })
        }
    </div>
  )
}

export default Todolist