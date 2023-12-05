import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'

const Speaker = () => {
  return (
    <div>
        <Meta title={"Speakers"}/>
        <Header/>
        <Breadcrumb title="Speakers"/>
        <Footer/>

    </div>
  )
}

export default Speaker