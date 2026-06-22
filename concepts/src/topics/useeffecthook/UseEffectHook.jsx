

import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount]= useState(0)
    const [val,setVal]= useState(0)
    const updateCount=()=>{
        setCount(count+1)
    }
 //1-  executes the call back function after every render of the compomnenet
    //   useEffect(()=>{  
    //     console.log("useEffect called")
    //   })


//2-  execute only one time 
    // useEffect(()=>{
    //     console.log("hello");
        
    // },[])


    //3- useEffect (callback,[dependency])    it executes the call back fun only  when the value of count changes.
          useEffect(()=>{
            console.log("hello")
          },[val,count])   

  return (
    <div>
    <h1>{count}</h1>
     <button onClick={updateCount}>Update Count</button>
    <hr/>


    <h1>{val}</h1>
    <button onClick={()=>setVal(val+1)}>Update Val</button>

   



    </div>
  )
}

export default UseEffectHook