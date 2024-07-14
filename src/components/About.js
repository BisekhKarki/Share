import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import "../components/About.css"
import share from "../components/Share/share.webp"

const About = () => {


  
  return (
    <div>
      <Navbar />
      <div className='aboutUs'>
      <div className='about_head'>
      <h1 className='aboutHead'>About US</h1>
      <img src={share} />
      <p className='aboutP'>MyStockNepal</p>
      </div>
      <div className='aboutBody'>
        <p>We update about Stocks in Nepal. We posts about IPOs and other news in Facebook,
           Instagram, Tiktok and Website.</p>
      </div>
      <div className='about_second'>
        <h3>Our Goal</h3>
        <p>Help to know about upcoming IPOs and important news about stock market.</p>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
