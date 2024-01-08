import React from 'react'
import { useGlobalContext } from '../contexts/GlobalContext'
import Vehicles from './Vehicles'

function ViewDetail() {
    const {displayVehicle,displayEnergy,displayCharging,displayDiscover,displayShop} = useGlobalContext()
  return (
    <>
        {
            displayVehicle &&  <Vehicles/>
            
        }
        {/* {
            displayEnergy && <div className="viewDetails">
                <h1>heeeloo</h1>
            </div>
        }{
            displayCharging && <div className="viewDetails">
                <h1>bye</h1>
            </div>
        }
        {
            displayDiscover && <div className="viewDetails">
            <h1>bydddddddddde</h1>
            </div>
        }
        {
            displayShop && <div className="viewDetails">
            <h1>byddddddddddddddddddddddddddddddddde</h1>
            </div>
        } */}
    </>
  )
}

export default ViewDetail