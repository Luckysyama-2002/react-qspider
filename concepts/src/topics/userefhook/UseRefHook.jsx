

import React, {useRef, useState} from 'react'

const UseRefHook = () => {
    const h1ref=useRef()
    const boxref=useRef()
    console.log(h1ref)
    const changeColor=()=>{
        h1ref.current.style.backgroundColor="red"
    }
    const offBox=()=>{
        boxref.current.style.visibility="hidden"
    }
    const onBox=()=>{
        boxref.current.style.visibility="visible"
    }
    console.log("helllo")
  return (
    <div>
        <h1 ref={h1ref}>UseRefHook</h1>
        <button onClick={changeColor}>Click ME</button>
        <div ref={boxref}style={{width:"100px", height:"100px",backgroundColor:"cyan"}}></div>
        
        <button onClick={onBox}>ON</button>
        <button onClick={offBox}>OFF</button>



    </div>
  )
}

export default UseRefHook