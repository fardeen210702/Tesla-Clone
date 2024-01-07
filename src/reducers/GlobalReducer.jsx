
function GlobalReducer(state,action) {
  switch (action.type) {

    case 'CHANGEDISPLAY':
        return{
            ...state,
            displayVehicle: true,
            displayEnergy: false,

        }
        case 'CHANGEDENERGY':
            return{
                ...state,
            displayVehicle: false,
            displayEnergy: true,


            }
  
    default:
        return state
  }
}

export default GlobalReducer