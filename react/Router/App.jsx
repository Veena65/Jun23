import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mens from './Mens'
import Womens from './Womens'
import Kids from './Kids'
import Login from './Login'
import Cart from './Cart'
import Shop from './Shop'
import Portaldemo from './Portaldemo'

const App = () => {
  return (
            // <BrowserRouter>
            //     <Navbar></Navbar>
            //     <Routes>
            //         <Route index element={<Shop></Shop>} ></Route>
            //         <Route element={<Mens></Mens>} path='mens'></Route>
            //         <Route element={<Womens></Womens>} path='womens'></Route>
            //         <Route element={<Kids></Kids>} path='kids'></Route>
            //         <Route element={<Login></Login>} path='login'></Route>
            //         <Route element={<Cart></Cart>} path='cart'></Route>
            //     </Routes>
            // </BrowserRouter>
            <Portaldemo />
    )
}

export default App