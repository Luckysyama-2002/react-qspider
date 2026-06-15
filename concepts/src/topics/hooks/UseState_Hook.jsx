  
import { useState } from "react"
  const UseStateHook=()=>{
    //top level 
    // const [inital values, update function]=useState(initial value)

    const [count,setCount] = useState(0)
    const updateCount=()=>{
      setCount(count+1)
    }

    return(
        <div>
        <h1>UseState Hook</h1>
        <h1>{count}</h1>
        <button onClick={updateCount}>Update</button>
        </div>
    )
  }

  export default UseStateHook