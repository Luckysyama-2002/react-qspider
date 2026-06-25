
import React, { createContext } from 'react'
import Parent from './Parent'
import Child from './Child'

export const GlobalContext=createContext()

const Use_Context_Api = () => {
    const data={
        username:"sunndari",
        age:56,
        gender:"female",
        education:"btech",
        college:"andi mndi sndi clg",
        place:"ctc",
        batch:"2025"                                                                 

    }
  return (
    <div>
        <GlobalContext value={data}>
            <Parent/>
        </GlobalContext>
        <Child/>


    </div>
  )
}

export default Use_Context_Api