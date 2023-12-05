import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='blog-card bg-white p-2 my-2'>
        <div className='card-image'>
            <img src='images/blog-1.jpg' alt="blogimg" className='img-fluid w-100'/>
        </div>
        <div className="card-content">
            <p className="date">20 November 2023</p>
            <h4 className="title">A Beautiful Sunday Morning Renaissance</h4>
            <p className="desc">Lorem ipsum dolor sit amet,... </p>
            <Link to='/blog/:id'>Read more</Link>
        </div>
        
    </div>
  )
}

export default BlogCard