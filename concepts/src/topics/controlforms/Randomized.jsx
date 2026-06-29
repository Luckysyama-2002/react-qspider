 

 import React, { useState } from 'react'
 
 const Randomized = () => {
    const characters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const [char,setChar]= useState("👍")
    const changeChar=()=>{
        for(let i=0;i<characters.length;i++){
            setTimeout(()=>{
                setChar(characters[i].toUpperCase())
            },100*i)
        }
        setTimeout(()=>{
            setChar(characters[Math.floor(Math.random()*26)].toUpperCase())
        },100*characters.length+5)
    }
    // const reset=()=>{
    //     setChar("😂")
    // }
   return (
     <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-6xl bg-gray-300 font-bold mb-4 w-[200px] h-[200px] rounded-full shadow-xl shadow-gray-600 flex items-center justify-center">
        {char}
      </div>
      <div className="flex gap-4">
        <button onClick={changeChar} className="bg-blue-500 text-white px-4 py-2 rounded-md">Click</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={()=>setChar("🥳")}>Reset</button>
        </div>
    </div>
   )
 }
 
 export default Randomized