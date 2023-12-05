import React from 'react'
import Header from '../Component/Header'
import Meta from '../Component/Meta'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'
import BlogCard from '../Component/BlogCard'

const Blog = () => {
  return (
    <div>
        <Meta title={"Blog"}/>
        <Header/>
        <Breadcrumb title='Blog'/>
        <div className='blog-wrapper my-4'>
          <div className="row">
            <div className="col-3 hw2">
              <div className="filter-catagory  m-3 p-3 bg-white">
                <h4 className="filter-title">
                  Filter By Catagory
                </h4>
                <ul>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camara</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex flex-wrap hw2 p-2 justify-content-between">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
              </div>
              
            </div>
          </div>
           
        </div>
        <Footer/>
    </div>
  )
}

export default Blog