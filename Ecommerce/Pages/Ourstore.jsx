import React, { useState } from 'react'
import Header from '../Component/Header'
import Meta from '../Component/Meta'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import Container from './Container'
import Color from '../Component/Color'
import ReactStars from "react-rating-stars-component"
import ProductCard from '../Component/ProductCard'


const Ourstore = () => {

  let [grid,setGrid] = useState(4);
  console.log(grid);
  let ratingChanged = (newRating)=>{
    console.log(newRating)
}
  return (
    <div>
        <Meta title={"Ourstore"}/>
        <Header/>
        <Breadcrumb title='Our Store'/>
        <Container class1="hw2 store-wrapper m-3 p-5">
          <div className="row ">
            <div className="col-3">
              <div className='storecat1 bg-white rounded p-2 my-2'>
                <h5>Shop By Catagory</h5>
                <ul>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camara</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className='storecat2 bg-white rounded p-2 my-2'>
                <h5 className='my-2'>Filter By</h5>
                <div className='my-2'>
                  <h6>Availability</h6>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input'/>
                    <label htmlFor="cb1" className='form-check-lable'> In Stock (5)</label>
                  </div>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input'/>
                    <label htmlFor="cb2" className='form-check-lable'> Out of Stock(0)</label>
                  </div>
                </div>
                <div className="my-2">
                  <h6>Price</h6>
                  <div className='d-flex '>
                    <div class="form-floating m-1">
                      <input type="number" class="form-control " id="floatingInput" placeholder='from'/>
                      <label for="floatingInput">From</label>
                    </div>
                    <div class="form-floating m-1">
                      <input type="number" class="form-control " id="floatingInput" placeholder='to'/>
                      <label for="floatingInput">To</label>
                    </div>
                  </div>
                  <h6>Colors</h6>
                  <Color/>
                  <h6>Size</h6>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input'/>
                    <label htmlFor="s1" className='form-check-lable'> S (1)</label>
                  </div>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input'/>
                    <label htmlFor="s2" className='form-check-lable'> M (2)</label>
                  </div>
                  <div className='form-check'>
                    <input type="checkbox" className='form-check-input'/>
                    <label htmlFor="s3" className='form-check-lable'> L (2)</label>
                  </div>
                </div>
              </div>
              <div className='storecat2 bg-white rounded p-2 my-2'>
                <h5>Product Tags</h5>
                <div className="d-flex flex-wrap"> 
                  <p className="cat-btn">Laptops</p>
                  <p className="cat-btn">Speakers</p>
                  <p className="cat-btn">Headphones</p>
                  <p className="cat-btn">Smart Watch</p>
                  <p className="cat-btn">Headphone</p>
                  <p className="cat-btn">Smart TV</p>
                </div>
                <h5 className='my-3'>Random Products</h5>
                <div className="d-flex justify-content-between align-items-center border-bottom ">
                  <img src="images/compare/watch.jpg" alt="rpimg" className='img-fluid rpimg' />
                  <div>
                    <h6> Kids headphones bulk 10 pack multicolored for students</h6>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        value={3}
                        color='lightgrey'
                      />
                    <h6 className="my-3 text-black">&#8377; 7000</h6>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <img src="images/compare/watch.jpg" alt="rpimg" className='img-fluid rpimg' />
                  <div>
                    <h6> Kids headphones bulk 10 pack multicolored for students</h6>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={20}
                        activeColor="#ffd700"
                        value={3}
                        color='lightgrey'
                      />
                    <h6 className="my-3 text-black">&#8377; 7000</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex justify-content-between bg-white p-3 my-2">
                <div className='d-flex'>
                  <h6>Sort By:</h6>
                  <select className='form-select'>
                    <option value="">Select..</option>
                    <option value="alphabetic">Alphabetic A to Z</option>
                    <option value="lowtohigh">Price, Low to High</option>
                    <option value="hightolow">Price, High to Low</option>
                  </select>
                </div>
                <div className="d-flex align-items-center">
                  <h6 >21 Products</h6>
                  <button onClick={()=>{setGrid(3)}} className='gridbtn'>3</button>
                  <button onClick={()=>{setGrid(4)}} className='gridbtn'>4</button>
                  <button onClick={()=>{setGrid(6)}} className='gridbtn'>6</button>
                  <button onClick={()=>{setGrid(12)}} className='gridbtn'>12</button>
                </div>
              </div>
              <div className="bg-white p-2 my-4">
                <div className="d-flex flex-wrap  ">
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Ourstore