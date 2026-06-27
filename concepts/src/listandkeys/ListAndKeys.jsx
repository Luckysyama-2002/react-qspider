

import React from 'react'

const ListAndKeys = () => {
    const arr=["mala","seela","sundari","hina","kamli"]
  return (
    <div>
        <ol className='ml-5 list-decimal'>
            {
                arr.map((ele,index)=>{
                return<li key={index}>{ele}</li>
            })
            }
        </ol>



    </div>
  )
}

export default ListAndKeys