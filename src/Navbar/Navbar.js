import React from 'react'
import { navigation } from '../navigation'
import { Link, useLocation } from 'react-router-dom'
import "../Navbar/Navbar.css"

const Navbar = () => {

  const location = useLocation()
  // console.log(location.pathname)

  return (
    <div className='Navigation'>
      <h1>Stock Nepal</h1>
      <nav>
        <ul className='navigation_list'>
          {
            navigation.map((n,i)=>{
              return(
                <>
                <li className={location.pathname === n.path ? "active" : 'nav' } >
                <Link to={n.path} >
               {n.name}
               </Link> 
                </li>
               
                </>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
