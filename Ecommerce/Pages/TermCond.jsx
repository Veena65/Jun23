import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Container from './Container'
import Footer from '../Component/Footer'

const TermCond = () => {
  return (
    <div>
        <Meta title={"Terms & Conditions"}/>
        <Header/>
        <Breadcrumb title="Terms & Conditions"/>
        <Container class1="hw2 py-3">
            <div className="row">
                <div className="col-12 ">
                    <div className='bg-white p-4 rounded'>
                    <h4>Terms & Conditions</h4>
                    <ol>
                        <li>The user had read the product description before purchase.</li>
                        <li>Can be returned within 2 Days from the date of delivery</li>
                        <li>By using the website, users agree to abide by the terms and conditions.</li>
                    </ol>
                    </div>
                </div>
            </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default TermCond