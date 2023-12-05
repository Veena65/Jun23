import React from 'react'
import { BsSearch } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { LuRefreshCw } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoKeypadOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div>
        <header className='header-top bg-black py-2'>
            <div className="container-xxl">
                <div className='row align-items-center'>
                    <div className="col-6 ">
                     <p className='text-start text-white mb-0'>Free shipping  over <span>&#8377;</span> .10,000 and Free Delivery🏡🚚 </p>
                    </div>
                    <div className="col-6">
                     <p className='text-end text-white '>Hotline :<a className='text-white' href="tel:+66 91452346987">+66 91452346987</a></p>
                    </div>
                </div>
            </div>
        </header>

        <header className='header-middle p-2'>
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h2 className='text-white text-center'>Shopzeee</h2>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input type="text" className='form-control' placeholder='Enter a text... ' />
                            <span className='input-group-text' ><BsSearch /></span>
                            {/* id='button-addon2' for a button for multi btn no id;input-group-text for span */}
                        </div>
                    </div>
                    <div className="col-5 py-2">
                        <div className="header-middle-links d-flex align-items-center justify-content-between ">
                            <div>
                                <Link to='/compare' className='d-flex align-items-center'>
                                    <LuRefreshCw size={40} style={{color:'white'}}/>
                                    <p className="mb-0 text-white">
                                     Compare <br /> Products
                                     </p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/wishlist' className='d-flex align-items-center'>
                                    <CiHeart size={50} style={{color:'white'}}/>
                                    <p className="mb-0 text-white">
                                      Favorite <br /> Wishlist
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/login' className='d-flex'>
                                    <FaRegUser size={40} style={{color:'white'}}/>
                                    <p className="mb-0 text-white ">
                                        Login <br /> My Account
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/cart' className='d-flex'>
                                    <TiShoppingCart size={40} style={{color:'orange'}}/>
                                    <div className='d-flex flex-column'>
                                        <span className="badge bg-white text-dark">1</span>
                                        <p className='mb-0 text-white '><span>&#8377;</span>.500</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className='header-bottom py-2'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className='dropdown'>
                            {/* <div className="d-flex align-items-center"> */}
                                <button className='btn btn-secondary bg-transparent border-0 text-white  dropdown-toggle' type='button' data-bs-toggle="dropdown" 
  aria-expanded="false">
                                    <IoKeypadOutline size={30}/> &nbsp;
                                    <span className='mb-0'>Show Catagories &nbsp;</span>
                                </button>
                            {/* </div> */}
                            <div className="dropdown-menu ">
                                <Link to='/tv' className='dropdown-item'>TV-Appliance</Link>
                                <Link to='/mobile' className="dropdown-item">Mobile</Link>
                                <Link to='/speaker' className="dropdown-item">Speakers</Link>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-9 d-flex align-items-center justify-content-evenly ">
                        <NavLink to='/' className='text-white fs-5'>Home</NavLink>
                        <NavLink to='/about' className='text-white fs-5'>About Us</NavLink>
                        <NavLink to='/blog' className='text-white fs-5'>Blog</NavLink>
                        <NavLink to='/store' className='text-white fs-5'>Our Store</NavLink>
                        <NavLink to='/contact' className='text-white fs-5'>Contact Us</NavLink>
                    </div>
                </div>
            </div>

        </header>
    </div>
  )
}

export default Header