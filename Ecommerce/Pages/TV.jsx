import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'

const TV = () => {
  return (
    <div>
        <Meta title={"TV"}/>
        <Header/>
        <Breadcrumb title="TV Appliances"/>
        <Footer/>
    </div>
  )
}

export default TV