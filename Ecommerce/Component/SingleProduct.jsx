import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'
import Container from '../Pages/Container'
import ReactStars from "react-rating-stars-component"
import Color from './Color'
import { Link } from 'react-router-dom'
import { IoGitCompareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import ProductCard from './ProductCard'



const SingleProduct = () => {
  let ratingChanged = (newRating)=>{
    console.log(newRating)
  }
  return (
    <div>
        <Meta title={"Product"}/>
        <Header/>
        <Breadcrumb title="Product1"/>
        <Container class1="hw2 p-5 ">
          <div className="row">
            <div className="col-6 bg-white prod-left pb-5">
              <img src="/images/watch.jpg" alt="prodimg" className='p-3 img-fluid img-thumbnail my-4'/>
              <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-around">
                  <img src="/images/watch.jpg" alt="prodimg" className='p-4 img-fluid border pimg2'/>
                  <img src="/images/watch.jpg" alt="prodimg" className='p-4 img-fluid border pimg2'/>
                  <img src="/images/watch.jpg" alt="prodimg" className='p-4 img-fluid border pimg2'/>
                  <img src="/images/watch.jpg" alt="prodimg" className='p-4 img-fluid border pimg2'/>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-white d-flex flex-column p-3">
                <h2 className='border-bottom py-3'>Day Date and calendar watches, calibre, watches of Switzerland UK</h2>
                <h3 className='border-bottom py-3'>&#8377; 21000</h3>
                <div className='border-bottom py-3'>
                  <div className='d-flex align-items-center'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        color='lightgrey'
                    />
                    <h6 className='mb-0'>( 2 Reviews )</h6>
                  </div>
                  <h6 className='text-muted'>Write a Review</h6>
                </div>
                <div className='py-3'>
                  <h6>Type: <span className='text-muted'>Watch</span></h6>
                  <h6>Brand: <span className='text-muted'>Shopzee</span></h6>
                  <h6>Category: <span className='text-muted'>Watch</span></h6>
                  <h6>Tags: <span className='text-muted'>Watch</span></h6>
                  <h6>Availability: <span className='text-muted'>In Stock</span></h6>
                  <div>
                    <h6>Size:</h6>
                    <span className="badge border bg-white text-black mx-3 ">S</span>
                    <span className="badge border bg-white text-black mx-3">M</span>
                    <span className="badge border bg-white text-black mx-3">L</span>
                    <span className="badge border bg-white text-black mx-3">XL</span>
                  </div>
                  <div className="d-flex my-3">
                    <h6>Colors:&ensp;</h6>
                    <Color/>
                  </div>
                  <div className="d-flex my-3 align-items-center">
                    <label htmlFor="quantity">Quantity: &nbsp;</label>
                    <input type="number" className='form-control w-50'/>
                  </div>
                  <div className="d-flex my-3 align-items-center justify-content-evenly">
                    <button>Add To Cart</button>
                    <button>Buy it Now</button>
                  </div>
                  <div className='d-flex my-3'>
                    <Link to='/compare' className='text-muted'>
                      <IoGitCompareOutline size={30}/>
                      Add to Compare
                    </Link>
                    &ensp; &ensp;
                    <Link to='/wishlist' className='text-muted'>
                      <CiHeart size={30}/>
                      Add To Wishlist
                    </Link>
                  </div>
                </div>
                <h6>Shipping & returns</h6>
                <h6 className="text-muted">
                  Free shipping and returns available on orders! We ship all US domestic orders within 
                  <b> 5 - 10 days!</b>
                </h6>
                <h6>
                  Copy Product Link : &ensp;
                  <span className='text-muted'>Copy Product Link</span>
                </h6>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="hw2 py-5">
          <div className="row">
            <div className="col-12">
              <h3>Description</h3>
              <p className='text-muted bg-white p-4'>
              Watches have evolved to play a pivotal role in enhancing one's style and elegance, often equaling their fundamental utility. 
              Watches have even become a means of assessing an individual's fashion sense.
              </p>
            </div>
          </div>
        </Container>

        <Container class1="hw2 py-5">
          <div className="row">
            <div className="col-12">
              <h3>Review</h3>
              <div className="p-4 bg-white">
                <h4>Customer Reviews</h4>
                <div className='d-flex justify-content-between border-bottom'>
                  <div className='d-flex justify-content-between align-items-center mb-3'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        color='lightgrey'
                    />
                    <h6 className='mb-0'>( 2 Reviews )</h6>
                  </div>
                  <h6 className="text-underline">Write a Review</h6>
                </div>
                <div className='my-3 border-bottom'>
                  <h6 className="text-muted">Write a Review</h6>
                  <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        color='lightgrey'
                    />
                    <textarea className='form-control' cols="30" rows="10" placeholder='Message'></textarea>
                    <div className='text-end m-3'>
                      <button>Submit a Review</button>
                    </div>
                </div>
                <div className='my-3 '>
                  <div className="d-flex align-items-center">
                    <h6 className='mb-0'>Naveep &ensp; </h6>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        color='lightgrey'
                    />
                  </div>
                  <p className='text-muted'>
                    An excellent product that is much more compactable. 
                    It is durable, water-resistant, efficent and comes in multiple colors of metal. 
                    A perfect watch for valuable hands.
                  </p>
                 
                </div>


              </div>
            </div>
          </div>
        </Container>

        <Container class1="Product-wrapper hw2 my-4 py-3">
          <div className="row">
            <div className="col-12">
              <h4>You may like</h4>
            </div>
          </div>
          <div className="row ">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Container>

        <Footer/>
    </div>
  )
}

export default SingleProduct