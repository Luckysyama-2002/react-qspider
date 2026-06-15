

import React from "react";
import User from "./User";

const Props_With_Conditional_Rendering =()=>{
    let data=[
        {
            username:"Sundari",
            age:56,
            email:"sundari@gmail.com",
            bike:"https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690_1280.jpg"
        },

         {
           username:"Maala",
            age:46,
            email:"mala@gmail.com",
            bike:"https://cdn.pixabay.com/photo/2014/12/16/03/37/motorcycle-569865_1280.jpg"
        },
        {
           username:"Shila",
            age:46,
            email:"shila@gmail.com",
            bike:null
        }     
    ]
    return(
        <div>
            {
                data.map((ele)=>{
                    return <User key={ele.email} data={ele}/>

                })
            }

        </div>
    )
}

export default Props_With_Conditional_Rendering