

import axios from 'axios'
import React, { useEffect } from 'react'
import {Audio,TailSpin,RotatingLines,Oval} from 'react-loader-spinner'

const AxiosConcept = () => {
    //1- without axios library
    // const fetchData =async ()=>{
    //     const data=await fetch("https://fakestoreapi.com/products")
    //     const res = await data.json()
    //     console.log(res)
    // }

    //2- with axios lib 
    const fetchData=async ()=>{
        const {data}= await axios.get("https://fakestoreapi.com/products")
        console.log(data)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>  
     <Audio/>
     <TailSpin/>
     <RotatingLines/>
     <Oval/>


    </div>
  )
}

export default AxiosConcept