import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {

    let [input,setInput] = useState("");
    let [datas,setDatas] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${input}`)
            .then((e)=>{
                setDatas(e.data);
            })
    })

    let updateInput = ((e) =>{
      setInput(e.target.value);
    })
    
  return (
    <div>
        <input type="text" value={input} onChange={updateInput}/>

        <h1>ID:{datas.id}</h1>
        <h1>Title:{datas.title}</h1>
    </div>
  )
}

export default Search