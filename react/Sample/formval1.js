import React,{useState} from "react";
import './formcss.css';

export default function Formhandling()
{
    const [formdata,setformdata]=useState({
        Person_name:"",
        EmailID :"",
        Password :"",
        CPassword:"",
        Occupation : "",
        Gender :"",
        Language:[]
    });
    const [err,seterror]=useState({});// err is an object because formdata is an object

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

        let isValid=validateInput();

        if(isValid)
        {
            alert("Form Submitted");
        }
        else{
            alert("Invalid form");
        }
        console.log(isValid);
    }

    const validateInput= () =>
    {
        let error={};

        if(formdata.Person_name === "")
            error.Person_name="Person's Name is required";
        else
        {}

        if(formdata.EmailID === "")
            error.EmailID="Email ID is required";
        else
        {
            let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regexp.test(formdata.EmailID))
                error.EmailID="Enter a valid Email ID";
        }

        if(formdata.Password ==="" || formdata.CPassword ==="")
            error.Password="Both Password and Conform Password are required"
        else if(formdata.Password !== formdata.CPassword)
            error.Password="Password and conform password must be same"
        else
        {
            if(formdata.Password.length<6)
                error.Password="Password should be atleast 6 charectors";
        }

        if(formdata.Occupation === "")
            error.Occupation="Select an Occupation"

        if(formdata.Gender === "")
            error.Gender="Select your gender"
        if(formdata.Language.length < 1)
            error.Language="Select atleast 1 language"
    seterror({ ...error })
    return Object.keys(error).length < 1;
        
    }
    return (
        <div className="form">
            <form onSubmit={submithandle}>
                <div className="formgroup">
                    <lable htmlFor="Person_name">Name</lable>
                    <input className="box" name="Person_name" onChange={handlechange} value={formdata.Person_name}></input>
                    <span>{err.Person_name}</span>
                </div>
                <div className="formgroup">
                    <lable htmlFor="EmailID">Email ID</lable>
                    <input className="box" type="text" name="EmailID" onChange={handlechange} value={formdata.EmailID}></input>
                    <span>{err.EmailID}</span>
                </div>
                <div className="formgroup">
                    <lable htmlFor="Password">Password</lable>
                    <input  className="box" type="text" name="Password" onChange={handlechange} value={formdata.Password}></input>
                    {/* <span>{err.Password}</span> */}
                </div>
                <div className="formgroup">
                    <lable htmlFor="CPassword">Conform Password</lable>
                    <input className="box" type="text" name="CPassword" onChange={handlechange} value={formdata.CPassword}></input>
                    <span>{err.Password}</span>
                </div>
                <div className="formgroup">
                    <lable htmlFor="Occupation">Occupation</lable>
                    <select className="box" name="Occupation" onChange={handlechange} value={formdata.Occupation}>
                        <option value=""></option>
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                        <option value="Others">Others</option>
                    </select>
                    <span>{err.Occupation}</span>
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
                <span>{err.Gender}</span>
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
                <span>{err.Language}</span>
                </div>
                <div className="formgroup">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

