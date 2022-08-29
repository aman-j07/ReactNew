import React, { Component } from 'react'

class Counter extends Component {
    count=0;
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
    }
  }
  update(operation){
    if(this.count===0){
      if(operation==="increase"){
        this.count++;
      }}
    else{
    if(operation==="decrease"){
      this.count--;
    }
    else if(operation==="increase"){
      this.count++;
    }
    else{
      this.count=0;
    }
    }
    this.setState({
      count:this.count
   })
  }
    render() {
    return (
      <div>
        <button onClick={()=>this.update("decrease")}>-</button>
        <p>{this.state.count}</p>
        <button onClick={()=>this.update("increase")}>+</button>
        <button id="reset" onClick={()=>this.update("reset")}>Reset</button>
      </div>
    )
  }
}

export default Counter