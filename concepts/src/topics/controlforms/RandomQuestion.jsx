
import React, { useState } from 'react'

const RandomQuestion = () => {
    const [question,setQuestion] = useState(0)
    const num =['1','2','3','4','5','6']
    const prev=()=>{
        if(question ===0) return
        setQuestion(question-1)
    }
    const next=()=>{
        if(question === num.length) return
        setQuestion(question+1) 
    }
  return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-6xl bg-gray-300 font-bold mb-4 w-[200px] h-[200px] rectangle-full shadow-xl shadow-gray-600 flex items-center justify-center">
        {question}
      </div>
      <div className="flex gap-4">
        <button onClick={prev} className="bg-yellow-500 text-white px-4 py-2 rounded-md">PREV</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={next}>NEXT</button>
        </div>
    </div>
  )
}

export default RandomQuestion