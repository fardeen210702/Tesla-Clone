import React, { useState } from 'react'
import { CiCircleQuestion ,CiGlobe } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import Logo from '../assets/images-20240102T191737Z-001/images/logo.svg'
import HeaderBottom from './HeaderBottom';
function Header() {
    const [toggle, setToggle] = useState(false)
   
  return (
    <>
    <div className='Header'>
        <video autoPlay muted loop>
            <source src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm'/>
        </video>
        <nav>
            <div className="logo">
                <img src={Logo} alt=""  />
            </div>
            <div className= {toggle ?'links links-responsive-link' : 'links'}>
                <li >Vehicles</li>
                <li >Energy</li>
                <li>Charging</li>
                <li>Discover</li>
                <li>Shop</li>
            </div>
            <div className="links2">
                <li><CiCircleQuestion /></li>
                <li><CiGlobe  /></li>
                <li><FaRegUserCircle  /></li>
            </div>
            <li className='burger' onClick={()=>setToggle(!toggle)}>
                {toggle ? <GoX/> : <RxHamburgerMenu/>}</li>

        </nav>
        
    <HeaderBottom/>
    </div>
    </>
  )
}

export default Header