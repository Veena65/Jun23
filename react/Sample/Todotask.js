import React, { useState } from "react";
// import Todolist from "./Todolist";

export default function Todotask()
{
    const [list,setList]=useState([]);
    const [litem,setLitem] = useState('');

    const addlist=()=>
    {
        if(litem.trim() !== '')
        {
            setList([...list,litem]);
            setLitem('');
        }
    }

    const deleteLitem=(index) =>
    {
        const newlist=[...list];
        newlist.splice(index,1);
        setList(newlist);
    }
   
    return (
        <div>
            <div>
                <h2>To Do List Generator</h2>
                <input type="text" placeholder="Enter a todo list item" value={litem} onChange={(e)=>setLitem(e.target.value)}/>
                <button type="submit" onClick={addlist}>Add to List</button>
                {/* <Todolist list={list} /> */}
            </div>
            <div>
                <ul>
                {list.map((list,index) =>(
                    <li key={index}>{list}
                    <button onClick={()=>deleteLitem(index)}>Delete</button></li>
                ))}
                </ul>
        </div>
        </div>       
    );
}
// src/components/TodoApp.js
// import React, { useState } from 'react';
// import TodoList from './Todolist';

// const TodoApp = () => {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState('');

//   const addTodo = () => {
//     if (task.trim() !== '') {
//       setTodos([...todos, task]);
//       setTask('');
//     }
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Add a new task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={addTodo}>Add</button>
//       <TodoList todos={todos} />
//     </div>
//   );
// };

// export default TodoApp;
