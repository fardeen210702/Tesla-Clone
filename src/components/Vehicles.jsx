import React, { useLayoutEffect, useRef } from 'react'
import Data from '../Data'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

function Vehicles() {
const flag = useRef(null)
useLayoutEffect(() => {
  let ctx = gsap.context(()=>{
    const tl = gsap.timeline()
    tl.from('.maincontainer .firstcontainer',{
        // y:-100,
        duration:.6,
        opacity:0,
        stagger:.5

    })
    tl.from('.maincontainer .secondcontainer ',{
        // y:-100,
        duration:.4,
        opacity:0

    })
    

  },flag)

  return () => ctx.revert()
}, [])
  return (
    <div className='maincontainer' ref={flag} >
        <div className="firstcontainer">
            {
                Data.map((el,index)=>{
                    return <Link to= {`/singlePage/${index}`}className='firstbox' key={index}>
                    {/* <div className="firstbox" > */}
                        <img src={el.image}  width='150px' height='150px' alt="" />
                        <div className="text">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    {/* </div> */}
                    </Link>
                })
            }


        </div>
        <div className="secondcontainer">
            <ul>
                <li>Inventory</li>
                <li>Used Cars</li>
                <li>Demo Drive</li>
                <li>Trade-in</li>
                <li>Comapare</li>
                <li>Fleet</li>
                <li>Semi</li>
                <li>Roadster</li>
            </ul>

        </div>
        
    </div>
  )
}

export default Vehicles