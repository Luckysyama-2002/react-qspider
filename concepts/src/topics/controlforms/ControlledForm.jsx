

// import React from 'react'

// const ControlForm = () => {
//   return (
//     <div>
//               {/* paste the form code  */}





//     </div>
//   )
// }

// export default ControlForm






// import React, { useState } from 'react'

// const Controlledform = () => {
//     const[username,setusername]=useState("")
//     const handleform=(e)=>{
        
//        e.preventDefault()
//         console.log(username)
//     }

//     const handleinput=(e)=>{
//         const{name,value}=e.target
//         setusername(value)
//         console.log(name)
//         console.log(value)
//     }


//   return (
//     <div className='w-full h-[100vh] flex items-center justify-center'>
//         <form onSubmit={handleform}>
//             <input type="text" placeholder='username' className='p-3 border-2 border-black' onChange={handleinput} name='username'/>
//             <br />

//             <button className='p-2 border-2 border-blue-300'>submit</button>
//         </form>
//     </div>
//   )
// }

// export default Controlledform

import React, { useState } from 'react'

const ControlledForm = () => {
    const [form,setForm]=useState({
        username:"",
        email:"",
        password:"",
        mobile:"",
        date:""
    })

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(form)
    }

    const handleInput=(e)=>{
        const {name,value}=e.target
        setForm({...form,[name]:value})
    }



  return (
     <div className='w-full h-[100vh] flex items-center justify-center'>
         <form onSubmit={handleForm}>
             <input type="text" placeholder='username' className='p-3 border-2 border-black' onChange={handleInput} name='username' />
             <br />
             <input type="email" placeholder='email' className='p-3 border-2 border-black' onChange={handleInput} name='email'/>
             <br />
             <input type="password" placeholder='password' className='p-3 border-2 border-black' onChange={handleInput} name='password'/>
             <br />
             <input type="text" placeholder='mobile' className='p-3 border-2 border-black' onChange={handleInput} name='mobile'/>
             <br />
             <br />
             <select name="education" onChange={handleInput} className='border-2'>
                <option value="">select education</option>
                <option value="Btech">Btech</option>
                 <option value="BCA">BCA</option>
                  <option value="Bsc">Bsc</option>
                   <option value="MCA">MCA</option>
                    <option value="Mtech">Mtech</option>
             </select>
             <br />
             <input type="date" name="date" value={form.date} onChange={handleInput} /><br />
             <button className='p-2 border-2 border-blue-300'>submit</button>
         </form>
     </div>
  )
}

export default ControlledForm