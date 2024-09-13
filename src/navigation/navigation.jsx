import { createContext, useReducer } from "react"
import { counterReducer, initialState } from "./counterHelper"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CustomContext from "../components/context/context"



export const GlobalCounter = createContext()



const CustomNavigation = () =>{

    const[current,dispatch] = useReducer(counterReducer,initialState)
    return(
        <div>
            <GlobalCounter.Provider value={
                {current:current,dispatch:dispatch}
            }>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CustomContext/>}/>
                </Routes>
            </BrowserRouter>
            
            </GlobalCounter.Provider>
        </div>
    )
}
export default CustomNavigation