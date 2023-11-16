import React, { useState } from 'react'
import './style.css';

const Calcdemo = () => {

    let [inputval,setInputval] = useState('');

    function handleChange(e)
    {
        setInputval(inputval.concat(e.target.value));
        console.log(e.target.value);
    }
    function handleSymbol(e)
    {
        setInputval(inputval.concat(e));
        console.log(e);
    }

    function calculate()
    {
        try{
            setInputval(eval(inputval).toString());
            // toString so as to perform operations further with result
        }
        catch(error)
        {
            alert("Invalid Expression")
            setInputval('');
        }
    }

    function cleardata()
    {
        setInputval('');
    }

    function deletedata()
    {
        setInputval(inputval.slice(0,-1))
    }
  return (
    <div id='container'>
        <h1>Calculator App</h1>
        <div id="box">
            <form>
                <input type="text" value={inputval} placeholder='0'/>
            </form>
            <div className='row'>
                <button onClick={cleardata}>clr</button>
                <button onClick={()=>handleSymbol('%')} >%</button>
                <button onClick={()=>handleSymbol('/')} >/</button>
                <button onClick={deletedata}>Del</button>
            </div>
            <div className='row'>
                <button onClick={handleChange} value={'7'}>7</button>
                <button onClick={handleChange} value={'8'}>8</button>
                <button onClick={handleChange} value={'9'}>9</button>
                <button onClick={()=>handleSymbol('*')} >*</button>
            </div>
            <div className='row'>
                <button onClick={handleChange} value={'4'}>4</button>
                <button onClick={handleChange} value={'5'}>5</button>
                <button onClick={handleChange} value={'6'}>6</button>
                <button onClick={()=>handleSymbol('-')} >-</button>
            </div>
            <div className='row'>
                <button onClick={handleChange} value={'1'}>1</button>
                <button onClick={handleChange} value={'2'}>2</button>
                <button onClick={handleChange} value={'3'}>3</button>
                <button onClick={()=>handleSymbol('+')} value={'+'}>+</button>
            </div>
            <div className='row'>
                <button onClick={handleChange} value={'0'}>0</button>
                <button onClick={handleChange} value={'00'}>00</button>
                <button onClick={handleChange} value={'.'}>.</button>
                <button onClick={calculate}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calcdemo