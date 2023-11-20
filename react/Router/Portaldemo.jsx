import React from 'react'
import ReactDOM  from 'react-dom'

const Portaldemo = () => {

  return ReactDOM.createPortal(
    <div>
        <h1>Portal Demo</h1>
        <p>A div element created using portal to display data in 'port id' of index.html. 
            This renders data in port even thought it is given in app.js. 
            This takes 2 arguements jsx code and place to render the data.
            It uses ReactDOM.createPortal to create a portal. </p>
    </div>
    ,
    document.getElementById('port')
  )
}

export default Portaldemo