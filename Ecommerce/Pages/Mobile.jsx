import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Footer from '../Component/Footer'

const Mobile = () => {
  return (
    <div>
        <Meta title={'Mobile'}/>
        <Header/>
        <Breadcrumb title='Mobiles'/>
        <Footer/>
    </div>
  )
}

export default Mobile