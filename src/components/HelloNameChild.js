import React from 'react'
import HelloNameGrandChild from './HelloNameGrandChild'
const HelloNameChild=(props)=>{
  console.log(props.fullname)
    return (
      <HelloNameGrandChild fullname={props.fullname}/>
    )
}

export default HelloNameChild