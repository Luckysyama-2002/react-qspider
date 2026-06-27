

// import React from 'react'

// const ControlForm = () => {
//   return (
//     <div>
//               {/* paste the form code  */}





//     </div>
//   )
// }

// export default ControlForm






import React, { useState } from 'react'

const Controlledform = () => {
    const[username,setusername]=useState("")
    const handleform=(e)=>{
        
       e.preventDefault()
        console.log(username)
    }

    const handleinput=(e)=>{
        const{name,value}=e.target
        setusername(value)
        console.log(name)
        console.log(value)
    }


  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <form onSubmit={handleform}>
            <input type="text" placeholder='username' className='p-3 border-2 border-black' onChange={handleinput} name='username'/>
            <br />

            <button className='p-2 border-2 border-blue-300'>submit</button>
        </form>
    </div>
  )
}

export default Controlledform