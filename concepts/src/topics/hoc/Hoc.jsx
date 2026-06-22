

import React from 'react'
import Card from './Card'
import Title from './Title'
const Hoc = () => {
  return (


    //a hoc is an advanced pattern in react used for reusing component logic. 
    <div>
        
        <Title color="red" visibility={true}>
            <Card/>
        </Title>
        <hr/>

        <Title color="grey" visibility={false}>
            <Card/>
        </Title>
        <hr/>

        <Title color="green" visibility={true}>
            <Card/>
        </Title>

    </div>
  )
}

export default Hoc