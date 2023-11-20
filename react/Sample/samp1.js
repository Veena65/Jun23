import React from "react";
import ReactDOM  from 'react-dom/client';
function Hello(props)
{
    return <h1>"I am form props"</h1>;
}

const container=document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render (<Hello />);

export default Hello;