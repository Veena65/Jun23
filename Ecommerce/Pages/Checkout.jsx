import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Container from './Container'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";
import Footer from '../Component/Footer'

const Checkout = () => {
  return (
    <div>
        <Meta title={"Checkout"}/>
        <Header/>
        <Breadcrumb title="Checkout"/>
        <Container class1="checkout-wrapper">
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
                <h4>Checkout Contact Details</h4>
              </div>
              <div className="col-7">
                <div className="d-flex flex-column">
                    <h6>Kavin Praneetha &nbsp;(kavinpranit@gmail.com)</h6>
                    <h4 className='my-3'>Shipping Address</h4>
                    <select className='form-control my-2'>
                        <option value="">Select Country</option>
                    </select>
                    <div className="d-flex">
                        <input type="text" placeholder='First Name' className='form-control mx-1 my-2' />
                        <input type="text" placeholder='Last Name' className='form-control mx-1 my-2' />
                    </div>
                    <input type="text" placeholder='Address' className='form-control my-2'/>
                    <input type="text" placeholder='Appartment,Suite' className='form-control my-2'/>
                    <div className="d-flex">
                        <input type="text" placeholder='City' className='form-control mx-1 my-2' />
                        <select className='form-control mx-1 my-2' >
                            <option value="">State</option>
                        </select>
                        <input type="text" placeholder='Zipcode' className='form-control mx-1 my-2' />
                    </div>
                    <div className="d-flex justify-content-between my-3">
                        <Link to='/cart' className='text-black fs-5'><IoArrowBack/>&nbsp;Return to Cart</Link>
                        <button>
                            <Link to='/payment' className='text-white'>Continue Payment</Link>
                        </button>
                    </div>
                </div>
              </div>
              <div className="col-5">
                <div className="d-flex align-items-center flex-column ">
                    <div className='check-image border-bottom p-3 w-100'>
                        <img src="images/airpods-max.png" alt="cimg" className='img-fluid'/>
                        <span className='badge bg-secondary text-white rounded-circle'> 1</span> 
                    </div>
                    <div className='border-bottom p-3 w-100'>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h6 className='mb-0'>SubTotal:</h6>
                            <h6 className='mb-0'>&#8377; 5000</h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <h6>Shipping:</h6>
                            <h6>&#8377; 80</h6>
                        </div>
                    </div>
                    <div className='border-bottom p-3 w-100'>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h6>Total:</h6>
                            <h6>&#8377; 5080</h6>
                        </div>
                    </div>
                </div>
              </div>

        </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Checkout