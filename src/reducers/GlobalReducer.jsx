
function GlobalReducer(state,action) {
  switch (action.type) {

    case 'update_vehicle_state':
        return{
            ...state,
            displayVehicle : true,
            displayEnergy : false,
            displayCharging : false,
            displayDiscover : false,
            displayShop : false,
        }
        
       
    case 'update':
        return{
            ...state,
            displayVehicle : false,
        displayEnergy : true,
        displayCharging : false,
        displayDiscover : false,
        displayShop : false,
        }
        case 'mouseEnterCharging':
          return{
            ...state,
            displayVehicle : false,
            displayEnergy : false,
            displayCharging : true,
            displayDiscover : false,
            displayShop : false,
          }
        case 'mouseEnterDiscover':
          return{ ...state,
            displayVehicle : false,
            displayEnergy : false,
            displayCharging : false,
            displayDiscover : true,
            displayShop : false,

          }
        case 'mouseEnterShop':
          return{ ...state,
            displayVehicle : false,
            displayEnergy : false,
            displayCharging : false,
            displayDiscover : false,
            displayShop : true,

          }
        case 'mouseEnterLogo':
          return{ ...state,
            displayVehicle : false,
            displayEnergy : false,
            displayCharging : false,
            displayDiscover : false,
            displayShop : false,

          }
         

       
  
    default:
        return state
  }
}

export default GlobalReducer