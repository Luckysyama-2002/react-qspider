 

import React, { useState } from 'react'

const MultipleCheckbox = () => {
    const [skills,setSkills]=useState([])

    const handleform=(e)=>{
        e.preventDefault()
        console.log(skills)
    }

    const handleCheckBox=(e)=>{
        if(e.target.checked){
            setSkills([...skills,e.target.value])
        }
        else{
            setSkills(skills.filter((skill)=>skill !== e.target.value))
        }

    }
  return (
    <div>
        <form onSubmit={handleform}>
            <label htmlFor="Skills">Skills :</label>
            <input type="checkbox" value="HTML" onChange={handleCheckBox}/>HTML
            <input type="checkbox" value="CSS" onChange={handleCheckBox}/>CSS
            <input type="checkbox" value="JAVASCRIPT" onChange={handleCheckBox}/>JAVASCRIPT
            <input type="checkbox" value="SQL" onChange={handleCheckBox}/>SQL
            <input type="checkbox" value="REACT" onChange={handleCheckBox}/>REACT
            <input type="checkbox" value="NODE" onChange={handleCheckBox}/>NODE
            <br />
            <button className='bg-yellow-400'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleCheckbox