import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className='py-3'>
        <div className="container-xxl p-2">
          <div className="row d-flex align-items-center">
            <div className="col-7">
              <div>
                <h2 className='mb-0'>
                  <FaPaperPlane size={50} />
                  &nbsp; Sign Up for Newsletter
                </h2>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" placeholder='Your Email Address'  className='form-control'/>
                <span className='input-group-text'>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
                <h4>Contact</h4>
                <div>
                  <address>
                    67D, Sam Tophari Avenue, <br /> 648302 Chennai
                  </address>
                  <p>Mobile:<a href="tel:+66 91452346987" className='m-2 text-white'>+66 91452346987</a></p>
                  <p>Email:<a href="mailto:haridi_santore@yahoo.com" className='m-2 text-white'>haridi_santore@yahoo.com</a></p>
                </div>
                <div className='d-inline'>
                    <a href="https://www.linkedin.com/home"><FaLinkedin size={30} style={{color:'white'}}/></a> &nbsp; &nbsp;
                    <a href="https://www.github.com/"><FaGithub size={30} style={{color:'white'}}/></a>&nbsp; &nbsp;
                    <a href="https://www.youtube.com/"><FaYoutube size={30} style={{color:'white'}}/></a>&nbsp; &nbsp;
                    <a href="https://www.instagram.com/"><FaInstagramSquare size={30} style={{color:'white'}}/></a>
                </div>
            </div>
            <div className="col-3">
              <h4>Information</h4>
              <div className="d-flex flex-column">
                <Link to='/privacy_policy' className='mb-1 py-2 text-white'>Privacy Policy</Link>
                <Link to='/refund_policy' className='mb-1 py-2 text-white'>Refund Policy</Link>
                <Link to='/shipping_policy' className='mb-1 py-2 text-white'>Shipping Policy</Link>
                <Link to='/Terms_Condition' className='mb-1 py-2 text-white'>Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4>Account</h4>
                <div className="d-flex flex-column">
                  <Link to='/about' className='mb-1 py-2 text-white'>About Us</Link>
                  <Link to='/faq' className='mb-1 py-2 text-white'>FAQ</Link>
                  <Link to='/contact' className='mb-1 py-2 text-white'>Contact</Link>
                </div>
            </div>
            <div className="col-2">
              <h4>Quick Links</h4>
              <div className="d-flex flex-column">
                  <Link to='/tv' className='mb-1 py-2 text-white'>TV</Link>
                  <Link to='/speaker' className='mb-1 py-2 text-white'>Speakers</Link>
                  <Link to='/mobile' className='mb-1 py-2 text-white'>Mobile</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                &copy; {new Date().getFullYear()}; Powered By Shopzee
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer