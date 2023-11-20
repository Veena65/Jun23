import React,{useState,useEffect} from 'react';
import './App.css';

function Changecont()
{
    const [content,setContent] = useState('Posts');
    const [item,setItem] = useState([]);
    console.log(item);
   
    useEffect( () =>{
        fetch(`https://jsonplaceholder.typicode.com/${content}`)
        .then(response => response.json())
        .then(json => setItem(json))

        console.log("render");
},[content]);

    return (
    <>
        <div className='App'>
            <button onClick={() => setContent('Posts')}>Posts</button>
            <button onClick={() => setContent('Users')}>Users</button>
            <button onClick={() => setContent('Comments')}>Comments</button>
        </div>

        <h1 className='App'>{content}</h1>
        {item.map(ele => <p>{JSON.stringify(ele)}</p>)}
    </>
    )
}

export default Changecont;