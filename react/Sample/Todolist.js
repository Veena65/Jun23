import React from "react";

const Todolist = ({list}) =>
{
    return (
        <ul>
            {list.map((list,index) =>(
                <li key={index}>{list}
                <button onClick={()=>deleteLitem(index)}>Delete</button></li>
            ))}
        </ul>
    )
}

export default Todolist;
// import React from 'react';

// const TodoList = ({ todos }) => {
//   return (
//     <ul>
//       {todos.map((todo, index) => (
//         <li key={index}>{todo}</li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;