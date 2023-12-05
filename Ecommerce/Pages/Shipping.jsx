import React from 'react'
import Meta from '../Component/Meta'
import Header from '../Component/Header'
import Breadcrumb from '../Component/Breadcrumb'
import Container from './Container'
import { Link } from 'react-router-dom'

const Shipping = () => {
  return (
    <div>
      <Meta title={"Shipping Details"}/>
      <Header/>
      <Breadcrumb title="Shipping Details"/>
      <Container class1="my-3 p-3">
      <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link to='/cart' className='nav-link text-black'>Cart</Link>
              </li>
              <li className="nav-item">
                <Link to='/checkout' className='nav-link text-black'>Checkout Info</Link>
              </li>
              <li className="nav-item">
                <Link to='/payment' className='nav-link text-black'>Payment</Link>
              </li>
              <li className="nav-item">
                <Link to='/shipping' className='nav-link text-black'>Shipping</Link>
              </li>
            </ul>
          </nav>
        <div className="row">
          <div className="col-12">
            <h4>Your Shipping Details</h4>
            <p>Name: Kavin Praneetha</p>
            <p>Products Count : 2</p>
            <p>Delivery : Within a week</p>
            <p>Payment Mode : COD (Cash on Delivery)</p>
            <button>Print Receipt</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shipping