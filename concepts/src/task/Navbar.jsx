import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navbar=['Home', 'About','Services','Help','Projects' ]
  return (
    <nav className='w-full h-[78px]  flex justify-between shadow-lg'>
      <div className='w-[20%] h-full flex items-center justify-center'>
        Logo</div>

        <div className='h-full w-[50%] flex justify-around' >
          <ul className='w-[70%] h-full flex items-center justify-around '>
            {
              navbar.map((ele)=>{
                return <li className='p-3 rounded-lg cursor-pointer'>{ele}  </li>
              })
            }
            <span className='relative'>
              <FaCartShopping size={30} color='green'/>
              <span className='absolute top-[-80%] left-30%'>
                1
              </span>
            </span>

            <span>
              <FaUserCircle size={30} color='green'/>
            </span>


          </ul>




        </div>



    </nav>
  )
}

export default Navbar