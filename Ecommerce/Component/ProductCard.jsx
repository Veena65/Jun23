import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { MdVisibility } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import ReactStars from "react-rating-stars-component"

const ProductCard = (props) => {
    let location = useLocation();

    const {grid} = props;
    let ratingChanged = (newRating)=>{
        console.log(newRating)
    }
  return (
    <>
        <div className={ `${location.pathname === "/store" ? `gr-${grid}`  : "col-3" }`}>
            <Link to={`${
      location.pathname === "/"
      ? "store/:id"
      : location.pathname === "/store/:id"
      ? ":store/1"     : ":id"}`} >
                <div className="product-card position-relative border p-2 m-2 bg-white">
                    <div className="product-image">
                        <img src="/images/product/h1.jpg" alt="cimg" className='img-fluid' />
                        <img src="/images/product/h2.jpg" alt="cimg2" className='img-fluid' />
                    </div>
                    <div className="position-absolute picon">
                        <CiHeart size={30} style={{color:'crimson'}}/>
                    </div>
                    <div className=" d-flex flex-column position-absolute phicon">
                        <MdVisibility size={20} style={{color:'black'}} className='my-2'/> 
                        <IoGitCompareOutline size={20} style={{color:'blueviolet'}} className='my-2'/> 
                        <GiShoppingBag size={20} style={{color:'chocolate'}} className='my-2'/> 
                    </div>
                    <div className="product-card-content text-black">
                        <h6>Shopzee</h6>
                        <h5>
                            Kids headphones bulk 10 pack multicolored for students
                        </h5>
                        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        color='lightgrey'
                        />
                        <h4 className="my-3">&#8377; 7000</h4>
                    </div>
                </div>
            </Link>
        </div>

        <div className={ `${location.pathname === "/store" ? `gr-${grid}`  : "col-3" }`}>
            <Link to={`${
      location.pathname === "/"
      ? "store/:id"
      : location.pathname === "/store/:id"
      ? ":store/1"     : ":id"}`} >
                <div className="product-card position-relative border p-2 m-2 bg-white ">
                    <div className="product-image">
                        <img src="/images/product/h1.jpg" alt="cimg" className='img-fluid' />
                        <img src="/images/product/h2.jpg" alt="cimg2" className='img-fluid' />
                    </div>
                    <div className="position-absolute picon">
                        <CiHeart size={30} style={{color:'crimson'}}/>
                    </div>
                    <div className=" d-flex flex-column position-absolute phicon">
                        <MdVisibility size={20} style={{color:'black'}} className='my-2'/> 
                        <IoGitCompareOutline size={20} style={{color:'blueviolet'}} className='my-2'/> 
                        <GiShoppingBag size={20} style={{color:'chocolate'}} className='my-2'/> 
                    </div>
                    <div className="product-card-content text-black">
                        <h6>Shopzee</h6>
                        <h5>
                            Kids headphones bulk 10 pack multicolored for students
                        </h5>
                        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        color='lightgrey'
                        />
                        <h4 className="my-3">&#8377; 7000</h4>
                    </div>
                </div>
            </Link>
            </div>
    </>
  )
}

export default ProductCard