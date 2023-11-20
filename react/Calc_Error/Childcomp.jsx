import React from 'react'

const Childcomp = ({person}) => { //{person} to denote it is an object
  return (
    <div style={{color:'yellowgreen',textAlign:'center',fontSize:'2em'}}>
        <p>{person.fname.toUpperCase()}
        {person.lname.toUpperCase()}</p>
    </div>
  )
}

export default Childcomp
