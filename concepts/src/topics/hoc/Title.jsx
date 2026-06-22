

import React from 'react'


const Title = ({children,color,visibility}) => {
  return (
    <div> 
        {
            !visibility? <div>we cant access the card </div>:
            <div>
               <h1 style={{backgroundColor:`${color}`}}>Card Title</h1>
            </div>
        }
        
        {
            children
        }


    </div>
  )
}

export default Title