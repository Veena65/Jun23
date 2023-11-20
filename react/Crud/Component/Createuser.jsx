import { useState } from "react";
import React from "react";
import x from './usenav.module.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Createuser()
{
    let [username,setUsername] = useState("");
    let [company,setCompany] = useState("");
    let [salary,setSalary] = useState("");

    let nameChange = ((e) =>
    {
        setUsername(e.target.value)
    })
    let compChange = ((e) =>
    {
        setCompany(e.target.value)
    })
    let salChange = ((e) =>
    {
        setSalary(e.target.value)
    })

    let a = useNavigate();

    let handleClick = ((e)=>{
        e.preventDefault();
       
        let data={username,company,salary};
        axios.post("http://localhost:3000/user",data)
            .then(()=>console.log("Submitted"))
            .catch(()=>console.log("Not submitted"))

        a('/Users');
    })
    
    return (
        <div className={x.box}>
            <div>
            <h1>User Register Form</h1><hr />
            </div>
            <div className="form">
                <form>
                <div>
                    <label htmlFor="usrname" >User Name</label>
                    <input type="text" onChange={nameChange} value={username} />
                </div>
                <div>
                    <label htmlFor="company" >Company</label>
                    <input type="text" onChange={compChange} value={company} />
                </div>
                <div>
                <label htmlFor="salary" >Salary</label>
                    <input type="text"  onChange={salChange} value={salary} />
                </div>
                <div>
                    <button type="submit" onClick={handleClick} className="cbtn">Create</button>
                </div>
                </form>
            </div>
            
        </div>
    )
}