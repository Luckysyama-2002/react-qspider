import React, { useState } from 'react'

const RadioButton = () => {
    const [gender,setGender]=useState("Female")

    const handleform=(e)=>{
        e.preventDefault()
        console.log(gender)
    }

    const handleInput=(e)=>{
        const {name,value}=e.target
        setGender(value)
    }
  return (
    <div>
        <form onSubmit={handleform}>
        <input
        type="radio"
        name='gender'
        value="Male"
        checked={gender==="Male"}
        onChange={handleInput}/>Male

        <input
        type="radio"
        name='gender'
        value="Female" 
        checked={gender==="Female"}
        onChange={handleInput}/>Female
        <input
        type="radio" 
        name='gender'
        value="Others"
        checked={gender==="others"}
         onChange={handleInput}/>Others
        <br />
        <button className='p-2 border-2 border-blue-300'>submit</button>
        </form>

    </div>
  )
}

export default RadioButton