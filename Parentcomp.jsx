import React from 'react'
import Childcomp from './Childcomp'
import { Errorboundary } from './Errorboundary';


const Parentcomp = () => {
// const data = "Hello";
const person = { fname:'Ram',lname:'kumar'};


  return (
    <div>
        <h1>Parentcomp</h1>
        
         <Childcomp person={person} />
         <Errorboundary>
            <Childcomp person={person} />
         </Errorboundary>
         <Errorboundary>
            <Childcomp person={{}}/>
         </Errorboundary>
         
    </div>
  )
}

export default Parentcomp

// {/* <Childcomp data={data} /> 
//         in child component use props and props.data*/}
//         {/* <Childcomp person={person} />
//         <Childcomp person={} />
//          Due to error in second line the whole page is stopped from execution
//          Avoid it by using class based error boundary or use 3rd party errorboundary by installing it*/}