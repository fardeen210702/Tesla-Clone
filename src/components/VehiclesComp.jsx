import React, { useLayoutEffect } from 'react'
import Data from '../Data'
import { useRef } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function VehiclesComp() {
    const flag = useRef(null)
    useLayoutEffect(() => {
      let ctx = gsap.context(()=>{
 const tl = gsap.timeline()
 tl.from('.vehiclecontainer .btnsinfo1',{
    opacity:0,
    y:150,
    // duration:1.7,
    stagger:.9,
    scrollTrigger:{
        trigger:'.btnsinfo1',
        // markers:true,
        scrub:true,
        start:'top 70%',
        end:'bottom 80%',
    }
 })
      },flag)
    
      return () => ctx.revert() 
    }, [])
  return (
    <div className='vehiclescomp' ref={flag}>
        <div className="vehiclesloop">
            {
                Data.map((el,index)=>{
                    return <div className="vehiclecontainer" key={index}>
                        <img src={el.mainImage} alt="" />
                        <div className="btnsinfo1">
                            <div className="cardetails">
                                <h1>{el.title}</h1>
                                <p>From ${el.price}*</p>
                                <p>Lease starting at $329/mo*</p>
                            </div>
                            <div className="buttons">

                            <div className="btns">
                                <div className="btn1"> Explore Inventory</div>
                                <div className="btn2">Demo Drive</div>
                            </div>
                            <p>*Excludes taxes and fees with price subject to change. Available in select states. <span>See Details</span></p>

                            </div>



                        </div>
                    </div>
                })

            }

        </div>
        
    </div>
  )
}

export default VehiclesComp