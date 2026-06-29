

import React, {useState} from 'react'

const CheckBox = () => {
    const [terms,setTerms]=useState(false)

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(terms)
    }

    const handleInput=(e)=>{
        setTerms(e.target.checked)
    }

  return (
    <div>
        <form  onSubmit={handleForm}>
            <input
            type="checkbox" 
            name='term' 
            onChange={handleInput}
            checked={terms}
            /> Terms And Condition
            <br />
            <button className='bg-yellow-400'>Submit</button>


        </form>
    




    </div>
  )
}

export default CheckBox