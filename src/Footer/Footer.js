import React from 'react'
import "../Footer/Footer.css"
import  { navigation } from "../navigation"
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { data, social } from '../Data';


const Footer = () => {

    const location = useLocation()

  return (
    <div className='footer'>
        <div className='firstFooter'>
        <div className='quick'>
        <h1>Quick Links</h1>
        <div className='qLinks'>
            <ul>
            {
                navigation.map((item)=>{
                    return(
                <li className={location.pathname === item.path ? "active" : 'nav' } >
                   
                <Link to={item.path} className='abc' >
                {item.icon}{item.name}
               </Link> 
                </li>
                    )
                })
            }
            </ul>
           
        </div>
      </div>
      <div className='useful'>
        <h1>Useful Links</h1>
        <div className='usefulLinks'>
            <ul>
            {
                data.map((d)=>{
                    return(
                <li className='uLinks' >
                   
                <Link  className='abc' >
                {d.icon}{d.name}
               </Link> 
                </li>
                    )
                })
            }
            </ul>
           
        </div>
      </div>
      <div className='follow'>
        <h1>Follow Us</h1>
        <div className='followLinks'>
            <ul>
            {
                social.map((s)=>{
                    return(
                <li className='fLinks' >
                   
                <Link  className='abc' >
                {s.icon}{s.name}
               </Link> 
                </li>
                    )
                })
            }
            </ul>
           
        </div>
      </div>
        </div>
        <div className='underline'></div>
        <div className='secondFooter'>
            <h1>Stock Nepal</h1>
            <p>&copy; MyStockNepal 2024 | All Right Reserved</p>
        </div>  
      
    </div>
  )
}

export default Footer
