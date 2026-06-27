import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
export const GlobalContext=createContext()

const UseContext_Task = () => {
  const [cart,setCart]=useState(0)
  console.log("global context")
  return (
    <div>
      <GlobalContext.Provider value={{cart,setCart}}>
          <Navbar/>
          <Home/>
      </GlobalContext.Provider>
      
    </div>
  )
}

export default UseContext_Task