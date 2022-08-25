import React from 'react'

const HelloName=(props)=>{
  console.log(props)
    const {name,surname}=props.fullname
    return (
      <h1>Hello {name} {surname}</h1>
    )
}

export default HelloName