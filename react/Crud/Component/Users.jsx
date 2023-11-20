import axios from 'axios'
import React, { useEffect, useState } from 'react'
import x from "./usenav.module.css"
import { Link } from "react-router-dom";

const Users = () => {

    let [users,setUsers] =useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/user").then((e)=>{
            setUsers(e.data)
        })
    })

    let deleteUser= (e) =>
        axios.delete(`http://localhost:3000/user/${e}`)
        
  return (
    <div className={x.disp}>

        {users.map((a)=>{
            return(
                <div >
                    <table className={x.udata}>
                        <tr>
                            <th>ID </th>
                            <th>: {a.id}</th>
                        </tr>
                        <tr>
                            <td>Name </td>
                            <td>: {a.username}</td>
                        </tr>
                        <tr>
                            <td>Company </td>
                            <td>: {a.company}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>: {a.salary}</td>
                        </tr>
                        <tr>
                            
                            <Link to={`/Edit/${a.id}`}><td><button>Edit</button></td></Link>
                            <td><button onClick={()=>deleteUser(a.id)}>Delete</button></td>
                        </tr>
                    </table>

                </div>
            )
        })}

    </div>
  )
}

export default Users