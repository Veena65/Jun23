import React, { useEffect, useState } from 'react'
import x from './usenav.module.css';
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom';

const Edit = () => {

    let [username,setName] = useState("");
    let [company,setComp] = useState("");
    let [salary,setSal] = useState("");
    // names must be same as json file name

    let {uid} = useParams()
    // to get data for a particular id
    let b = useNavigate();

    useEffect(()=>{
            axios.get(`http://localhost:3000/user/${uid}`)
                .then((e)=> {
                    setName(e.data.username);
                    setComp(e.data.company);
                    setSal(e.data.salary);
                    // to get data for a particular user based on id and to display it in form
                })
            },[uid])
            //array dependency so that the particular data gets refreshed
    let updateName=((e) =>{
            setName(e.target.value);
        })
    let updateComp=((e) =>{
            setComp(e.target.value);
        })
    let updateSal=((e) =>{
            setSal(e.target.value);
        })

    let updateDatas = ((e) =>{
        e.preventDefault();
        // to updata data use put()
        let datas={username,company,salary};
        axios.put(`http://localhost:3000/user/${uid}`,datas)
            .then(alert("Data Updated"))
        b('/Users')
    })


  return (

        <div className={x.box}>
            <div>
            <h1>Update Form</h1><hr />
            </div>
            <div className="form">
                <form>
                <div>
                    <label htmlFor="usrname" >User Name</label>
                    <input type="text" value={username} onChange={updateName}/>
                </div>
                <div>
                    <label htmlFor="company" >Company</label>
                    <input type="text" value={company} onChange={updateComp}/>
                </div>
                <div>
                <label htmlFor="salary" >Salary</label>
                    <input type="text" value={salary} onChange={updateSal}/>
                </div>
                <div>
                    <button type="submit" className="cbtn" onClick={updateDatas}>Update</button>
                </div>
                </form>
            </div>
            
        </div>
    
  )
}

export default Edit