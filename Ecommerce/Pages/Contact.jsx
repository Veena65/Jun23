import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import Container from './Container'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
        <Meta title={"Contact"}/>
        <Header/>
        <Breadcrumb title="Contact Us"/>
        <Container class1="contact-wrapper">
          <div className="row mx-4">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31091.262623495833!2d80.24445732560677!3d13.073319885154993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1701076972029!5m2!1sen!2sin" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="row mx-4 p-2">
            <div className="col-6">
              <h4>Contact</h4>
              <form action="">
                <input type="text"  className='form-control ' placeholder='Name'/><br />
                <input type="email"  className='form-control' placeholder='Email'/><br />
                <input type="number"  className='form-control ' placeholder='Mobile No.'/><br />
                <textarea placeholder='Message' className='form-control w-100 ' rows={10} ></textarea><br />
                <button>Submit</button>
              </form>
            </div>
            <div className="col-6 p-3">
              <h4>Get In Touch With Us</h4>
              <div className="d-flex align-items-center">
                <FaHome size={30}/>
                <address className='m-2'>
                    67D, Sam Tophari Avenue, Chennai -  648302.
                </address>                 
              </div>
              <div className="d-flex align-items-center">
                <FaPhoneAlt size={30}/>
                <a href="tel:+66 91452346987" className='m-2 text-black'>+66 91452346987</a>
              </div>
              <div className="d-flex align-items-center">
                <FaEnvelope size={30}/>
                <a href="mailto:haridi_santore@yahoo.com" className='m-2 text-black'>haridi_santore@yahoo.com</a>
              </div>
              <div className="d-flex align-items-center">
                <BsInfoCircleFill size={30}/>
                <p className="m-2">Monday - Friday : 10 am to 8 pm</p>
              </div>
            </div>
          </div>          
        
        </Container>
        <Footer/>
    </div>
  )
}

export default Contact