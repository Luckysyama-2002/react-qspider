import React, { useState } from 'react'

const Card2 = () => {
    const [cardData,setCardData]=useState({
        img:'https://cdn.pixabay.com/photo/2026/06/10/18/06/18-06-12-392_1280.jpg',
        username:'ShyamSundar',
        age:'45'})

   
    const change_Image=()=>{
        const url=prompt("Enter your image url")
        setCardData({...cardData,img:url})
    }

    const change_Name=()=>{
        const name=prompt("Enter your name")
        setCardData({...cardData,username:name})
       
        
    }
    
    const change_Age=()=>{
        const age=prompt("Enter your age")
        setCardData({...cardData,age:age})
        
    }
  return (
    <div style={{width:"300px",height:"300px",borderRadius:"10px",border:"2px solid black"}}>
    
    <div style={{width:"100%", height:"55%", backgroundColor:"lightgrey",backgroundImage:`url(${cardData.img})`, backgroundSize:"cover"}}></div>

    <h1 style ={{textAlign:"center"}}>{cardData.username}</h1>
    <p style={{textAlign:"center"}}>Age : {cardData.age}</p>

    <button onClick={change_Image}>Change Image</button>

    <button onClick={change_Name}>Change Name</button>

    <button onClick={change_Age}>Change Age</button>


    </div>
  )
}

export default Card2