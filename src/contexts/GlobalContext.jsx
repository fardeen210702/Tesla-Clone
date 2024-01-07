import { createContext, useContext, useReducer } from "react";
import React from 'react'
import reducer from "../reducers/GlobalReducer";
const Gcontext = createContext()

function GlobalContext({children}) {
    const initialState = {
        displayVehicle : false,
        displayEnergy : false,
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    
  return (
    <Gcontext.Provider value={{...state}}>{children}
    </Gcontext.Provider>
  )
}
const useGlobalContext = ()=>{
    return useContext(Gcontext)
}
export {useGlobalContext,GlobalContext}