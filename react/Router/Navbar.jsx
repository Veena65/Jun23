import React, { useState } from 'react'
import {BsCart3} from 'react-icons/bs';
import './style.css'
import { Link} from 'react-router-dom';

const Navbar = () => {

        let [menu,setMenu] = useState('shop');

    let handleChange = (e)=>
    {
        setMenu(e);
    }
  return (
    <div>
        <nav>
            <div id='logo'>
                <img src="/smiley.jpg" alt='aaa'/>
                <h1>Shoppers</h1>
            </div>
            <div id='ll1'>
                <li onClick={()=>{handleChange('shop')}}><Link to='/'>Shop</Link>{menu ==='shop'?<hr></hr>:<></>}</li>
                <li onClick={()=>{handleChange('mens')}}><Link to='mens'>Mens</Link>{menu ==='mens'?<hr></hr>:<></>}</li>
                <li onClick={()=>{handleChange('womens')}}><Link to='womens'>Womens</Link>{menu ==='womens'?<hr></hr>:<></>}</li>
                <li onClick={()=>{handleChange('kids')}}><Link to='kids'>Kids</Link>{menu ==='kids'?<hr></hr>:<></>}</li>
            </div>
            <div id='ll2'>
            <Link to='login'>Login</Link>
            <p><Link to='cart'><BsCart3 size={30} color='green' /><span>0</span></Link></p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar




    // <NavLink to='mens' activeclassName="active">Mens</NavLink>
            // <NavLink to='womens' activeclassName="active">Womens</NavLink>
            // <NavLink to='kids' activeclassName="active">Kids</NavLink>
            // <NavLink to='toys' activeclassName="active">Toys</NavLink>
            // <NavLink to='login' activeclassName="active">Login</NavLink>
         