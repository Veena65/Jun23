import './style.css';
import React, { Component } from 'react'

export class ClassCalc extends Component {
    constructor()
    {
        super();
        this.state = {
            input : ''
        }
    }
        handleSymbol = (val) => {
            if(val === '=')
            {
                try
                {
                    this.setState(
                        { input : eval(this.state.input)}
                    );
                }
                catch(error)
                {
                    // alert("Invalid Expression")
                    this.setState(
                        { input : 'Invalid Exp'}
                    )
                }
            }
            else if(val === 'clr')
            {
                this.setState(
                    { input : ''}
                )
            }
            else if(val === 'del')
            {
                this.setState(
                    {input : this.state.input.slice(0,-1)}
                )
            }
            else
            {
                this.setState(
                    { input : this.state.input + val}
                )
            }
        
    }

  render() {
    return (
        <div id='container'>
        <h1>Calculator App</h1>
        <div id="box">
            <form>
                <input type="text" value={this.state.input} placeholder='0'/>
            </form>
            <div className='row'>
                <button onClick={()=>this.handleSymbol('clr')}>clr</button>
                <button onClick={()=>this.handleSymbol('%')} >%</button>
                <button onClick={()=>this.handleSymbol('/')} >/</button>
                <button onClick={()=>this.handleSymbol('del')}>Del</button>
            </div>
            <div className='row'>
                <button onClick={()=>this.handleSymbol('7')}>7</button>
                <button onClick={()=>this.handleSymbol('8')}>8</button>
                <button onClick={()=>this.handleSymbol('9')}>9</button>
                <button onClick={()=>this.handleSymbol('*')} >*</button>
            </div>
            <div className='row'>
                <button onClick={()=>this.handleSymbol('4')}>4</button>
                <button onClick={()=>this.handleSymbol('5')}>5</button>
                <button onClick={()=>this.handleSymbol('6')}>6</button>
                <button onClick={()=>this.handleSymbol('-')} >-</button>
            </div>
            <div className='row'>
                <button onClick={()=>this.handleSymbol('1')}>1</button>
                <button onClick={()=>this.handleSymbol('2')}>2</button>
                <button onClick={()=>this.handleSymbol('3')}>3</button>
                <button onClick={()=>this.handleSymbol('+')} value={'+'}>+</button>
            </div>
            <div className='row'>
                <button onClick={()=>this.handleSymbol('0')}>0</button>
                <button onClick={()=>this.handleSymbol('00')}>00</button>
                <button onClick={()=>this.handleSymbol('.')}>.</button>
                <button onClick={()=>this.handleSymbol('=')}>=</button>
            </div>
        </div>
    </div>
    )
  }
}

export default ClassCalc