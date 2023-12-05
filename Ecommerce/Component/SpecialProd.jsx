import React from 'react'
import ReactStars from 'react-rating-stars-component'

const SpecialProd = () => {
    let ratingChanged = (newrating)=>{
        console.log(newrating);
    }
  return (
        <div className="col-6 my-3">
            <div className="special-product-card rounded p-3 bg-white">
                <div className="d-flex align-items-center justify-content-center">
                    <div className='image-card w-50'>
                        <img src="images/airpods-max.png" alt="spimg" className='img-fluid'/>
                    </div>
                    <div className="special-product-content d-flex flex-column p-4">
                        <h4 className="brand">Shopzee</h4>
                        <h5 className="title">Airpods-Max</h5>
                        <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        color="lightblue"
                        activeColor="yellow"
                        edit="false"
                        value={3} 
                        />    
                        <p className='price'>
                            <span>&#8377; 1500 &nbsp;</span>
                            <strike>&#8377; 2000</strike>
                        </p>
                        <div className="discount d-flex align-items-center">
                            <p className='mb-0'>5 &nbsp; Days &nbsp;</p>
                            <div className='d-flex align-items-center'>
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>
                        </div>
                        <div className="product-count my-3">
                            <p>Products : 5</p>
                            <div className="progress">
                                <div className="progress-bar" 
                                role="progressbar" 
                                style={{width: "75%"}}
                                aria-valuenow="25"
                                aria-valuemin="0" 
                                aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                        <div className='desc'>
                            Lorem ipsum dolor sit amet consectetur
                        </div>
                        <button>Add to Cart🛒</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SpecialProd