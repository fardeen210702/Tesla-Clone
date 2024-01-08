import React, { useState } from 'react'
import { CiCircleQuestion, CiGlobe } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import Logo from '../assets/images-20240102T191737Z-001/images/logo.svg'
import HeaderBottom from './HeaderBottom';
import { useGlobalContext } from '../contexts/GlobalContext';
import ViewDetail from './viewDetail';
function Header() {
    const [toggle, setToggle] = useState(false)
    const { mouseEnterVehicle, mouseEnterEnergy, mouseEnterCharging, mouseEnterDiscover, mouseEnterShop,mouseEnterLogo } = useGlobalContext()
   

    return (
        <>
            <div className='Header'>
                <video autoPlay muted loop>
                    <source src='https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm' />
                </video>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="" onMouseEnter={mouseEnterLogo}  />
                    </div>
                    <div className={toggle ? 'links links-responsive-link' : 'links'}>
                       
                        {
                            toggle ? (<>
                                <li onClick={mouseEnterVehicle} > Vehicles</li>
                                <li onClick={mouseEnterEnergy}>Energy</li>
                                <li onClick={mouseEnterCharging}>Charging</li>
                                <li onClick={mouseEnterDiscover}>Discover</li>
                                <li onClick={mouseEnterShop}>Shop</li>
                            </> 

                            ): (<>
                             <li onMouseEnter={mouseEnterVehicle}  >Vehicles</li>
                        <li onMouseEnter={mouseEnterEnergy}>Energy</li>
                        <li onMouseEnter={mouseEnterCharging}>Charging</li>
                        <li onMouseEnter={mouseEnterDiscover}>Discover</li>
                        <li onMouseEnter={mouseEnterShop}>Shop</li>
                            </>

                            )
                }


                    </div>
                    <div className="links2">
                        <li><CiCircleQuestion /></li>
                        <li><CiGlobe /></li>
                        <li><FaRegUserCircle /></li>
                    </div>
                    <li className='burger' onClick={() => setToggle(!toggle)}>
                        {toggle ? <GoX /> : <RxHamburgerMenu />}</li>

                </nav>

                <HeaderBottom />
                <ViewDetail />

            </div>

        </>
    )
}

export default Header