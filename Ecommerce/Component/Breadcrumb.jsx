import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    const {title} = props;
  return (
    <div className='breadcrumb'>
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 text-center">
                    <p className='m-2 p-2 fs-5'>
                        <Link to='/' className='text-black'>Home</Link>
                        &nbsp; / {title}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb