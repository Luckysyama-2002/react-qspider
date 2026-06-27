
const UncontrolledForm = () => {
    const usernameRef=useRef()
    const userageRef=useRef()
    const handleForm=(e)=>{
        e.preventDefault()
        
        console.log(usernameRef.current.value)
        usernameRef.current.value=""

        console.log(userageRef.current.value)
        userageRef.current.value=""
    }

    console.log(usernameRef)
    console.log(userageRef)
  return (
    <div>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={handleForm}>
            <input className='border' type='text' placeholder='username' ref={usernameRef}/>
            <input className='border' type='number' placeholder='age' ref={userageRef}/>
            <button className='border'>Submit</button>
            
        </form>



    </div>
  )
}

export default UncontrolledForm

//  to check each fields is filled with data or not -
//  if (!email || !passsword){
//     console.log("All inputs are required ")
//     return
//  }

//  data validation
//  if(email !==userData.email || password!==userData.passsword){
//     console.log("invalid credentials")
//   toast.error("invalid credentials",{position:"top-center"})
//     return
//  }

// toast.success("login successfully dome", {position:"top-center"})
// usernameRef.current.value=""
// passwordRef.current.value=""
 
{/* <div classname="w-full h-[100] flex items-center justify-center"></div> */}
{/* <form Onsubmit={handleForm}>
    {/* <input type ="text" placeholder='username' className='p-3 border-2 border black' */}