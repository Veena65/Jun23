import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Portfilo from './Component/Portfilo1';
// import About from './About';
// import Contact from './Contact';
// import Skill from './Skill';
// import Home from './Home';
// import Resume from './Resume';

// import Counter from './counter';
// import {Provider} from 'react-redux';
// import store from './store';
// import Axios1 from './Axios1';
// import Todotask from './Todotask';
// import ContactUs from './Component/ContactForm';
// import Memohook from './Component/memohook';
// import ImageUploader from './ImageUploader';
import Usestateeg from './usestateeg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Provider store={store}>
  //       <Counter />      
  //   </Provider>
  //   for redux concept */}
   {/* <Axios1 />  */}
   {/*  <Todotask />
     <ContactUs /> */}
     {/* <Memohook />
     <ImageUploader /> */}
    <Usestateeg />
   </React.StrictMode>
    // Portfolio concept
    // <BrowserRouter>
    //   <Portfilo></Portfilo>
    //   <Routes>
        
    //       <Route index element={<Home></Home>} ></Route>
    //       <Route element={<About></About>} path='/About'></Route>
    //       <Route element={<Skill></Skill>} path='/Skill'></Route>
    //       <Route element={<Resume></Resume>} path='/Resume'></Route>
    //       <Route element={<Contact></Contact>} path='/Contact'></Route>
        
    //   </Routes>
    // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
