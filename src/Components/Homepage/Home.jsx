import React from 'react'
import Navbar from '../Navbar/navbar'
import Options from '../Navbar/Options'
import ImageCarousel from './ImageCarousel'
import eyetest from '../Assests/eyetest.webp'
import '../Homepage/Home.css';
import Eyetest from './Eyetest'
import OnlineEyetest from './Onlineeyetest'
import Premiunmwear from './Premiumwear'
import Glam from './Glamlenses'
import Ourbrand from './OurBrands'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'
import TrendingCategories from './TrendingCategories'
import Chatbot from './Chatbot'

export default function Home() {
  return (
    <div>
      
      <br></br>
     <br></br>
      <br></br>
      <CategoryList></CategoryList>
     <ImageCarousel ></ImageCarousel>
     <Options></Options>
     <div className='eyetest'>
      <h3>EYE TEST AT HOME</h3>
     </div>
     <Link to="/homeservice"><Eyetest></Eyetest></Link>




     <div className='eyetest'>
     <h3>FREE ONLINE EYE TEST</h3>
     </div>
     <div>
      <Link to="/Service"><OnlineEyetest></OnlineEyetest></Link>
     </div>
     <TrendingCategories></TrendingCategories>



     <div className='eyetest'>
     <h3>
      PREMIUM EYEWEAR</h3>
     </div>
     <div>
      <Premiunmwear></Premiunmwear>
     </div>
     <div className='eyetest'>
     <h3>AQUACOLOR - GLAM UP WITH COLOR LENSES</h3>
    
     </div>
     <Glam></Glam>
     <div className='eyetest'>
     <h3>OUR BRANDS</h3>
    
     </div>
     <Ourbrand></Ourbrand>
     <div>
    <Footer></Footer>
    </div>
    <Chatbot ></Chatbot>
      </div>
      
    
  )
}
