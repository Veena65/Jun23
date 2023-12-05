import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Container from './Container'
import Footer from '../Component/Footer'

const Faq = () => {
  return (
    <div>
        <Meta title={"FAQ's"}/>
        <Header/>
        <Breadcrumb title="FAQ's"/>
        <Container class1="hw2 py-3">
            <div className="row">
                <div className="col-12 bg-white p-4 m-2">
                    <h4>FAQ's</h4>
                </div>
            </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Faq