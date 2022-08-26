import React from 'react'
const HelloNameGrandChild=(props)=>{
  const {name,surname}=props.fullname
  console.log(props.fullname)
    return (
      <h1>Hello {name} {surname}!</h1>
    )
}

export default HelloNameGrandChild