import React from 'react'
import Header from '../Component/Header'
import Meta from '../Component/Meta'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import Container from './Container'
import Color from '../Component/Color'

const Compare = () => {
  return (
    <div>
        <Meta title={"Compare Products"}/>
        <Header/>
        <Breadcrumb title='Compare Products'/>
        <Container class1="hw2 compare-wrapper p-2">
          <div className="row">

            <div className="col-3">
              <div className="comp-product-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                <img src="images/compare/tab.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Honor T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Tablet</h5>
                  <h4 className="price">&#8377;20000</h4>
                  <div className="pd-detail">
                      <div className="d-flex justify-content-between">
                        <h5>Brand : </h5>
                        <p className="mb-0">Shoopzee</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Type : </h5>
                        <p className="mb-0">Tablet</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>SUK : </h5>
                        <p className="mb-0">TB95820</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Available : </h5>
                        <p className="mb-0">InStock</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5 >Colors :</h5>
                        <Color/>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Size: </h5>
                        <p className="mb-0">14" , 16"</p>
                      </div>
                  </div>
                </div>
             </div>
            </div>

            <div className="col-3">
              <div className="comp-product-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                <img src="images/compare/sony.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Sony T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Speaker</h5>
                  <h4 className="price">&#8377;20000</h4>
                  <div className="pd-detail">
                      <div className="d-flex justify-content-between">
                        <h5>Brand : </h5>
                        <p className="mb-0">Shoopzee</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Type : </h5>
                        <p className="mb-0">Speaker</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>SUK : </h5>
                        <p className="mb-0">SP2966</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Available : </h5>
                        <p className="mb-0">InStock</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5 >Colors :</h5>
                        <Color/>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Size: </h5>
                        <p className="mb-0">13" , 10"</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="comp-product-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                <img src="images/compare/watch.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Apple T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Watch</h5>
                  <h4 className="price">&#8377;20000</h4>
                  <div className="pd-detail">
                      <div className="d-flex justify-content-between">
                        <h5>Brand : </h5>
                        <p className="mb-0">Shoopzee</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Type : </h5>
                        <p className="mb-0">Watch</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>SUK : </h5>
                        <p className="mb-0">SW08537</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Available : </h5>
                        <p className="mb-0">InStock</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5 >Colors :</h5>
                        <Color/>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Size: </h5>
                        <p className="mb-0">4" , 6"</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="comp-product-card">
                <button className='btn-close bg-transparent'></button>
                <div className="card-image">
                <img src="images/compare/tab.jpg" alt="cp1" className='img-fluid'/>
                </div>
                <div className="card-content">
                  <h5 className="title">Honor T1 7.0.3 GB Ram 8, 7-inch with Wi-Fi + 3G Tablet</h5>
                  <h4 className="price">&#8377; 20000</h4>
                  <div className="pd-detail">
                      <div className="d-flex justify-content-between">
                        <h5>Brand : </h5>
                        <p className="mb-0">Shoopzee</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Type : </h5>
                        <p className="mb-0">Tablet</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>SUK : </h5>
                        <p className="mb-0">TB95820</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h5>Available : </h5>
                        <p className="mb-0">InStock</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5 >Colors :</h5>
                        <Color/>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <h5>Size: </h5>
                        <p className="mb-0">14" , 16"</p>
                      </div>
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

export default Compare