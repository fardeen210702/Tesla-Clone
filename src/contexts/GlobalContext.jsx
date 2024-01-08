import { createContext, useContext, useReducer } from "react";
import React from 'react'
import reducer from "../reducers/GlobalReducer";
const Gcontext = createContext()

function GlobalContext({children}) {
    const initialState = {
        displayVehicle : false,
        displayEnergy : false,
        displayCharging : false,
        displayDiscover : false,
        displayShop : false,
        
    }

    const [state, dispatch] = useReducer(reducer, initialState)

function mouseEnterVehicle(){
  dispatch({type:'update_vehicle_state'})
}
function mouseEnterEnergy(){
  dispatch({type:'update'})
}
function mouseEnterCharging(){
  dispatch({type:'mouseEnterCharging'})
}
function mouseEnterDiscover(){
  dispatch({type:'mouseEnterDiscover'})
}
function mouseEnterShop(){
  dispatch({type:'mouseEnterShop'})
}
function mouseEnterLogo(){
  dispatch({type:'mouseEnterLogo'})
}
    
  return (
    <Gcontext.Provider value={{...state,mouseEnterVehicle,mouseEnterEnergy,mouseEnterCharging,mouseEnterDiscover,mouseEnterShop,mouseEnterLogo}}>{children}
    </Gcontext.Provider>
  )
}
const useGlobalContext = ()=>{
    return useContext(Gcontext)
}
export {useGlobalContext,GlobalContext}