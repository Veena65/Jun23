import React from 'react'
import Header from '../Component/Header'
import Meta from '../Component/Meta'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import Container from './Container'

const Cart = () => {
  return (
    <div>
        <Meta title={"Shopping Cart"}/>
        <Header/>
        <Breadcrumb title='Shopping Cart'/>
        <Container class1='cart-wrapper '>
            <div className="row">
              <nav>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <Link to='/cart' className='nav-link text-black'>Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/checkout' className='nav-link text-black'>Checkout Info</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/payment' className='nav-link text-black'>Payment</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/shipping' className='nav-link text-black'>Shipping</Link>
                  </li>
                </ul>
              </nav>
              <div className="col-12">
                <h4>Cart Details</h4>
              </div>
              <div className="col-12 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className='cc1'>Product</h5>
                  <h5 className='cc2'>Price</h5>
                  <h5 className='cc3'>Quantity</h5>
                  <h5 className='cc4'>Total</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center justify-content-between cc1">
                    <div className='cart-image '>
                      <img src="images/airpods-max.png" alt="cimg" className='img-fluid' />
                    </div>
                    <div className="cart-cont ">
                      <h4 className='title'>Airpods-Max 856</h4>
                      <h6>Color : Black</h6>
                      <h6>Size : Standard</h6>
                      <h6>Price : &#8377; 5000</h6>
                    </div>
                  </div> 
                  <div className='cc2'> 
                    <h6>&#8377; 5000</h6>
                  </div>
                  <div className='cc3'>
                    <div className="d-flex">
                      <input type="number" min={0} max={10} placeholder='Quantity' className='form-control'/>
                      <MdDelete style={{color:'red'}} size={35}/>
                    </div>
                  </div>
                  <div className="cc4">
                  <h5>&#8377; 5000</h5>
                  </div>
                </div>
              </div>

              <div className="col-12 my-5">
                <div className="d-flex align-items-center justify-content-between px-5">
                  <div>
                    <button><Link className='text-white'>Shopping</Link></button>
                  </div>
                  <div>
                    <h4>SubTotal : &#8377; 5000</h4>
                    <h6>Taxes and shipping calculated at checkout</h6>
                    <button><Link to='/checkout' className='text-white'>Checkout</Link></button>
                  </div>
                </div>

              </div>
            </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Cart