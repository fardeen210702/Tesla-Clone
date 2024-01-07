import React, { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'


function HeaderBottom() {
  const flag = useRef(null)
  useLayoutEffect(() => {
     let anime = gsap.context(()=>{
      const tl = gsap.timeline()
      tl.from('.bottomheader .midheader',{
        y:-50,
        delay:.5,
        opacity:0,  
      }).from('.bottomheader .secondbottom',{
        y:-50,
        delay:.3,
        opacity:0,
      })
     },flag)
   
    return () => anime.revert()
    ;
  }, [])
  return (
    <div className='bottomheader' ref={flag} >
         <div className='midheader' >
        <h1> Model Y</h1>
        <p>Lease starting at $399/mo* </p>
    </div>
    <div className="secondbottom">

        <div className="btns">
            <button className='btn1'> Explore Inventory</button>
            <button className='btn2'>Demo Drive</button>
        </div>
        <div className="para">
            <p>*Excludes taxes and fees with price subject to change. Available in select states. <span>See Details</span></p>
        </div>
    </div>
    </div>
  )
}

export default HeaderBottom