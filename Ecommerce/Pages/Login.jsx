import React from 'react'
import Meta from '../Component/Meta'
import Breadcrumb from '../Component/Breadcrumb'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import Container from './Container'

const Login = () => {
  return (
    <div>
        <Meta title={"Login"}/>
        <Header/>
        <Breadcrumb title="Login Form"/>
        <Container class1="hw2 p-4">
        <div className='login rounded border'>
            <h1>Login Form</h1>
            <input type="email" placeholder='Email' className='form-control'/>
            <input type='password' placeholder='Password' className='form-control'/>
            <Link to='/forgetpass'>Forget Password ?</Link>
            <div className="d-flex justify-content-between">
              <button>Login</button>&ensp;
              <button><Link to='/signup' className='text-white'>Sign up</Link></button>
            </div>
        </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Login