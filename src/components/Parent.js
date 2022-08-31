import React, { Component, createRef } from 'react'
import ChangeBackground from './ChangeBackground'
class Parent extends Component {
    num=1;
    refInput=createRef();
    constructor(props) {
      super(props)
    
      this.state = {
         num:this.num,
      }
    }
    clickHandlerNumber=event=>{
        this.num=event.target.value;
        this.setState({
            num:this.num,
        })
    }
  render() {
    return (
      <>
      <input type="number" onChange={this.clickHandlerNumber}></input>
      <p>Enter the number you want to send as a prop</p>
      <ChangeBackground num={this.state.num}/>
      </>
    )
  }
}

export default Parent