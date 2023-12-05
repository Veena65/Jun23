import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Container from './Container'
import Footer from '../Component/Footer'

const Privacypolicy = () => {
  return (
    <div>
        <Meta title={"Privacy Policies"}/>
        <Header/>
        <Breadcrumb title="Privacy Policies"/>
        <Container class1="hw2 py-3">
            <div className="row">
                <div className="col-12 bg-white p-4 m-2">
                    <h4>Privacy Policies</h4>
                </div>
            </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Privacypolicy