import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import Container from './Container'

const Wishlist = () => {
  return (
    <div>
        <Meta title={"Wishlist"}/>
        <Header/>
        <Breadcrumb title="Favorite Wish List"/>
        <Container class1="wishlist-wrapper">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                  <img src="images/compare/tab.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Honor T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Tablet</h5>
                  <h4 className="price">&#8377;20000</h4>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                  <img src="images/compare/sony.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Sony T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Speaker</h5>
                  <h4 className="price">&#8377;26000</h4>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="wishlist-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                  <img src="images/compare/watch.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Apple T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Watch</h5>
                  <h4 className="price">&#8377;34000</h4>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Wishlist