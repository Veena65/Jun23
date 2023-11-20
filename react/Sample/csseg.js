import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  const myStyle = {
   s1:{ 
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
    
   },
   s2:{
    color: "white",
    backgroundColor: "Blue",
    padding: "10px",
    fontFamily: "Serif"
   }
  };
  return (
    <>
      <h1 style={myStyle.s1}>Hello Style!</h1>
      <p style={myStyle.s2}>Add a little style!</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

export default Header;