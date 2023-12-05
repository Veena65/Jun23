import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Ourstore from './Pages/Ourstore'
import Compare from './Pages/Compare'
import Login from './Pages/Login'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import TV from './Pages/TV'
import Mobile from './Pages/Mobile'
import Speaker from './Pages/Speaker'
import Forgetpass from './Pages/Forgetpass'
import Signup from './Pages/Signup'
import SingleBlog from './Pages/SingleBlog'
import Payment from './Pages/Payment'
import Checkout from './Pages/Checkout'
import Shipping from './Pages/Shipping'
import SingleProduct from './Component/SingleProduct'
import TermCond from './Pages/TermCond'
import Privacypolicy from './Pages/Privacypolicy'
import Refundpolicy from './Pages/Refundpolicy'
import Shippolicy from './Pages/Shippolicy'
import Faq from './Pages/Faq'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Layout/>}/>{/* Defines the default layout structure */}
           <Route index element={<Home/>}/>{/* index specified to load Home component to the path '/' ie. it replaces Layout Component  */}
           <Route path='about' element={<About/>}/>
           <Route path='blog' element={<Blog/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='store' element={<Ourstore/>}/>
           <Route path='compare' element={<Compare/>}/>
           <Route path='wishlist' element={<Wishlist/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='tv' element={<TV/>}/>
           <Route path='mobile' element={<Mobile/>}/>
           <Route path='speaker' element={<Speaker/>}/>
           <Route path='forgetpass' element={<Forgetpass/>}/>
           <Route path='signup' element={<Signup/>}/>
           <Route path='/blog/:id' element={<SingleBlog/>}/>
           <Route path='payment' element={<Payment/>}/>
           <Route path='checkout' element={<Checkout/>}/>
           <Route path='shipping' element={<Shipping/>}/>
           <Route path='/store/:id' element={<SingleProduct/>}/>
           <Route path='Terms_Condition' element={<TermCond/>}/>
           <Route path='privacy_policy' element={<Privacypolicy/>}/>
           <Route path='refund_policy'element={<Refundpolicy/>}/>
           <Route path='shipping_policy' element={<Shippolicy/>}/>
           <Route path='faq' element={<Faq/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App