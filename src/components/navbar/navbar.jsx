import React from 'react'
import { useNavigate, Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = true;
  return (

    <div className='nav'>
      <div className="topleft">
      <i class="topicon fa-brands fa-square-facebook fa-lg"></i>
      <i class="topicon fa-brands fa-square-x-twitter fa-lg"></i>
      <i class="topicon fa-brands fa-square-instagram fa-lg"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
            <li className='topitem'><Link to={"/"} className='link'>HOME</Link></li>
            <li className='topitem'><Link to={"/about"} className='link' >ABOUT</Link></li>
            <li className='topitem'><Link to={"/contact"} className='link' >CONTACT</Link></li>
            <li className='topitem'><Link to={"/write"} className='link' >WRITE</Link></li>
            {user?<li className='topitem'>Logout</li>:<li></li>}
        </ul>
      </div>
      <div className="topright">
        {user?( 
        <>
        <img className="topimg" src="/DSC_0926.JPG" alt="" srcset="" />
        <i class="topsearchicon fa-solid fa-magnifying-glass fa-lg"></i>
        </>)
             
        :( <ul className='toplist'>
           <li className='topitem'><Link to={"/login"} className='link'>Login</Link></li>
           <li className='topitem'><Link to={"/register"} className='link'>Register</Link></li>
          </ul>)}
        

      </div>
    </div>
  )
}
