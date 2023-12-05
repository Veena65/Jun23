import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import Container from './Container'

const Signup = () => {
  return (
    <div>
        <Meta title={"sign up"}/>
        <Header/>
        <Breadcrumb title="Sign up"/>
        <Container class1="hw2 py-4">
          <form action="" className='login rounded'>
            <h5>Sign up form</h5>
            <input type="text" placeholder='Name' className='form-control'/>
            <input type="email" placeholder='Email' className='form-control'/>
            <input type="password" placeholder='Password' className='form-control' />
            <input type='tel' placeholder='Contact' className='form-control'/>
            <div className="d-flex justify-content-between">
              <button>Create</button>&ensp;
              <button><Link to='/login' className='text-white'>Cancel</Link></button>
            </div>
        </form>
        </Container>

        <Footer/>
    </div>
  )
}

export default Signup