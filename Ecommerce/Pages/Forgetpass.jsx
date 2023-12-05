import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer'
import Container from './Container'

const Forgetpass = () => {
  return (
    <div>
        <Meta title={"Forget_Password"}/>
        <Header/>
        <Breadcrumb title="Forget Password"/>
        <Container class1="hw2 p-4">
          <div className="login">
            <h5 className="text-muted">Reset your password</h5>
            <h6 className="text-muted p-3">We will send you an email to reset your password</h6>
            <div className="form-floating">
              <input type="email" placeholder='Email' className='form-control' id='floatinginput'/>
              <label htmlFor="Email">Email ID</label>
            </div>
            <div className="d-flex justify-content-between my-2">
              <button>Send</button>&ensp;
              <button><Link to='/login' className='text-white'>Cancel</Link></button>
            </div>
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Forgetpass