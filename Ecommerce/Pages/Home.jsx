import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import BlogCard from '../Component/BlogCard'
import Marquee from 'react-fast-marquee'
import Container from './Container'
import SpecialProd from '../Component/SpecialProd'
import ProductCard from '../Component/ProductCard'

const Home = () => {
  return (
    <div>
        <Meta title={"Home"}/>
        <Header/>
        <Container class1="Home-wrapper1 my-4">
          <div className="row">
            <div className="col-6">
              <div className="carousel-wrapper position-relative" >
                <div className="carousel slide" id='home-carousel'>
                  <div className="carousel-inner">
                    <div className="carousel-item  active">
                      <img src="images/carousel/c1.jpg" alt="c1img"  className='d-block w-100 rounded'/>
                    </div>
                    <div className="carousel-item">
                      <img src="images/carousel/c2.jpg" alt="c2img" class="d-block w-100 rounded"/>
                    </div>
                  </div>
                  <button className='carousel-control-prev bg-transparent' type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className='carousel-control-next bg-transparent' type='button' data-bs-target="#home-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                  <div className="carousel-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From &#8377;9.999 or &#8377;41.62/mo</p>                  
                    &emsp;&emsp;<button>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-3">
              <div className="d-flex my-2">
                <div className="sb-wrapper position-relative">
                  <img src="images/smbanner/sb1.jpg" alt="sb1" className='img-fluid rounded'/>
                </div>
                <div className="sb-wrapper-content position-absolute p-3">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Mac Book Pro.</h5>
                  <p>From &#8377;1559.999 <br />or &#8377;78.62/mo</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="sb-wrapper position-relative ">
                  <img src="images/smbanner/sb3.jpg" alt="sb3" className='img-fluid rounded'/>
                </div>
                <div className="sb-wrapper-content position-absolute p-3">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From &#8377;1559.999 <br />or &#8377;78.62/mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="d-flex my-2">
                <div className="sb-wrapper position-relative ">
                  <img src="images/smbanner/sb2.jpg" alt="sb2" className='img-fluid rounded'/>
                </div>
                <div className="sb-wrapper-content position-absolute p-3">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Smartwatch 7</h5>
                  <p>From &#8377;1559.999 <br />or &#8377;78.62/mo</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="sb-wrapper position-relative ">
                  <img src="images/smbanner/sb4.jpg" alt="sb24" className='img-fluid rounded'/>
                </div>
                <div className="sb-wrapper-content position-absolute p-3">
                  <h4>New Arrival</h4>
                  <h5>Buy AirPod</h5>
                  <p>From &#8377;1459.999 <br />or &#8377;41.62/mo</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="hw2 my-4 py-3">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-evenly">
                <div className="d-flex align-items-center flex-column">
                  <img src="images/service/s1.png" alt="s1" />
                  <h6 className='fs-5 mt-2'>Free Shipping</h6>
                  <p className='mb-0'>From all orders over &#8377;5000</p>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="images/service/s2.png" alt="s2" />
                  <h6 className='fs-5 mt-2'>Daily Surprise Offers</h6>
                  <p className='mb-0'>Save upto 25% Off</p>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="images/service/s3.png" alt="s3" />
                  <h6 className='fs-5 mt-2'>Support 24/7</h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="images/service/s4.png" alt="s4" />
                  <h6 className='fs-5 mt-2'>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory default prices</p>
                </div>
                <div className="d-flex align-items-center flex-column">
                  <img src="images/service/s5.png" alt="s5" />
                  <h6 className='fs-5 mt-2'>Secure Payments</h6>
                  <p className='mb-0'>100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="hw2 py-3">
          <div className="row">
            <div className="col-12">
              <div className="catagory d-flex flex-wrap align-items-center justify-content-between">
                
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c2.jpg" alt="c2" className='img-fluid w-30'/>
                  <div className='mx-2'>
                  <h5>Cameras & Videos</h5>
                  <h6>18 items</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c3.jpg" alt="c3" className='img-fluid w-30'/>
                  <div className='mx-2'>
                    <h5>Headphones & Music</h5>
                    <h6>10 items</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c4.jpg" alt="c4" className='img-fluid w-30'/>
                  <div>
                    <h5>Home Appliances</h5>
                    <h6>30 items</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c1.jpg" alt="c1" className='img-fluid w-30'/>
                  <div className='mx-2'>
                    <h5>Accessories</h5>
                    <h6>20 items</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c5.jpg" alt="c5" className='img-fluid w-30'/>
                  <div className='mx-2'>
                    <h5>Laptops & Tablets</h5>
                    <h6>14 items</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c7.jpg" alt="c7" className='img-fluid swatch'/>
                  <div className='mx-2'>
                    <h5>Smart Watches</h5>
                    <h6>17 items</h6>
                  </div>
                  
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c6.jpg" alt="c6" className='img-fluid mtab'/>
                  <div className='mx-2'>
                    <h5>Mobiles & Tabs</h5>
                    <h6>12 items</h6>
                  </div>
                </div>
                <div className='d-flex align-items-center'>
                  <img src="images/catagory/c8.jpg" alt="c8" className='img-fluid w-30'/>
                  <div className='mx-2'>
                    <h5>Smart TVs</h5>
                    <h6>10 items</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container class1="Product-wrapper hw2 py-3">
          <div className="row">
            <div className="col-12">
              <h4>Our Products</h4>
            </div>
          </div>
          <div className="row">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Container>

        <Container class1="Famous-wrapper hw2 my-4 py-4">
          <div className="row">
            <h4 className="section-heading">Famous Products</h4>
            <div className="col-3 ">
              <div className="m-2 bg-white rounded p-3">
                <img src="images/famous/f1.jpg" alt="f1" className='img-fluid fimg'/>
                <h5>Big screen</h5>
                <h6>Smart Watches Series 7</h6>
                <p>From &#8377;3990 or &#8377;160.64/mo. for 24 mo.</p>
              </div>
            </div>
            <div className="col-3 ">
              <div className="m-2 bg-white rounded p-3">
                <img src="images/famous/f2.jpg" alt="f2" className='img-fluid fimg'/>
                <h5 className='text-dark'>Home Speaker.</h5>
                <h6 className='text-dark'>Room filling sound.</h6>
                <p className='text-dark'>From &#8377;19999 or &#8377;1260.64/mo. for 24 mo.</p>
              </div>
            </div>
            <div className="col-3">
            <div className="m-2 bg-white rounded p-3">
              <img src="images/famous/f3.jpg" alt="f3" className='img-fluid fimg'/>
              <h5>Studio Display</h5>
              <h6>600 nits of brightness </h6>
              <p>27-inch 5k retina display.From &#8377;19999 or &#8377;1260.64/mo. for 24 mo.</p>

            </div>
            </div>
            <div className="col-3">
            <div className="m-2 bg-white rounded p-3">
              <img src="images/famous/f4.jpg" alt="f4" className='img-fluid fimg'/>
              <h5>Iphone Max Pro.</h5>
              <h6>Iphone  max pro </h6>
              <p>From &#8377;19999 or &#8377;1260.64/mo. for 24 mo.</p>
            </div>
          </div>
          </div>
        </Container>


        <Container class1="Special-product-wrapper hw2 my-4 py-3">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h4>Our Special Product</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <SpecialProd/>
            <SpecialProd/>
            <SpecialProd/>
            <SpecialProd/>
          </div>
        </Container>

        <Container class1="Product-wrapper hw2 py-3">
          <div className="row">
            <div className="col-12">
              <h4>Our Products</h4>
            </div>
          </div>
          <div className="row">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Container>

        <Container class1="marquee-wrapper hw2 my-4">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper">
              <Marquee className='d-flex' pauseOnHover>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-01.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-02.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-03.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-04.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-05.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-06.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-07.png" alt="b1" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/Marque/brand-08.png" alt="b1" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </Container>
        
        <Container class1="blog-wrapper hw2 my-4 py-3">
          <div className="row">
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
            <div className="col-3">
              <BlogCard/>
            </div>
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Home