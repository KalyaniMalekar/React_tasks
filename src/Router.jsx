import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import Service from './Service.jsx'
import NavBar from './NavBar.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Food from './Food.jsx'
import Species from './Species.jsx'
import Donation from './Donation.jsx'
import Product from './Product.jsx'


const Router=()=> {
  
  return (
    <div>
        <BrowserRouter>
           <NavBar/>
           <Routes>
               <Route path='/home' element={<Home/>} />
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/product'element={<Product/>}/>
               <Route path='/service' element={<Service/>}>
                   <Route path='/service/food' element={<Food/>}/>
                   <Route path='/service/spec' element={<Species/>}/>
                   <Route path='/service/don' element={<Donation/>}/>
               </Route>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router