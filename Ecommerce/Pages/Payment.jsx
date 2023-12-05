import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Container from './Container'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div>
      <Meta title={"Payment"}/>
      <Header/>
      <Breadcrumb title="Your Payment"/>
      <Container class1="payment-wrapper hw2">
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
          <div className="col-8">
            <h4>Billing Address</h4>
            <form action="" >
              <div className="d-flex my-3">
                <div className='w-50 mx-2'>
                  <label htmlFor="Fname" className='form-lable'>First Name</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='w-50 mx-2'>
                  <label htmlFor="Lname" className='form-lable'>Last Name</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
              <div className='m-2'>
                  <label htmlFor="Uname" className='form-lable'>User Name</label>
                  <div className="input-group">
                    <span className='input-group-text'>@</span>
                    <input type="text" className='form-control' />
                  </div>
              </div>
              <div className="m-2">
                <label htmlFor="email" className='form-lable'>Email</label>
                <input type="text" className='form-control' placeholder='ihfaih62uie@gmail.com' />
              </div>
              <div className="m-2">
               <label htmlFor="address" className='form-lable'>Address</label>
                <input type="text" className='form-control' placeholder='1234,abcd street' />
              </div>
              <div className="m-2">
               <label htmlFor="address" className='form-lable'>Address2</label>
                <input type="text" className='form-control' placeholder='Suite,Appartment' />
              </div>
              <div className="d-flex my-2 justify-content-between">
                <div className="mx-2 w-50">
                  <label htmlFor="country">Country</label>
                  <select className='form-select'>
                    <option value="">Choose</option>
                  </select>
                </div>
                <div className="mx-2 w-50">
                  <label htmlFor="state">State</label>
                  <select className='form-select'>
                    <option value="">Choose</option>
                  </select>
                </div>
                <div className="mx-2 w-50">
                  <label htmlFor="state">Zipcode</label>
                  <input type="number" className='form-control' placeholder='123456' />
                </div>
              </div>
              <hr />
              <div className='form-check'>
                <input type="checkbox" className='form-check-input'/>
                <label htmlFor="c1" className='form-check-lable'> Shipping address is the same as my billing address</label>
              </div>
              <div className='form-check'>
                <input type="checkbox" className='form-check-input'/>
                <label htmlFor="c2" className='form-check-lable'> Save this information for next time</label>
              </div>
              <hr />
              <h4 className="my-4">Payment</h4>
              <div className='form-check'>
                <input type="radio" className='form-check-input'/>
                <label htmlFor="r1" className='form-check-lable'> Credit Card</label>
              </div>
              <div className='form-check'>
                <input type="radio" className='form-check-input'/>
                <label htmlFor="r2" className='form-check-lable'> Debit Card</label>
              </div>
              <div className='form-check'>
                <input type="radio" className='form-check-input'/>
                <label htmlFor="r3" className='form-check-lable'> Pay Pal</label>
              </div>
              <div className="d-flex my-3">
                <div className='w-50 mx-2'>
                  <label htmlFor="Cname" className='form-lable'>Name on Card</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='w-50 mx-2'>
                  <label htmlFor="cardno" className='form-lable'>Credit Card Number</label>
                  <input type="number" className='form-control' />
                </div>
              </div>
              <p>Full name as displayed on card</p>
              <div className="d-flex my-3 ">
                <div className='w-30 mx-2'>
                  <label htmlFor="exp" className='form-lable'>Expiration</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='w-30 mx-2'>
                  <label htmlFor="ccv" className='form-lable'>CCV</label>
                  <input type="number" className='form-control' />
                </div>
              </div>
              <hr />
              
            </form>
            <button className='my-4'><Link to='/shipping' className='text-white'>Continue to Shipping</Link></button>  
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-between align-items-center">
              <h3>Cart</h3>
              <span className='badge bg-primary rounded-pill'>3</span>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Product name <br /> <span className='text-muted'>Brief description</span></h6>
                  <h6>&#8377; 500</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center ">
                  <h6>Second product<br /> <span className='text-muted'>Brief description</span></h6>
                  <h6>&#8377; 150</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center ">
                  <h6>Third product <br /> <span className='text-muted'>Brief description</span></h6>
                  <h6>&#8377; 80</h6>
                </div>
              </li>
              <li className="list-group-item bg-light">
                <div className="d-flex justify-content-between align-items-center ">
                  <h6 className='text-success'>Promo Code <br /> <span>Brief description</span></h6>
                  <h6 className='text-success'>- &#8377; 200</h6>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Total (Rupee) </h6>
                  <h6>&#8377; 530</h6>
                </div>
              </li>
            </ul>
            <div className="my-3 border bg-white">
              <div className='input-group p-2'>
                <input type="text" className='form-control' placeholder='Promo code'/>
                <span className='input-group-text bg-secondary text-white'>Redeem</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Payment