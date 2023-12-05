import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";

const SingleBlog = () => {
  return (
    <div>
        <Meta title={"Blog"}/>
        <Header/>
        <Breadcrumb title="Dynamic Blog"/>
        <div className="blog-wrapper">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                  <Link to='/blog'>
                    <FaArrowLeft size={20} style={{color:'black'}}/> 
                    <span className="text-black fs-5">Go back to blog</span>
                  </Link>
                  <h4 className='title'>A Beautiful Sunday Morning Renaissance</h4>
                  <div className='card-image'>
                    <img src="/images/blog-1.jpg" alt="blogimage" className='img-fluid w-100 my-4'/>
                  </div>
                  <p className="desc">
                  It is a long established fact that a reader will be distracted by 
                  the readable content of a page when looking at its layout. 
                  The point of using Lorem Ipsum is that it has a more-or-less 
                  normal distribution of letters, as opposed to using 
                  'Content here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors 
                  now use Lorem Ipsum as their default model text, and a search for 
                  'lorem ipsum' will uncover many web sites still in their infancy. 
                  Various versions have evolved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleBlog