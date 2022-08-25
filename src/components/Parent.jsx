import React, { Component } from 'react'
import Child from './Child'
export class Parent extends Component {
  render() {
    return (
     <Child num1='5' num2='6' operation="+"/>
         )
  }
}

export default Parent