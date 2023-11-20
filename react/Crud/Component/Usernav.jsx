import React from "react";
import { Link } from "react-router-dom";
import x from './usenav.module.css';


export default function Usernav(){
    return (
        <div className={x.navbar}>
            <Link to='Createuser'><a href="#">Create User</a></Link>
            <Link to='Users'><a href="#">Users</a></Link>
        </div>
    )
    
}