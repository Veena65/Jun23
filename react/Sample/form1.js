import React,{useState} from "react";
import './formcss.css';

export default function Formhandling()
{
    const [formdata,setformdata]=useState({
        Person_name:"",
        EmailID :"",
        Occupation : "",
        Gender :"",
        Language:[]
    });


    const handlechange = (event) => {

        console.log(event)
        if (event.target.name === 'Language') {
    
          let copy = { ...formdata }
    
          if (event.target.checked) {
            copy.Language.push(event.target.value)
          } else {
            copy.Language = copy.Language.filter(el => el !== event.target.value)
          }
    
          setformdata(copy)
    
        }
        else
        {
        setformdata(() => ({
            ...formdata,
            [event.target.name]: event.target.value
        }
        ))}
    }

    const submithandle=(event) =>{
        event.preventDefault(); 
        console.log(formdata);
    }
    return (
        <div className="form">
            <form onSubmit={submithandle}>
                <div className="formgroup">
                    <lable htmlFor="Person_name">Name</lable>
                    <input name="Person_name" onChange={handlechange} value={formdata.Person_name}></input>
                    <hr />
                </div>
                <div className="formgroup">
                    <lable htmlFor="EmailID">Email ID</lable>
                    <input type="email" name="EmailID" onChange={handlechange} value={formdata.EmailID}></input>
                    <hr />
                </div>
                <div className="formgroup">
                    <lable htmlFor="Occupation">Occupation</lable>
                    <select name="Occupation" onChange={handlechange} value={formdata.Occupation}>
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                        <option value="Others">Others</option>
                    </select>
                    <hr />
                </div>
                <div className="formgroup">
                <div className="heading">
                    <label htmlFor="Gender">Gender</label>
                </div>
                <div>
                    <input type="radio" name="Gender" value="Male" onChange={handlechange}></input>
                    <label htmlFor="Male">Male</label>
                    {/* Names must be given in lable tags */}
                </div>
                <div>
                    <input type="radio" name="Gender" value="Female" onChange={handlechange}></input>
                    <label htmlFor="Female">Female</label>
                </div>
                <div>
                    <input type="radio" name="Gender" value="Other" onChange={handlechange}></input>
                    <label htmlFor="Other">Other</label>
                </div>
                <hr />
                </div>
                <div className="formgroup">
                <div className="heading">
                    <label htmlFor="Language">Language</label>
                </div>
                <div>
                    <input type="checkbox" name="Language" value="HTML" onChange={handlechange}></input>
                    <label htmlFor="Language">HTML</label>
                    {/* Names must be given in lable tags */}
                </div>
                <div>
                    <input type="checkbox" name="Language" value="CSS" onChange={handlechange}></input>
                    <label htmlFor="Language">CSS</label>
                </div>
                <div>
                    <input type="checkbox" name="Language" value="Javascript" onChange={handlechange}></input>
                    <label htmlFor="Language">Javascript</label>
                </div>
                <hr />
                </div>
                <div>
                    <progress value={null} />{/* value can be between 0 to 1*/}
                </div>
                <div className="formgroup">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

