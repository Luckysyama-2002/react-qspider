import React, { useContext } from 'react'
import Child from './Child'
import { GlobalContext } from './Use_Context_Api'
const Parent = () => {
    const res=useContext(GlobalContext)
    console.log(res)
  return (
    <div>
        <Child/>
    </div>
  )
}

export default Parent