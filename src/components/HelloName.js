import React from 'react'
import HelloNameChild from './HelloNameChild'
const HelloName=(props)=>{
  console.log(props)
    return (
      <HelloNameChild fullname={props.fullname}/>
    )
}

export default HelloName