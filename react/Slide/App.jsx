import React from 'react'
import LoginButton from './Login'
import Profile from './Profile'
import Login1 from './Login1'
import Profile1 from './Profile1'

// import MyCarousel from './unctrl'
// import DarkVariantExample from './darkcarousel'
//  import Carousel from './Carousel'
// import Slider from './Slider'

const App = () => {
  return (
    <div>
        {/* <Carousel /> */}
        {/* <Slider /> */}
        {/* <MyCarousel />
        <DarkVariantExample /> */}
       {/* <LoginButton />
       <Profile /> */}
       <Login1 isAuth={true}/>
       <Profile1 isAuth={false}/>
    </div>
  )
}

export default App