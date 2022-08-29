import React, { Component } from 'react'

class Button extends Component {
    evod="";
    count=0;
  constructor(props) {
    super(props)
  
    this.state = {
      count:0,
      evod:""
    }
  }
  update=()=>{
    this.count++;
     if(this.count%2===0){
       this.evod="even"
     }
     else{
        this.evod="odd"
     }
    this.setState({
        count:this.state.count+1,
        evod:this.evod
     })
  }
    render() {
    return (
      <div>
        <button onClick={this.update}>{this.state.count}</button>
        <p>{this.state.evod}</p>
      </div>
    )
  }
}

export default Button